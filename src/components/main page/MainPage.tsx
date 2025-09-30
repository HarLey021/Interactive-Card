import CardBack from "../card-back/CardBack";
import CardFront from "../card-front/CardFront";
import InputBox from "../input-box/InputBox";
// import ThankYou from "../thank-you/ThankYou";

const MainPage: React.FC = () => {
  // const [showThankYou, setShowThankYou] = useState<boolean>(false);
  return (
    <>
      <div className="w-full h-screen desktop:flex desktop:items-center">
        <div
          className="w-full h-[240px] bg-dark-background bg-cover pt-[32px] pl-[17px] pr-[17px] 
                    desktop:bg-desktop-dark-background desktop:w-[483px] desktop:h-screen desktop:p-0 desktop:pl-[164px] desktop:flex desktop:items-center desktop:mr-[350px]"
        >
          <div className="w-[342px] justify-self-center desktop:w-[541px] desktop:h-[527px] desktop:relative ">
            <CardBack />
            <CardFront />
          </div>
        </div>
        {/* {showThankYou ? <ThankYou /> : <InputBox />} */}
        <InputBox />
      </div>
    </>
  );
};

export default MainPage;
