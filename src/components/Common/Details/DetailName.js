import commonStyles from "@/styles/Common.module.css";

function DetailName({name}) {
  return <div className={commonStyles.detailProductName}>{name}</div>;
}

export default DetailName;
