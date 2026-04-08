"use client";
import React, { ReactNode } from "react";
import { DashboardContextProvider } from "@/hooks/DashboardContext";
import Index from "@/app/(main)/admin/dashboard/index";
import { useProtectedRoute } from "@/lib/ProtectedRoute";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  useProtectedRoute();
  return (
    <DashboardContextProvider>
      <Index>{children}</Index>
    </DashboardContextProvider>
  );
};

export default DashboardLayout;
