import styles from "../../styles/input.module.css";

function OfferInput(props) {
  return (
    <div className={styles.OfferInputWrapper}>
      <label htmlFor="number">TL</label>
      <input
        style={{ width: props.width || 0, height: props.height || 0 }}
        type="text"
        id={props.id || undefined}
        name={props.name || undefined}
        className={styles.textInput}
        onChange={props.onChange || undefined}
        value={props.value || undefined}
        placeholder={props.placeholder || undefined}
      />
    </div>
  );
}

export default OfferInput;
