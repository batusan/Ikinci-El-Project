import cls from "classnames";
import { useRouter } from "next/router";
import useWindowSize from "../../hooks/useWindowSize";
import styles from "../../styles/input.module.css";

function Button(props) {
  const router = useRouter();
  const size = useWindowSize();

  const iconHideOnMobile = () => {
    if (size.width < 636 && props.hideOnSmall) {
      return undefined;
    } else {
      return props.value;
    }
  };

  return (
    <button
      style={{
        width: props.width || undefined,
        height: props.height || undefined,
      }}
      className={
        props.className ? cls(styles.button, props.className) : styles.button
      }
      ref={props.ref || undefined}
      type={props.type || undefined}
      id={props.id || undefined}
      onClick={
        props.redirect
          ? (e) => {
              router.push(props.redirect);
            }
          : props.onClick
      }
    >
      {props.icon ? props.icon : null} {iconHideOnMobile()}
    </button>
  );
}

export default Button;
