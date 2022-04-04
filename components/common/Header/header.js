import styles from "./HeaderStyles.module.css";
import Link from "next/link";
import Image from "next/image";
import prev from "../../../images/prev.gif";
import next from "../../../images/next.gif";

function HeaderComponent() {
  return (
    <div className={styles.header}>
      <div className={styles.rowcontainer}>
        <Link href="https://ring.yell.rocks/prev">
          <Image src={prev} layout="fixed" unoptimized="true" />
        </Link>
        <h1>Internet League Blaseball Fans Web Ring</h1>
        <Link href="https://ring.yell.rocks/next">
          <Image src={next} layout="fixed" unoptimized="true" />
        </Link>
      </div>
      <div className={styles.rowcontainer}>
        <Link href="https://ring.yell.rocks/prev">
          <a>Previous</a>
        </Link>
        <span>
          <Link href="/">
            <a>Home</a>
          </Link>{" "}
          <Link href="/resources">
            <a>Resources</a>
          </Link>{" "}
          <Link href="/members">
            <a>Members</a>
          </Link>
        </span>
        <Link href="https://ring.yell.rocks/next">
          <a>Next</a>
        </Link>
      </div>
    </div>
  );
}
export default HeaderComponent;
