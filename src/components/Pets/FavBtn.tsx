import { useRef, useState } from "react";
import { NextComponentType } from "next";
import { DotLottiePlayer, PlayerEvents } from "@dotlottie/react-player";
import LoveIcon from "../../assets/svgs/icons/Love";

const ActiveIcon = ({ isFavourite }: { isFavourite: boolean }) => {
  const lottieRef = useRef<any>();

  if (isFavourite) {
    return (
      <DotLottiePlayer
        ref={lottieRef}
        src={require("../../assets/lottie/like.lottie")}
        autoplay
        speed={3}
        className="cursor-pointer w-16 absolute -top-[17px] -right-[18px]"
        onEvent={(event: PlayerEvents) => {
          if (event === PlayerEvents.Ready) {
            // skip weird beginning
            lottieRef.current.seek(12);
          }
        }}
      />
    );
  }
  return (
    <LoveIcon className="cursor-pointer w-4 absolute -top-[1px] right-[6px]" />
  );
};

const FavBtn: NextComponentType = () => {
  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  const handleIconClick = () => {
    setIsFavourite(!isFavourite);
  };

  return (
    <div className="bg-[#00000080] absolute top-3 right-3 w-7 h-7 rounded-lg hover:bg-[#00000060]">
      <div onClick={handleIconClick}>
        <ActiveIcon isFavourite={isFavourite} />
      </div>
    </div>
  );
};

export default FavBtn;
