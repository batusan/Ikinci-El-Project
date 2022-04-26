import cls from "classnames";
import styles from "../../styles/input.module.css";

function Button(props) {
  return (
    <button
      style={{ width: props.width || 0, height: props.height || 0 }}
      className={
        props.className ? cls(styles.button, props.className) : styles.button
      }
      type={props.type || "submit"}
      id={props.id || undefined}
    >
      {props.value}
    </button>
  );
}

export default Button;
