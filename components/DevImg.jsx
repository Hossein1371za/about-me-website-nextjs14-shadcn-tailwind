
import Image from "next/image";

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image className="rounded-full border-solid border-[8px] border-sky-500" src={imgSrc} width={420} height={420} priority alt="." />
    </div>
  );
};

export default DevImg;
