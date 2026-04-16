"use client";

import { HomeOutlined, ReloadOutlined } from "@ant-design/icons";
import { Button, Card, Result, Space, Typography } from "antd";
import Link from "next/link";
import { useEffect } from "react";

const { Paragraph, Text } = Typography;

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <Card className="w-full max-w-2xl shadow-lg rounded-2xl">
        <Result
          status="error"
          title="Oops! Something went wrong"
          subTitle="We encountered an unexpected error. Don't worry, it's not your fault."
        />

        {/* Development Error Details */}
        {process.env.NODE_ENV === "development" && (
          <div className="mt-4 p-4 bg-gray-100 rounded-lg">
            <Paragraph copyable className="break-all text-red-500">
              {error.message}
            </Paragraph>

            {error.digest && (
              <Text type="secondary" className="text-xs">
                Error ID: {error.digest}
              </Text>
            )}
          </div>
        )}

        {/* Actions */}
        <Space className="w-full flex justify-center mt-6" wrap>
          <Button type="primary" icon={<ReloadOutlined />} onClick={reset}>
            Try Again
          </Button>

          <Link href="/">
            <Button icon={<HomeOutlined />}>Back to Home</Button>
          </Link>
        </Space>

        <div className="text-center mt-6 text-gray-500 text-sm">
          If this problem persists, contact support.
        </div>
      </Card>
    </div>
  );
}
