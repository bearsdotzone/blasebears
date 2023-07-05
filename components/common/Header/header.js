import styles from "./HeaderStyles.module.css";
import Link from "next/link";
import Image from "next/legacy/image";
import prev from "../../../images/prev.gif";
import next from "../../../images/next.gif";

function HeaderComponent() {
  return (
    <div className={styles.header}>
      <div className={styles.rowcontainer}>
        <a
          href="https://ring.yell.rocks/prev"
          style={{ width: 108, height: 72, position: "relative" }}
        >
          <Image
            src={prev}
            layout="fill"
            unoptimized="true"
            alt="A baseball labelled Next"
          />
        </a>
        <h1>Internet League Blaseball Fans Web Ring</h1>
        <a
          href="https://ring.yell.rocks/next"
          style={{ width: 108, height: 72, position: "relative" }}
        >
          <Image
            src={next}
            layout="fill"
            unoptimized="true"
            alt="A baseball labelled Next"
          />
        </a>
      </div>
      <div className={styles.rowcontainer}>
        <span>
          <Link href="/">Home</Link> <Link href="/resources">Resources</Link>{" "}
          <Link href="/members">Members</Link>
        </span>
      </div>
    </div>
  );
}
export default HeaderComponent;
