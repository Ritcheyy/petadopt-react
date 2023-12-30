import { FC } from "react";
import { appTypes } from "../../types";
import styles from "./styles.module.css";
import Image from "next/image";

type Props = {
  item: appTypes.Category;
};

const Category: FC<Props> = ({ item }) => {
  return (
    <div className={`${styles.category} mr-10`}>
      <div className="w-12 -mb-2">
        <Image src={item.image} alt="pet category" />
      </div>
      <p className="ml-1.5">{item.name}</p>
    </div>
  );
};

export default Category;
