import { useState } from "react";
import CardBack from "../card-back/CardBack";
import CardFront from "../card-front/CardFront";
import InputBox from "../input-box/InputBox";
import ThankYou from "../thank-you/ThankYou";

const MainPage: React.FC = () => {
  const [showThankYou, setShowThankYou] = useState<boolean>(false);

  setShowThankYou(false);
  return (
    <>
      <div className="w-full h-screen ">
        <div className="w-full h-[240px] bg-dark-background bg-cover pt-[32px] pl-[17px] pr-[17px] ">
          <div className="w-[342px] justify-self-center">
            <CardBack />
            <CardFront />
          </div>
        </div>
        {showThankYou ? <ThankYou /> : <InputBox />}
      </div>
    </>
  );
};

export default MainPage;
