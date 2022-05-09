import styles from "@/styles/input.module.css";

function Label(props) {
  return (
    <label htmlFor={props.htmlFor} className={styles.label}>
      {props.value}
    </label>
  );
}

export default Label;
