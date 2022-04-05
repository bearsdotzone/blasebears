import Head from "next/head";
import styles from "../styles/MembersPage.module.css";
import HeaderComponent from "../components/common/Header/header";
import FooterComponent from "../components/common/Footer/footer";
import { getPostData } from "../lib/pages";
import members from "../data/members.json";
import Image from "next/image";
import baseball from "../images/baseball.gif";

export default function MembersPage({ meta, content }) {
  return (
    <div>
      <Head>
        <title>Internet League Blaseball Fans Web Ring</title>
        <meta
          name="description"
          content="Link your favorite quaint web Blaseball fan sites together!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderComponent></HeaderComponent>

      <main className={styles.main}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <div className={styles.list}>
          {members.map((member) => (
            <div className={styles.box} key={member.url}>
              <div className={styles.icon}>
                <Image
                  src={member.image || baseball}
                  layout="fill"
                  objectFit="contain"
                  alt={member.alt || ""}
                />
              </div>
              <div className={styles.description}>
                <p>
                  <b>
                    <a href={member.url}>{member.title}</a>
                  </b>
                </p>
                {member.author && <p>by {member.author}</p>}
              </div>
            </div>
          ))}
        </div>
      </main>

      <FooterComponent></FooterComponent>
    </div>
  );
}

export async function getStaticProps(context) {
  return getPostData("members.md");
}
