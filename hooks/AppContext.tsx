"use client";

import { usePathname } from "next/navigation";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
interface IContext {
  navOpen: boolean;
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleToggleNav: () => void;
}

export const AppContext = createContext<IContext | undefined>(undefined);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState<boolean>(false);
  function handleToggleNav() {
    setNavOpen((prev) => !prev);
  }
  useEffect(() => {
    setNavOpen(false);
  }, [pathname]);

  return (
    <AppContext.Provider value={{ navOpen, setNavOpen, handleToggleNav }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error("useAppContext must be used inside AppContextProvider");
  } else {
    return ctx;
  }
};
