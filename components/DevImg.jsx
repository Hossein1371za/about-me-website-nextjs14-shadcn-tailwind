
import Image from "next/image";

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image className="rounded-full" src={imgSrc} width={420} height={420} priority alt="." />
    </div>
  );
};

export default DevImg;
