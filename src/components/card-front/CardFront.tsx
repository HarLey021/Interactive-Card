const CardFront: React.FC = () => {
  return (
    <>
      <div className="w-[286px] h-[157px] absolute top-[120px] bg-card-front bg-no-repeat bg-cover pt-[18px] pl-[19px] pr-[21px] rounded-[6px]">
        <img src="/card-logo.svg" className=" w-[54px] h-[30px] mb-[37px]" />
        <p className="text-large top-[84px] text-white tracking-[2.2px] mb-[17px] ">
          0000 0000 0000 0000
        </p>
        <div className="flex place-content-between text-small text-white tracking-[1.3px] uppercase">
          <p>Jane Appleseed</p>
          <p>00/00</p>
        </div>
      </div>
    </>
  );
};

export default CardFront;
