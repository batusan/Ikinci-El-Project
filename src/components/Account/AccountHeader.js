import styles from "../../styles/Account.module.css";
import ProfilePic from "../../assets/Icons/ProfilePic";

function AccountHeader(props) {
  return (
    <div className={styles.Header}>
      <div className={styles.HeaderProfileImage}>
        <ProfilePic />
      </div>
      <div className={styles.HeaderEmail}>{props.email}</div>
    </div>
  );
}

export default AccountHeader;
