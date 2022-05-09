import styles from "../../styles/input.module.css";
import cls from "classnames";

function OfferInput(props) {
  return (
    <div className={styles.OfferInputWrapper}>
      <label htmlFor="price">TL</label>
      <input
        style={{
          width: props.width || undefined,
          height: props.height || undefined,
        }}
        type="number"
        id={props.id || ""}
        name={props.name || ""}
        className={
          props.className
            ? cls(styles.textInput, props.className)
            : styles.textInput
        }
        onChange={props.onChange || ""}
        value={props.value || ""}
        placeholder={props.placeholder || ""}
      />
    </div>
  );
}

export default OfferInput;
