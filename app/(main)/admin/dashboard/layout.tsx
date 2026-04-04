"use client"
import React, {ReactNode} from 'react';
import {DashboardContextProvider} from "@/hooks/DashboardContext";
import Index from "@/app/(main)/admin/dashboard/index";

const DashboardLayout = ({children}: { children: ReactNode }) => {
    return (
        <DashboardContextProvider>
            <Index>

                {children}
            </Index>
        </DashboardContextProvider>
    );
};

export default DashboardLayout;