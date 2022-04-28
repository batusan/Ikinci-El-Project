import cls from "classnames";
import styles from "../../styles/input.module.css";

function SecondaryButton(props) {
  return (
    <button
      style={{ width: props.width || 0, height: props.height || 0 }}
      className={
        props.className ? cls(styles.secondaryButton, props.className) : styles.secondaryButton
      }
      type={props.type || undefined}
      id={props.id || undefined}
    >
      {props.value}
    </button>
  );
}

export default SecondaryButton;
