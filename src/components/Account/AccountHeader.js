import styles from "@/styles/Account.module.css";
import ProfilePic from "@/assets/Icons/ProfilePic";
import { useUserContext } from "@/contexts/UserContext";
import cls from "classnames";
import Button from "../Inputs/Button";
import Logout from "@/assets/Icons/Logout";

function AccountHeader(props) {
  const { userDetail, logOut } = useUserContext();

  return (
    <div className={styles.Header}>
      <div className={styles.HeaderLeft}>
        <div className={styles.HeaderProfileImage}>
          <ProfilePic />
        </div>
        {userDetail && (
          <div className={styles.HeaderEmail}>{userDetail.email}</div>
        )}
      </div>
      <Button
        className={cls(styles.danger, styles.miniButton)}
        icon={<Logout color="white" />}
        height="40px"
        value="Çıkış Yap"
        hideOnSmall={true}
        onClick={logOut}
      />
    </div>
  );
}

export default AccountHeader;
