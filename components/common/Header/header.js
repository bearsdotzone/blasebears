import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import baseball from "../../../images/baseball.gif";

function HeaderComponent() {
  return (
    <div className={styles.header}>
      <div className={styles.rowcontainer}>
        <Image src={baseball} layout="fixed" unoptimized="true" />
        <h1>Internet League Blaseball Fans Web Ring</h1>
        <Image src={baseball} layout="fixed" unoptimized="true" />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>{" "}
      <Link href="/resources">
        <a>Resources</a>
      </Link>
    </div>
  );
}
export default HeaderComponent;
