"use client";

import { useAppDispatch } from "@/lib/hooks";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { logout } from "@/lib/features/auth/authSlice";

export default function LogoutPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const btnLogoutHandler = () => {
    dispatch(logout());
    router.push("/login");
  };
  return (
    <div>
      <Button
        type="button"
        variant="contained"
        onClick={btnLogoutHandler}
      >
        Logout
      </Button>
    </div>
  );
}
