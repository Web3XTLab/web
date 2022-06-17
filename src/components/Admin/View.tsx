import { AppInfo } from "./components/AppInfo";
import { Buy } from "./components/Buy";
import { Sell } from "./components/Sell";
import { URIList } from "./components/URIList";
import { Verify } from "./components/Verify";
import styles from "./styles.module.scss";

export function Admin() {
  return (
    <div className={styles.Admin}>
      <main className={styles.main}>
        <h1 className={styles.title}>Admin Page</h1>
        <div className={styles.component}>
          <Buy />
        </div>
        <div className={styles.component}>
          <Sell />
        </div>
        <div className={styles.component}>
          <Verify />
        </div>
        <div className={styles.component}>
          <AppInfo />
        </div>
        <div className={styles.component}>
          <URIList />
        </div>
      </main>
    </div>
  );
}
