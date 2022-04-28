import cls from "classnames";
import Logo from "../../assets/Icons/Logo";

import SecondaryButton from "../Inputs/SecondaryButton";
import commonStyles from "../../styles/Common.module.css";

function Navbar() {
  return (
    <div className={commonStyles.Navbar}>
      <div className={cls("container", commonStyles.Navbar_inner)}>
        <Logo width="128.94px" height="42px" class={commonStyles.Navbar_logo} />
        <div>
          <SecondaryButton width="124px" height="40px" value="Ürün Ekle" />
          <SecondaryButton width="124px" height="40px" value="Hesabım" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
