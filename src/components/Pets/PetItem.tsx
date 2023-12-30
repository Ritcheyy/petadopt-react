import { NextComponentType } from "next";
import styles from "../../styles/pet.module.css";
import DogImage from "../../assets/images/dog.png";
import FavBtn from "./FavBtn";

const PetItem: NextComponentType = () => {
  return (
    <div
      className={styles.petItem}
      style={{ backgroundImage: `url(${DogImage.src})` }}
    >
      <FavBtn />
      <div className={styles.itemInner}>
        <div className="flex items-center mb-2.5">
          <h4>Jenny</h4>
          <p>(Golden Retriever)</p>
        </div>
        <span className={styles.badge}>Female, 6 yrs.</span>
      </div>
    </div>
  );
};

export default PetItem;
