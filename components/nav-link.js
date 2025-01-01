"use client";
import Link from "next/link";
import React from "react";
import styles from "@/components/nav.module.css";
import { usePathname } from "next/navigation";

export default function NavKink({ href, children }) {
  const path = usePathname();
  return (
    <div>
      <Link
        href={href}
        className={path.startsWith(href) ? styles.active : undefined}
      >
        {children}
      </Link>
    </div>
  );
}
