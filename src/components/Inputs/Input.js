import cls from "classnames";

import styles from "../../styles/input.module.css";

function Input(props) {
  return (
    <input
      style={{ width: props.width || 0, height: props.height || 0 }}
      type={props.type}
      id={props.id}
      name={props.name || undefined}
      className={
        props.onError ? cls(styles.textInput, styles.errorInput) : styles.textInput
      }
      onChange={props.onChange || undefined}
      value={props.value || undefined}
      placeholder={props.placeholder || undefined}
    />
  );
}

export default Input;
