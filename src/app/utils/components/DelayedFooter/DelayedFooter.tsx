"use client";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import { usePathname } from "next/navigation";

export default function DelayedFooter() {
  const pathname = usePathname()
  const pathSegments = pathname?.split("/") || [];
  const isAdmin = pathSegments[1] !== "Admin";
  const [mounted, setMounted] = useState(false);
  setTimeout(() => {
    setMounted(true);
  }, 2000);
  return mounted && isAdmin ? <Footer /> : null;
}
