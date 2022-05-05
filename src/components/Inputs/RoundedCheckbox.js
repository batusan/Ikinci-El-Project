import { useState, useEffect } from "react";
import styles from "../../styles/input.module.css";
function RoundedCheckbox(props) {
  const change = props.onChange;
  const handleChange = () => {
    change(props.offer);
  };
  return (
    <div className={styles.checkboxWrapper} onClick={handleChange}>
      <div className={styles.round}>
        <input
          type="radio"
          name={props.name}
          className={styles.checkbox}
          checked={props.checked}
          onChange={handleChange}
        />
        <label htmlFor="checkbox"></label>
      </div>
      <span className={styles.checkboxValue}>{props.value}</span>
    </div>
  );
}

export default RoundedCheckbox;
