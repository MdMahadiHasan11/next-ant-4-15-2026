"use client";

import { baseApi } from "@/redux/api/baseApi";
import { logout } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";

import { ChevronDown, LogOut, Ticket, User } from "lucide-react";

import { useGetMeQuery } from "@/redux/features/auth/authApi";
import { Avatar } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useRef, useState } from "react";

interface ProfileDropdownProps {
  isMobile?: boolean;
  closeMobileMenu?: () => void;
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({
  isMobile = false,
  closeMobileMenu = () => {},
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();
  const router = useRouter();

  const { data: user, isLoading } = useGetMeQuery();

  const isLoggedIn = !!user;

  useEffect(() => {
    if (isMobile) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile]);

  const toggleDropdown = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeDropdown = useCallback(() => {
    setIsOpen(false);
    if (isMobile) closeMobileMenu();
  }, [isMobile, closeMobileMenu]);

  const handleLogout = useCallback(async () => {
    try {
      localStorage.removeItem("token");

      dispatch(logout());
      dispatch(baseApi.util.resetApiState());

      router.push("/login");
    } catch (err) {
      console.error("Logout error:", err);
    }
  }, [dispatch, router]);

  if (!isLoggedIn) return null;

  const userInitial = user?.b2c?.firstName?.charAt(0) || "U";

  if (isMobile) {
    return (
      <div className="space-y-2">
        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <Avatar
            size={36}
            src={user?.b2c?.image?.url ? user.b2c.image.url : undefined}
            className="bg-gray-800 text-white font-bold flex items-center justify-center overflow-hidden"
          >
            {!user?.b2c?.image && userInitial}
          </Avatar>

          <div>
            <p className="font-semibold">
              {user?.b2c?.firstName} {user?.b2c?.lastName}
            </p>
            <p className="text-sm text-gray-500">{user?.email}</p>
          </div>
        </div>

        <Link
          href="/booking"
          onClick={closeDropdown}
          className="flex items-center gap-2 p-3 hover:bg-gray-100 rounded"
        >
          <Ticket size={18} />
          My Bookings
        </Link>

        <Link
          href="/my-profile"
          onClick={closeDropdown}
          className="flex items-center gap-2 p-3 hover:bg-gray-100 rounded"
        >
          <User size={18} />
          Profile
        </Link>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 p-3 text-red-600 hover:bg-red-50 w-full rounded"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    );
  }

  return (
    <div ref={dropdownRef} className="relative">
      {/* TRIGGER */}
      {isLoading ? (
        <div className="w-10 h-10 rounded-full bg-gray-300 animate-pulse" />
      ) : (
        <button
          onClick={toggleDropdown}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-gray-100 border transition cursor-pointer"
        >
          <Avatar
            size={36}
            src={user?.b2c?.image?.url ? user.b2c.image.url : undefined}
            className="bg-gray-800 text-white font-bold flex items-center justify-center overflow-hidden"
          >
            {!user?.b2c?.image && userInitial}
          </Avatar>

          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      )}

      {/* DROPDOWN */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-xl border z-50 overflow-hidden">
          {/* HEADER */}
          <div className="p-4 border-b bg-gray-50">
            <p className="font-semibold">
              {user?.b2c?.firstName} {user?.b2c?.lastName}
            </p>
            <p className="text-sm text-gray-500">{user?.email}</p>
          </div>

          {/* MENU */}
          <div className="py-2">
            <Link
              href="/booking"
              onClick={closeDropdown}
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
            >
              <Ticket size={18} />
              My Bookings
            </Link>

            <Link
              href="/my-profile"
              onClick={closeDropdown}
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
            >
              <User size={18} />
              Profile
            </Link>
          </div>

          {/* LOGOUT */}
          <div className="border-t">
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 w-full px-4 py-3 text-red-600 hover:bg-red-50"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
