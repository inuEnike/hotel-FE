"use client";
import React, { ReactNode } from "react";
import { DashboardContextProvider } from "@/hooks/DashboardContext";
import Index from "@/app/(main)/admin/dashboard/index";
import { AuthProvider } from "@/hooks/AuthContext";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default AuthLayout;
