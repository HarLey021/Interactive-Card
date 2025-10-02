import CardBack from "../card-back/CardBack";
import CardFront from "../card-front/CardFront";
import InputBox from "../input-box/InputBox";
import { useState } from "react";
import ThankYou from "../thank-you/ThankYou";

const MainPage: React.FC = () => {
  const [showThankYou, setShowThankYou] = useState<boolean>(false);
  const [info, setInfo] = useState<InfoInterface>({
    name: "",
    cardNumber: "",
    month: "",
    year: "",
    cvc: "",
  });

  const [submittedInfo, setSubmittedInfo] = useState<InfoInterface>();
  return (
    <>
      <div className="w-full h-screen desktop:flex desktop:items-center">
        <div
          className="w-full h-[240px] bg-dark-background bg-cover pt-[32px] pl-[17px] pr-[17px] 
                    desktop:bg-desktop-dark-background desktop:w-[483px] desktop:h-screen desktop:p-0 desktop:pl-[164px] desktop:flex desktop:items-center desktop:mr-[350px]"
        >
          <div className="w-[342px] justify-self-center desktop:w-[541px] desktop:h-[527px] desktop:relative ">
            <CardBack submittedInfo={submittedInfo} />
            <CardFront submittedInfo={submittedInfo} />
          </div>
        </div>
        {showThankYou ? (
          <ThankYou
            setShowThankYou={setShowThankYou}
            setSubmittedInfo={setSubmittedInfo}
          />
        ) : (
          <InputBox
            info={info}
            setInfo={setInfo}
            setSubmittedInfo={setSubmittedInfo}
            setShowThankYou={setShowThankYou}
          />
        )}
      </div>
    </>
  );
};

export default MainPage;
