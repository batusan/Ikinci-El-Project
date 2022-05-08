import { useState, useEffect } from "react";
import Arrow from "@/assets/Icons/Arrow";
import styles from "@/styles/input.module.css";

function CustomSelect(props) {
  const changeValue = props.onChange;
  const [status, SetStatus] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [displayValue, setDisplayValue] = useState();
  const [style, setStyle] = useState(styles.selectDiv);

  useEffect(() => {
    if (changeValue) {
      if (props.name === "category") {
        changeValue(parseInt(selectedValue));
      } else {
        changeValue(selectedValue);
      }
    }
  }, [selectedValue]);

  const handleStatus = () => {
    SetStatus(!status);
    status ? setStyle(styles.selectDiv) : setStyle(styles.selectDivClicked);
  };

  const handleClick = (e, item) => {
    if (props.name === "category") {
      setSelectedValue(item.id);
      setDisplayValue(item.name);
    } else {
      setSelectedValue(e.target.innerHTML);
      setDisplayValue(e.target.innerHTML);
    }
    handleStatus();
  };

  return (
    <div className={styles.selectWrapper}>
      <div className={style} onClick={handleStatus}>
        {displayValue ? displayValue : props.placeholder}
        <Arrow />
      </div>
      {status && (
        <div className={styles.selectDropdownWrapper}>
          <ul>
            {props.list.map((item) => (
              <li onClick={(e) => handleClick(e, item)} key={item.id}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CustomSelect;
