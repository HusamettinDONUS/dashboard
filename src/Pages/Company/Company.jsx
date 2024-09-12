import Header from "../../Components/Header/Header";
import styles from "./company.module.scss";

function Company() {
  return (
    <div className={styles.company}>
      <Header />
      <h1>Company</h1>
    </div>
  );
}

export default Company;
