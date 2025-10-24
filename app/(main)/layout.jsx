"use client";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";

export default function Providers({ children }) {
  return (
  <SessionProvider>
    <Toaster></Toaster>
    {children}
  </SessionProvider>);
}
