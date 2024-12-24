import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { signOut } from "@ui/auth/actions";
export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className="font-semibold text-center text-6xl">Acme Inc.</h1>
        <form action={signOut} className="flex justify-center">
          <Button>Logout</Button>
        </form>
      </main>
      <footer className={styles.footer}>
        <span>footer</span>
      </footer>
    </div>
  );
}
