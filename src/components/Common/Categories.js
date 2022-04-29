import cls from "classnames";
import { useRouter } from "next/router";
import commonStyles from "../../styles/Common.module.css";

function Categories(props) {
  const router = useRouter();

  const handleClick = (categoryId) => {
    categoryId ? router.push(`?category=${categoryId}`) : router.push("/");
  };

  return (
    <div className={cls("container", commonStyles.Category)}>
      <div className={commonStyles.CategoryItem} onClick={(e) => handleClick()}>
        Hepsi
      </div>
      {props.categories.map((category) => (
        <div
          className={commonStyles.CategoryItem}
          key={category.id}
          onClick={(e) => handleClick(category.id)}
        >
          {category.name}
        </div>
      ))}
    </div>
  );
}

export default Categories;
