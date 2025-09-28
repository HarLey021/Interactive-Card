const MainPage: React.FC = () => {
  return (
    <>
      <div className="w-full h-screen ">
        <div className="w-full h-[240px] bg-dark-background pt-[32px] pl-[17px] pr-[17px] ">
          <div className="w-[342px] justify-self-center">
            <img
              src="/bg-card-back.png"
              className="w-[286px] h-[157px] justify-self-end "
            />
            <img
              src="/bg-card-front.png"
              className="w-[286px] h-[157px] justify-self-start absolute top-[120px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
