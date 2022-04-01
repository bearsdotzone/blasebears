import styles from "../../../styles/Home.module.css";

function FooterComponent() {
  return (
    <div className={styles.footer}>
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
      Part of the{" "}
      <a href="https://ring.yell.rocks/">
        Internet League Blaseball Fans Web Ring
      </a>
      <br />
      <a href="https://ring.yell.rocks/prev">Previous Website</a>{" "}
      <a href="https://ring.yell.rocks/random">Random Website</a>{" "}
      <a href="https://ring.yell.rocks/next">Next Website</a>
      <br />
      Bears loves Alexandra 💖
    </div>
  );
}
export default FooterComponent;
