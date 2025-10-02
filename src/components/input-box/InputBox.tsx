const InputBox: React.FC<InputBoxProps> = ({
  info,
  setInfo,
  setSubmittedInfo,
  setShowThankYou,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmittedInfo(info);
    setInfo({
      name: "",
      cardNumber: "",
      month: "",
      year: "",
      cvc: "",
    });
    setShowThankYou(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "cardNumber") {
      const digitsOnly = e.target.value.replace(/\D/g, ""); // remove non-digits
      const formatted = digitsOnly.match(/.{1,4}/g)?.join(" ") ?? "";
      setInfo((info) => ({ ...info, cardNumber: formatted }));
      return;
    } else {
      setInfo({ ...info, [e.target.name]: e.target.value });
    }
  };

  console.log(info);
  return (
    <>
      <div className="w-full h-[464px] pt-[91px] pl-[17px] pr-[17px] desktop:w-[380px] desktop:h-[352px] desktop:p-0">
        <form onSubmit={handleSubmit} className="pl-[7px] pr-[7px] desktop:p-0">
          <h1 className="text-medium text-deep-violet uppercase tracking-[2px] mb-[9px]">
            Cardholder Name
          </h1>
          <input
            name="name"
            onChange={handleChange}
            value={info.name}
            type="text"
            placeholder="e.g. Jane Appleseed"
            className="w-full h-[45px] border border-Light-Grey text-deep-violet rounded-[8px] mb-[20px] py-[11px] px-[11px] text-large desktop:mb-[26px]"
          />

          <h1 className="text-medium text-deep-violet uppercase tracking-[2px] mb-[9px]">
            Card Number
          </h1>
          <input
            name="cardNumber"
            onChange={handleChange}
            value={info.cardNumber}
            type="text"
            maxLength={19}
            placeholder="e.g. 1234 5678 9123 0000"
            className="w-full h-[45px] border border-Light-Grey text-deep-violet rounded-[8px] py-[11px] px-[11px] mb-[20px] text-large desktop:mb-[26px]"
          />

          <div className="w-full h-[72px] mb-[28px] flex justify-between desktop:mb-[40px]">
            <div className="w-[152px] desktop:w-[170px] ">
              <h1 className="text-medium text-deep-violet uppercase tracking-[2px] mb-[9px]">
                Exp. Date (MM/YY)
              </h1>
              <div className="flex flex-nowrap">
                <input
                  name="month"
                  onChange={handleChange}
                  value={info.month}
                  type="text"
                  maxLength={2}
                  placeholder="MM"
                  className="w-[72px] h-[45px] border border-Light-Grey text-deep-violet rounded-[8px] py-[11px] px-[11px] text-center mr-[8px] text-large desktop:w-[80px]"
                />

                <input
                  name="year"
                  onChange={handleChange}
                  value={info.year}
                  type="text"
                  maxLength={2}
                  placeholder="YY"
                  className="w-[72px] h-[45px] border border-Light-Grey text-deep-violet rounded-[8px] py-[11px] px-[11px] text-center text-large desktop:w-[80px]"
                />
              </div>
            </div>

            <div className="w-[164px] desktop:w-[190px]">
              <h1 className="text-medium text-deep-violet uppercase tracking-[2px] mb-[9px]">
                CVC
              </h1>

              <input
                name="cvc"
                onChange={handleChange}
                value={info.cvc}
                type="text"
                maxLength={3}
                placeholder="e.g. 123"
                className="w-full h-[45px] border border-Light-Grey text-deep-violet rounded-[8px] py-[11px] px-[11px] text-large "
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full h-[53px] rounded-[8px] bg-deep-violet text-white text-large"
          >
            Confirm
          </button>
        </form>
      </div>
    </>
  );
};

export default InputBox;
