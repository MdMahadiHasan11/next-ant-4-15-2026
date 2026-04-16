/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useSession } from "@/provider/session-provider";
import { login } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { sendLoginRequest, signin } from "@/service/auth";
import { SigninCredentials } from "@/types";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { App, Button, Form, Input } from "antd";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { OtpInput } from "../../ui/otp-input";

export default function SigninForm() {
  const [step, setStep] = useState<1 | 2>(1);
  const [tokenID, setTokenID] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const { setIsLoading } = useSession();
  const dispatch = useAppDispatch();
  const { message } = App.useApp();
  // Ant Design Form Instance
  const [form] = Form.useForm();

  const handleStandardLogin = async (values: SigninCredentials) => {
    setLoading(true);
    setIsLoading(true);

    try {
      const response = await sendLoginRequest(values);

      if (response.success && response?.data?.accessToken) {
        localStorage.setItem("token", response.data.accessToken);

        dispatch(login(response.data));
        const destination = searchParams.get("redirect") || "/";
        router.replace(decodeURIComponent(destination));
        message.success("User Logged In Successfully");
      } else if (response.success && response?.data?.token_id) {
        setTokenID(response.data.token_id);
        setStep(2);
        message.info("OTP sent to your email");
      } else {
        message.error(response?.errors || "Login failed");
      }
    } catch (error: any) {
      message.error(error?.message || "Something went wrong");
    } finally {
      setLoading(false);
      setIsLoading(false);
    }
  };

  const handleOTPSubmit = async () => {
    if (otp.length !== 6) {
      message.error("Please enter a valid 6-digit OTP");
      return;
    }

    setLoading(true);
    setIsLoading(true);

    try {
      const response = await signin({ token_id: tokenID, otp });

      if (response.success && response?.data?.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
        dispatch(login(response.data.userData));

        const destination = searchParams.get("redirect") || "/";
        router.replace(decodeURIComponent(destination));
        message.success("Login successful!");
      } else {
        message.error(response?.errors || "Invalid OTP");
      }
    } catch (error: any) {
      message.error(error?.message || "OTP verification failed");
    } finally {
      setLoading(false);
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {step === 1 && (
        <Form
          form={form}
          layout="vertical"
          onFinish={handleStandardLogin}
          autoComplete="off"
        >
          <Form.Item
            label={<span className="text-[#475569] font-medium">Email</span>}
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <Input
              placeholder="example@email.com"
              size="large"
              className="bg-[#f8fafc] border-[#e2e8f0] h-12"
            />
          </Form.Item>

          <Form.Item
            label={<span className="text-[#475569] font-medium">Password</span>}
            name="password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Your password"
                size="large"
                className="bg-[#f8fafc] border-[#e2e8f0] h-12 pr-10"
              />
              <Button
                type="text"
                className="absolute right-2 top-1/2 -translate-y-1/2  hover:bg-none hover:text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
                icon={
                  showPassword ? (
                    <EyeInvisibleOutlined className="text-lg" />
                  ) : (
                    <EyeOutlined className="text-lg" />
                  )
                }
              />
            </div>
          </Form.Item>

          <div className="flex justify-end mb-4">
            <Link
              href="/auth/forgot-password"
              className="text-sm font-medium text-[#1d4ed8] hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            className="w-full h-12 bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-medium text-base"
            size="large"
          >
            Sign In
          </Button>
        </Form>
      )}

      {step === 2 && (
        <div className="space-y-5">
          <div>
            <p className="text-sm text-gray-600 mb-3">
              Enter the 6-digit OTP sent to your email.
            </p>
            <OtpInput
              value={otp}
              onChange={(value) => setOtp(value)}
              length={6}
              autoFocus={true}
            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              className="text-[#1d4ed8] text-sm font-medium hover:underline"
              onClick={() => form.submit()}
            >
              Resend OTP
            </button>
          </div>

          <Button
            type="primary"
            onClick={handleOTPSubmit}
            loading={loading}
            className="w-full h-12 bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-medium text-base"
            size="large"
          >
            Verify OTP & Login
          </Button>
        </div>
      )}
    </div>
  );
}
