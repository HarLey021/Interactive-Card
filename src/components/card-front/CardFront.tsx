const CardFront: React.FC = () => {
  return (
    <>
      <div className="w-[286px] h-[157px] absolute top-[120px] bg-card-front bg-no-repeat bg-cover pt-[18px] pl-[19px] pr-[21px] rounded-[6px] desktop:w-[447px] desktop:h-[245px] desktop:absolute desktop:top-0 desktop:pt-[28px] desktop:pl-[32px] desktop:pr-[28px]">
        <img
          src="/card-logo.svg"
          className=" w-[54px] h-[30px] mb-[37px] desktop:w-[84px] desktop:h-[47px] desktop:mb-[64px]"
        />
        <p className="text-large text-white tracking-[2.2px] mb-[17px] desktop:text-extra-large desktop:tracking-[3.4px] desktop:mb-[25px]">
          0000 0000 0000 0000
        </p>
        <div className="flex place-content-between text-small text-white tracking-[1.3px] uppercase desktop:text-fourteen desktop:tracking-[2px]">
          <p>Jane Appleseed</p>
          <p>00/00</p>
        </div>
      </div>
    </>
  );
};

export default CardFront;
