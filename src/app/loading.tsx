"use client";

import { Spin } from "antd";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/10 backdrop-blur-sm">
      <Spin size="large" />
    </div>
  );
}
