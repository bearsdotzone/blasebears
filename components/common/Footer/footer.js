import styles from "./FooterStyles.module.css";
import construction from "../../../images/construction.gif";
import Image from "next/image";
import Link from "next/link";

function FooterComponent() {
  return (
    <div className={styles.footer}>
      <div className={styles.footercontainer}>
        <Link href="#" className={{"display" : "inline", "verticalAlign" : "middle"}}>
          Back to Top
        </Link>
        <p>
          github:{" "}
          <a href="https://github.com/bearsdotzone/blasebears">
            this website is open source software
          </a>{" "}
          distributed under the{" "}
          <a href="https://anticapitalist.software/">
            anticapitalist software license
          </a>{" "}
          twitter:{" "}
          <a href="https://github.com/bearsdotzone/blasebears">@bearsdotzone</a>{" "}
          <br />
          Bears loves Alexandra 💖
        </p>
        <Image src={construction} unoptimized="true" />
      </div>
    </div>
  );
}
export default FooterComponent;
