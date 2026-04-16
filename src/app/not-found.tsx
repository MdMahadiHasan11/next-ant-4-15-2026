"use client";

import {
  ArrowLeftOutlined,
  HomeOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";

function NotFoundContent() {
  const router = useRouter();

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-linear-to-b from-background to-muted/20 overflow-hidden">
      <div className="container flex flex-col items-center justify-center gap-8 px-4 text-center">
        {/* 404 Animation Section */}
        <div>
          <div className="relative">
            {/* Animated Circle */}
            <div className="absolute inset-0 rounded-full bg-red-500/10 animate-pulse" />

            {/* 404 Text */}
            <div className="relative z-10 flex h-48 w-48 items-center justify-center">
              <h1 className="text-8xl font-bold text-primary">404</h1>
            </div>

            {/* Floating Icon */}
            <div className="absolute -top-4 -right-4 rounded-full bg-red-500 p-3 text-white shadow-lg animate-float">
              <WarningOutlined style={{ fontSize: 28 }} />
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground max-w-md">
            Oops! The page you are looking for doesn’t exist. It might have been
            moved or deleted.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            onClick={() => router.back()}
            className="flex items-center gap-2"
          >
            <ArrowLeftOutlined />
            Go Back
          </Button>

          <Link href="/">
            <Button type="primary" className="flex items-center gap-2">
              <HomeOutlined />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Extra Hint */}
        <p className="text-sm text-muted-foreground">
          Try checking the URL or go back to homepage.
        </p>
      </div>
    </div>
  );
}

export default function NotFound() {
  return <NotFoundContent />;
}
