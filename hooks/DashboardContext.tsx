"use client"
import React, {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {usePathname} from "next/navigation";

interface IDashboardContext {
    navOpen: boolean;
    setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
    handleToggleNav: () => void;
}

export const DashboardContext = createContext<IDashboardContext | undefined>(undefined);
export const DashboardContextProvider = ({children}: { children: ReactNode }) => {
    const pathname = usePathname();
    const [navOpen, setNavOpen] = useState<boolean>(false);

    function handleToggleNav() {
        setNavOpen((prev) => !prev);
    }

    useEffect(() => {
        setNavOpen(false);
    }, [pathname]);

    return (
        <DashboardContext.Provider value={{navOpen, setNavOpen, handleToggleNav}}>
            {children}
        </DashboardContext.Provider>
    );
};

export const useDashboardContext = () => {
    const ctx = useContext(DashboardContext);
    if (!ctx) {
        throw new Error("useDashboardContext must be used inside DashboardContextProvider");
    } else {
        return ctx;
    }
};
