import Image from "next/image";
import successIllustration from "/public/success.svg";

const loading = () => {
  return (
    <div>
      <Image
        priority
        src={successIllustration}
        alt="Hold tight, the page is loading"
      />
    </div>
  );
};

export default loading;
