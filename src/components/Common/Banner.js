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
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
    </div>
  );
}

export default Banner;
