import Flicking from "@egjs/react-flicking";
import { categoriesData } from "../../helpers/constants";
import { NextComponentType } from "next";
import Category from "./Category";
import "@egjs/react-flicking/dist/flicking.css";

const Categories: NextComponentType = () => {
  return (
    <div className="mt-7 mb-9">
      <Flicking moveType="freeScroll" bound={true}>
        {categoriesData.map((category, index) => (
          <span key={index}>
            <Category key={index} item={category} />
          </span>
        ))}
      </Flicking>
    </div>
  );
};

export default Categories;
