import PetItem from "./PetItem";
import { NextComponentType } from "next";
import styles from "../../styles/pet.module.css";

const Pets: NextComponentType = () => {
  const pets = Array.from(Array(15));
  return (
    <div className={`${styles.pets} flex flex-wrap justify-center xl:justify-between`}>
      {pets.map((_, index) => (
        <PetItem key={index} />
      ))}
    </div>
  );
};

export default Pets;
