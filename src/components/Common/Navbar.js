import cls from "classnames";
import Logo from "../../assets/Icons/Logo";

import SecondaryButton from "../Inputs/SecondaryButton";
import commonStyles from "../../styles/Common.module.css";
import PlusIcon from "../../assets/Icons/PlusIcon";
import UserIcon from "../../assets/Icons/UserIcon";

function Navbar(props) {
  return (
    <div className={commonStyles.Navbar}>
      <div className={cls("container", commonStyles.Navbar_inner)}>
        <Logo width="128.94px" height="42px" class={commonStyles.Navbar_logo} />
        <div className={commonStyles.navbarIcons}>
          {props.isAuth ? (
            <>
              <SecondaryButton
                icon={<PlusIcon className={commonStyles.navbarIcon} />}
                width="124px"
                height="40px"
                value="Ürün Ekle"
              />
              <SecondaryButton
                icon={<UserIcon className={commonStyles.navbarIcon} />}
                width="124px"
                height="40px"
                value="Hesabım"
              />
            </>
          ) : (
            <>
              <SecondaryButton
                icon={<UserIcon className={commonStyles.navbarIcon} />}
                width="124px"
                height="40px"
                value="Üye Girişi"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
