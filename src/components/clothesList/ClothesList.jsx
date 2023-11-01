import Image from "next/image";

import catFall from "/public/images/clothes/catFall.png";
import pupRain from "/public/images/clothes/pupRain.png";

export default function ClothesList() {
  return (
    <div className="w-full flex flex-col justify-center items-center pt-8">
      <Image src={catFall} height={320} alt="옷차림 이미지" />
    </div>
  );
}
