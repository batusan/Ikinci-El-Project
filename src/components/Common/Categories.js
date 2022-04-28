import cls from "classnames";
import commonStyles from "../../styles/Common.module.css";

function Categories(props) {
  return (
    <div className={cls("container", commonStyles.Category)}>
      <div className={commonStyles.CategoryItem}>Hepsi</div>
      {props.categories.map((category) => (
        <div className={commonStyles.CategoryItem} key={category.id}>{category.name}</div>
      ))}
    </div>
  );
}

export default Categories;
