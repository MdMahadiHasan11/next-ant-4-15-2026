"use server";

import config from "@/config";
import { OtpVerifyValues, SigninCredentials } from "@/types";
import { cookies } from "next/headers";

const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  path: "/",
  sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
  expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
} as const;

export async function sendLoginRequest(formData: SigninCredentials) {
  try {
    const res = await fetch(
      `${config.host}/auth-service/auth/send-login-request`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          user_type: "b2c",
        }),
      },
    );

    const result = await res.json();

    if (!result?.success) {
      return {
        success: false,
        errors: result?.message || "Login request failed",
      };
    }

    // Set cookie only if accessToken exists
    if (result?.data?.accessToken) {
      const cookieStore = await cookies();
      cookieStore.set("session", result.data.accessToken, COOKIE_OPTIONS);
    }

    return {
      success: true,
      data: result.data,
    };
  } catch (error) {
    console.error("sendLoginRequest error:", error);
    return {
      success: false,
      errors: "Something went wrong. Please try again.",
    };
  }
}

export async function signin(formData: OtpVerifyValues) {
  try {
    const res = await fetch(`${config.host}/auth-service/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token_id: formData.token_id,
        otp: formData.otp,
      }),
      credentials: "include",
    });

    const result = await res.json();

    if (!result?.success) {
      return {
        success: false,
        errors: result?.message || "Login failed",
      };
    }

    if (result?.data?.accessToken) {
      const cookieStore = await cookies();
      cookieStore.set("session", result.data.accessToken, COOKIE_OPTIONS);
    }

    return {
      success: true,
      data: result.data,
    };
  } catch (error) {
    console.error("signin error:", error);
    return {
      success: false,
      errors: "Something went wrong. Please try again.",
    };
  }
}

export async function googleSignIn(code: string) {
  try {
    const res = await fetch(`${config.host}/auth-service/auth/google`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    });

    const result = await res.json();

    if (!result?.success) {
      return {
        success: false,
        errors: result?.message || "Google login failed",
      };
    }

    if (result?.data?.accessToken) {
      const cookieStore = await cookies();
      cookieStore.set("session", result.data.accessToken, {
        ...COOKIE_OPTIONS,
        sameSite: "strict",
        secure: true,
      });
    }

    return {
      success: true,
      data: result.data,
    };
  } catch (error) {
    console.error("googleSignIn error:", error);
    return {
      success: false,
      errors: "Something went wrong. Please try again.",
    };
  }
}

export async function signout() {
  try {
    const cookieStore = cookies();
    (await cookieStore).delete("session");
  } catch (error) {
    console.error("signout error:", error);
  }
}

// service/auth.ts
export const getMe = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch("/auth-service/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
};
