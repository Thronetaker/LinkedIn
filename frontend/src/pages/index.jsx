import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import UserLayout from "@/layout/UserLayout";

const inter = Inter({ subsets: ["latin"]});

export default function Home() {
  const router = useRouter();
  return (
    <UserLayout>
      <div className={styles.container}>
        <div className={styles.mainContainer}>
          <div className={styles.mainContainer_left}>
            <p>Connect with Friends without exaggeration</p>
            <p>A True Social media platform, with stories no blufs.!</p>

            <div className={styles.buttonJoin} onClick={ () => {
              router.push('/login')
            }}>
              <p>Join Now</p>
            </div>
          </div>

          <div className={styles.mainContainer_right}>
            <img src="/image/images.jpg" alt="" />  
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
