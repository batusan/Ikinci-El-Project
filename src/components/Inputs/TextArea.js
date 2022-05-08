import styles from "@/styles/input.module.css";

function TextArea(props) {
  return (
    <textarea
      className={styles.textArea}
      name={props.name}
      cols={props.col}
      rows={props.row}
      placeholder={props.placeholder}
      onChange={props.onChange || undefined}
      value={props.value || undefined}
      maxLength={props.maxLength || undefined}
    ></textarea>
  );
}

export default TextArea;
