import commonStyles from "@/styles/Common.module.css";

function DetailsDescription(props) {
  return (
    <div className={commonStyles.DescriptionWrapper}>
      <div className={commonStyles.DescriptionTitle}>Açıklama</div>
      <div className={commonStyles.Description}>{props.description}</div>
    </div>
  );
}

export default DetailsDescription;
