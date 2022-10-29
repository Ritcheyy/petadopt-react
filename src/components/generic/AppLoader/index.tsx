import type { NextComponentType } from "next";
import { Player } from "@lottiefiles/react-lottie-player";
import styles from "../../../styles/Home.module.css";

const AppLoader: NextComponentType = () => {
  return (
    <main className={styles.main}>
      <div>
        <Player
          autoplay
          loop
          src={require("../../../assets/lottie/pet.json")}
          style={{ height: "200px", width: "200px" }}
        ></Player>
        <h1 className={`${styles.title} font-medium mt-5`}>Petadopt</h1>
      </div>
    </main>
  );
};

export default AppLoader;
