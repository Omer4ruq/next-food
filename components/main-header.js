import Link from "next/link";
import React from "react";
import styles from "@/components/header.module.css";
import NavKink from "./nav-link";
import logo from "../public/images/logo.png";
import Image from "next/image";

export default function MainHeader() {
  return (
    <div>
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          <Image src={logo} alt="A plate with food on it" />
          Next Level Food
        </Link>
        <nav className={styles.nev}>
          <ul>
            <li>
              <NavKink href={"/meals"}>Meals</NavKink>
            </li>
            <li>
              <NavKink href={"/community"}>Community</NavKink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
