import cls from "classnames";
import AccountBody from "./AccountBody";
import AccountHeader from "./AccountHeader";

function AccountComponent(props) {
  return (
    <div className={cls("container")}>
      <AccountHeader email={props.auth.email} />
      <AccountBody />
    </div>
  );
}

export default AccountComponent;
