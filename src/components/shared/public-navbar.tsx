/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useAppSelector } from "@/redux/hooks";
import { CloseOutlined, DownOutlined, MenuOutlined } from "@ant-design/icons";
import { Button, Drawer, Dropdown, MenuProps } from "antd";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ProfileDropdown from "./ProfileDropdown";

/* ================= MENU ================= */
const menuItems = [
  { name: "Flights", href: "/flights" },
  { name: "Hotels", href: "/hotels" },
  { name: "Holiday", href: "/holiday" },
  { name: "Visa", href: "/visa" },
  { name: "Hajj", href: "/hajj" },
  { name: "Umrah", href: "/umrah" },
  {
    name: "More",
    href: "#",
    submenu: [
      { name: "News", href: "/news" },
      { name: "Travel Guide", href: "/travel-guide" },
      { name: "About Us", href: "/about-us" },
    ],
  },
];

const DesktopNavItem = ({ item }: any) => {
  const pathname = usePathname();

  const isActive =
    pathname === item.href ||
    (item.submenu && item.submenu.some((sub: any) => pathname === sub.href));

  // NORMAL LINK
  if (!item.submenu) {
    return (
      <Link
        href={item.href}
        className={`px-3 py-2 text-sm font-medium rounded-sm transition
        ${
          isActive
            ? "text-blue-600 bg-blue-50"
            : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
        }`}
      >
        {item.name}
      </Link>
    );
  }

  // DROPDOWN
  const items: MenuProps["items"] = item.submenu.map(
    (sub: any, index: number) => ({
      key: index,
      label: (
        <Link
          href={sub.href}
          className={`block py-1.5 text-sm transition
          ${
            pathname === sub.href
              ? "text-blue-600 font-medium"
              : "text-gray-700 hover:text-blue-600"
          }`}
        >
          {sub.name}
        </Link>
      ),
    }),
  );

  return (
    <Dropdown menu={{ items }} trigger={["hover"]} placement="bottomLeft">
      <button
        className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-sm transition
        ${
          isActive
            ? "text-blue-600 bg-blue-50"
            : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
        }`}
      >
        {item.name}
        <DownOutlined className="text-xs" />
      </button>
    </Dropdown>
  );
};

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);

  const user = useAppSelector((state) => state.auth.user);
  const isLoading = useAppSelector((state) => state.auth.isLoading);
  const isLoggedIn = !!user;

  /* LOCK BODY SCROLL */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileOpen]);
  if (isLoading) return null;

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur border-b z-30">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* LOGO */}
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={200}
              height={40}
              priority
              className="max-h-8 w-auto"
              style={{ width: "auto", height: "auto" }}
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item, i) => (
              <DesktopNavItem key={i} item={item} />
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden md:flex items-center">
            {!isLoggedIn ? (
              <Link href="/login">
                <Button type="primary">Login</Button>
              </Link>
            ) : (
              <ProfileDropdown />
            )}
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden p-2 rounded-sm hover:bg-gray-100"
          >
            <MenuOutlined className="text-xl text-gray-700" />
          </button>
        </div>
      </nav>

      {/* ================= MOBILE DRAWER ================= */}
      <Drawer
        title={
          <Image
            src="/logo.png"
            alt="logo"
            width={140}
            height={40}
            className="object-contain h-8 w-auto"
          />
        }
        placement="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        closable={false}
        size={320}
        styles={{
          header: {
            borderBottom: "1px solid #e5e7eb",
            padding: "16px 20px",
          },
          body: { padding: "12px 8px" },
        }}
        extra={
          <button onClick={() => setMobileOpen(false)}>
            <CloseOutlined className="text-xl text-gray-600" />
          </button>
        }
      >
        <div className="flex flex-col h-full">
          {/* MENU */}
          <div className="flex-1 space-y-1 px-2">
            {menuItems.map((item, i) => (
              <div key={i}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenSubmenu(openSubmenu === i ? null : i)
                      }
                      className="w-full flex justify-between items-center px-4 py-3 rounded-sm hover:bg-gray-100 font-medium transition"
                    >
                      {item.name}
                      <DownOutlined
                        className={`transition-transform ${
                          openSubmenu === i ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* SUBMENU */}
                    <div
                      className={`overflow-hidden transition-all duration-200 pl-6 ${
                        openSubmenu === i ? "max-h-40" : "max-h-0"
                      }`}
                    >
                      {item.submenu.map((sub: any) => {
                        const isActive = pathname === sub.href;

                        return (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setMobileOpen(false)}
                            className={`block py-2.5 text-sm rounded-sm px-2 transition
                              ${
                                isActive
                                  ? "text-blue-600 bg-blue-50 font-medium"
                                  : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                              }`}
                          >
                            {sub.name}
                          </Link>
                        );
                      })}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 rounded-sm font-medium transition
                      ${
                        pathname === item.href
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* AUTH */}
          <div className="pt-6 border-t px-4">
            {!isLoggedIn ? (
              <Link href="/auth/signin" onClick={() => setMobileOpen(false)}>
                <Button
                  type="primary"
                  block
                  size="large"
                  className="font-medium rounded-none!"
                >
                  Login
                </Button>
              </Link>
            ) : (
              <ProfileDropdown
                isMobile
                closeMobileMenu={() => setMobileOpen(false)}
              />
            )}
          </div>
        </div>
      </Drawer>
    </>
  );
}
