import styles from "../../styles/Account.module.css";
import ProfilePic from "../../assets/Icons/ProfilePic";
import { useUserContext } from "../../contexts/UserContext";

function AccountHeader(props) {
  const { userDetail } = useUserContext();

  return (
    <div className={styles.Header}>
      <div className={styles.HeaderProfileImage}>
        <ProfilePic />
      </div>
      {userDetail && (
        <div className={styles.HeaderEmail}>{userDetail.email}</div>
      )}
    </div>
  );
}

export default AccountHeader;
