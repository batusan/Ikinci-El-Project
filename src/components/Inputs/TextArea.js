import styles from "../../styles/input.module.css";

function TextArea(props) {
  return (
    <textarea
      className={styles.textArea}
      name={props.name}
      cols={props.col}
      rows={props.row}
      placeholder={props.placeholder}
    ></textarea>
  );
}

export default TextArea;
