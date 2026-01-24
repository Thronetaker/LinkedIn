import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"]});

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="mainContainer">
          <div className="mainConatiner_left">
            <p>Connect with Friends without exaggeration</p>
            <p>A True Social media platform, with stories no blufs.!</p>
          </div>

          <div className="mainContainer_right">
            <img src="/image/images.jpg" alt="" />  
          </div>
        </div>
      </div>
    </>
  );
}
