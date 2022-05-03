import cls from "classnames";
import Image from "next/image";
import bannerImage from "../../assets/images/banner.png";

import commonStyles from "../../styles/Common.module.css";

function Banner() {
  return (
    <div className={cls(commonStyles.Banner, "container")}>
      <Image
        src={bannerImage}
        alt="Banner Image"
        priority
        layout="responsive"
      />
    </div>
  );
}

export default Banner;
