// utils/ProtectedRoute.tsx
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const useProtectedRoute = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/admin/auth/signin"); // redirect to login if no token
    }
  }, [router]);
};
