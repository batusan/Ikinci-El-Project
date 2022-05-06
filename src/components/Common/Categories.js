import cls from "classnames";
import commonStyles from "../../styles/Common.module.css";

function Categories(props) {
  const handleClick = (categoryId) => {
    props.setFilter(categoryId);
  };

  return (
    <div className={cls("container", commonStyles.Category)}>
      <div className={commonStyles.CategoryItem} onClick={(e) => handleClick()}>
        Hepsi
      </div>
      {props.categories &&
        props.categories.map((category) => (
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
