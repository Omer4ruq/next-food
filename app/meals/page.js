import Link from "next/link";
import styles from "./page.module.css";
import { getMeals } from "@/lib/meals";
import MealsGrid from "@/components/meals/meals-grid";

export default async function meals() {
  const meals = await getMeals();
  return (
    <div>
      <header className={styles.header}>
        <h1>Delecious Foods to share</h1>
        <p>Choss your fabourite recipe</p>
        <p className={styles.cta}>
          <Link href="./meals/share">Share your favourite Recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <MealsGrid meals={meals}></MealsGrid>
      </main>
    </div>
  );
}
