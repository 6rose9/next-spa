import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAppSelector } from "@/lib/hooks";
import { selectAuth } from "@/lib/features/auth/authSlice";

export default function WithAuth(
  Component: React.JSX.ElementType,
  ...props: any[]
) {
  return function AuthWrapper() {
    const pathname = usePathname();
    const router = useRouter();
    const auth = useAppSelector(selectAuth);

    useEffect(() => {
      if (!auth) {
        router.push("/login?redirectTo=" + pathname);
      }
    }, [auth, pathname, router]);

    if (!auth) return null;

    return <Component {...props} />;
  };
}
