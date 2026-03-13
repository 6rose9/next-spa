"use client";

import { useEffect } from "react";
import useAuth from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import LoginUI from "@/app/login/components/LoginUI";

export default function LoginPage() {
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (auth) {
      console.log("Already logged in");
      router.push("/");
    }
  }, []);

  return (
    <div>
      <LoginUI />
    </div>
  );
}
