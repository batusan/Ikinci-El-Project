import styles from "../../styles/input.module.css";

function OfferInput(props) {
  return (
    <div className={styles.OfferInputWrapper}>
      <label htmlFor="number">TL</label>
      <input
        style={{ width: props.width || 0, height: props.height || 0 }}
        type="number"
        id={props.id || ""}
        name={props.name || ""}
        className={styles.textInput}
        onChange={props.onChange || ""}
        value={props.value || ""}
        placeholder={props.placeholder || ""}
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
      />
    </div>
  );
}

export default OfferInput;
