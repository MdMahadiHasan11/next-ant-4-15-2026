import SigninForm from "@/components/modules/auth/signin-form";
import Link from "next/link";

export default function SigninPage() {
  return (
    <div className="flex items-center justify-center bg-[#f0f4f8] relative pb-28 pt-36 min-h-screen">
      {/* Background city illustration */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div
          className="absolute bottom-0 left-0 w-full h-1/2 bg-contain bg-no-repeat bg-bottom-left"
          style={{
            backgroundImage: "url('/placeholder.svg?height=400&width=800')",
          }}
        ></div>
      </div>

      <div className="w-full max-w-md bg-white rounded-sm p-8">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold  ">Please Sign in</h1>
          <p className="  mt-1">You need to Sign in first to continue</p>
        </div>

        <SigninForm />

        <div className="mt-6 text-center text-sm  ">
          Don&apos;t have an account?{" "}
          <Link
            href="/auth/signup"
            className="font-medium text-[#1d4ed8] hover:underline"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
