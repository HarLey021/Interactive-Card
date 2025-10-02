const ThankYou: React.FC<ThankYouInterface> = ({
  setShowThankYou,
  setSubmittedInfo,
}) => {
  const handleContinue = () => {
    setShowThankYou(false);
    setSubmittedInfo({
      name: "Jane Appleseed",
      cardNumber: "0000 0000 0000 0000",
      month: "00",
      year: "00",
      cvc: "000",
    });
  };
  return (
    <>
      <div className="w-full h-[464px] pt-[91px] pl-[24px] pr-[24px] flex flex-col items-center desktop:p-0 desktop:w-[380px] desktop:h-[301px]">
        <img src="/icon-complete.svg" className="w-[80px] h-[80px] mb-[35px]" />
        <h1 className="text-extra-large text-deep-violet tracking-[3.4px] mb-[16px]">
          THANK YOU!
        </h1>
        <p className="text-large text-Dark-Grey mb-[48px]">
          We’ve added your card details
        </p>
        <button
          onClick={handleContinue}
          className="w-full h-[53px] rounded-[8px] bg-deep-violet text-white text-large"
        >
          Continue
        </button>
      </div>
    </>
  );
};

export default ThankYou;
