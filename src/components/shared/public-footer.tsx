"use client";

import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Mail, MapPinned, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PublicFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 pt-8">
        {/* ================= TOP ================= */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {/* LOGO */}
          <div className="lg:col-span-2 gap-2 flex flex-col items-start">
            <Image
              src="/logo.png"
              alt="logo"
              width={200}
              height={40}
              priority
              className="max-h-8 w-auto"
              style={{ width: "auto", height: "auto" }}
            />
            <p className="text-gray-500 text-sm">
              <span className="font-medium text-gray-800">FlyGhor</span> makes
              travel simple and accessible for everyone.
            </p>
          </div>

          {/* EXPLORE */}
          <div>
            <h3 className="font-semibold mb-2 text-gray-800 text-sm">
              Explore
            </h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/about-us" className="hover:text-blue-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-blue-600">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-blue-600">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="font-semibold mb-2 text-gray-800 text-sm">
              Services
            </h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/flights" className="hover:text-blue-600">
                  Flights
                </Link>
              </li>
              <li>
                <Link href="/hotels" className="hover:text-blue-600">
                  Hotels
                </Link>
              </li>
              <li>
                <Link href="/visa" className="hover:text-blue-600">
                  Visa
                </Link>
              </li>
            </ul>
          </div>

          {/* USEFUL */}
          <div>
            <h3 className="font-semibold mb-2 text-gray-800 text-sm">Useful</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Travel Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Visa Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* PAYMENT */}
          <div>
            <h3 className="font-semibold mb-2 text-gray-800 text-sm">
              Payments
            </h3>
            <p className="text-sm text-gray-500">Visa, MasterCard, bKash</p>
          </div>
        </div>

        {/* ================= CONTACT ================= */}
        <div className="mt-10 border-t border-gray-100 pt-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* CONTACT */}
            <div>
              <h3 className="font-bold text-lg  mb-4">Contact</h3>

              <div className="space-y-4 text-sm">
                <div className="flex gap-2 items-center">
                  <Mail className="h-5 w-5" />
                  <a
                    href="mailto:info@flyghor.com"
                    className="hover:text-blue-600"
                  >
                    info@flyghor.com
                  </a>
                </div>

                <div className="flex gap-2 items-center">
                  <Phone className="h-5 w-5" />
                  <a href="tel:+8801234567890" className="hover:text-blue-600 ">
                    +880 1234-567890
                  </a>
                </div>
              </div>
            </div>

            {/* OFFICE */}
            <div className="md:col-span-2">
              <h3 className="font-bold text-lg  mb-4">FlyGhor (Dhaka)</h3>

              <div className="flex gap-3 text-sm text-gray-500 items-center justify-start">
                {/* <EnvironmentOutlined className="text-blue-600 mt-1" /> */}
                <MapPinned className="h-5 w-5" />
                <p className="mt-1">
                  Sky View Trade Valley 66/1 VIP Road, Naya Paltan, Dhaka-1000
                </p>
              </div>

              <a
                href="https://maps.google.com?q=Sky+View+Trade+Valley+Dhaka"
                target="_blank"
                className="inline-block mt-3 text-blue-600 text-sm hover:underline"
              >
                View on Google Maps →
              </a>
            </div>

            {/* SOCIAL */}
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-4">
                Follow
              </h3>

              <div className="flex gap-4 text-xl text-gray-400">
                <a href="#" className="text-[#1877F2] transition">
                  <FacebookOutlined />
                </a>
                <a href="#" className=":text-[#1DA1F2] transition">
                  <TwitterOutlined />
                </a>
                <a href="#" className="text-[#E4405F] transition">
                  <InstagramOutlined />
                </a>
                <a href="#" className="text-[#0A66C2] transition">
                  <LinkedinOutlined />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ================= PARTNERS ================= */}
        <div className="mt-8 border-t pt-6">
          <div className="flex flex-wrap justify-center items-center gap-6">
            <Image
              src="/Authorize/pata.svg"
              alt="PATA"
              width={40}
              height={40}
              style={{ width: "auto", height: "auto" }}
            />

            <Image
              src="/Authorize/google.svg"
              alt="Google"
              width={60}
              height={40}
              style={{ width: "auto", height: "auto" }}
            />

            <Image
              src="/Authorize/iata.svg"
              alt="IATA"
              width={40}
              height={30}
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="mt-6 border-t py-3 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <div className="flex gap-4">
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
          </div>

          <p className="mt-2 md:mt-0">
            © {currentYear} <span className="text-blue-600">FlyGhor</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
