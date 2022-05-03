import { useState } from "react";
import styles from "../../styles/input.module.css";
function RoundedCheckbox(props) {
  const [checked, setChecked] = useState(false);
  const checkHandle = (e) => {
    setChecked(!checked);
  };
  return (
    <div className={styles.checkboxWrapper} onClick={checkHandle}>
      <div className={styles.round}>
        <input type="checkbox" className={styles.checkbox} checked={checked} />
        <label htmlFor="checkbox"></label>
      </div>
      <span className={styles.checkboxValue}>{props.value}</span>
    </div>
  );
}

export default RoundedCheckbox;
