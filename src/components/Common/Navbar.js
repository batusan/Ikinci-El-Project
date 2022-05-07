import cls from "classnames";
import Logo from "../../assets/Icons/Logo";
import { useRouter } from "next/router";

import Button from "../Inputs/Button";
import commonStyles from "../../styles/Common.module.css";
import PlusIcon from "../../assets/Icons/PlusIcon";
import UserIcon from "../../assets/Icons/UserIcon";

function Navbar(props) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/`);
  };

  return (
    <div className={commonStyles.Navbar}>
      <div className={cls("container", commonStyles.Navbar_inner)}>
        <Logo
          width="128.94px"
          height="42px"
          class={commonStyles.Navbar_logo}
          onClick={handleClick}
        />
        <div className={commonStyles.navbarIconWrapper}>
          {props.isAuth ? (
            <>
              <Button
                className={cls(
                  commonStyles.secondaryButton,
                  commonStyles.miniButton
                )}
                icon={<PlusIcon className={commonStyles.navbarIcon} />}
                height="40px"
                value="Ürün Ekle"
                hideOnSmall={true}
                redirect="/addproduct"
              />
              <Button
                className={commonStyles.secondaryButton}
                icon={<UserIcon className={commonStyles.navbarIcon} />}
                width="124px"
                height="40px"
                value="Hesabım"
                redirect="/account"
              />
            </>
          ) : (
            <>
              <Button
                className={commonStyles.secondaryButton}
                icon={<UserIcon className={commonStyles.navbarIcon} />}
                width="124px"
                height="40px"
                value="Üye Girişi"
                redirect="/auth/login"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
