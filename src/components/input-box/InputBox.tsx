const InputBox: React.FC = () => {
  return (
    <>
      <div className="w-full h-[464px] pt-[91px] pl-[17px] pr-[17px] desktop:w-[380px] desktop:h-[352px] desktop:p-0">
        <form className="pl-[7px] pr-[7px] desktop:p-0">
          <h1 className="text-medium text-deep-violet uppercase tracking-[2px] mb-[9px]">
            Cardholder Name
          </h1>
          <input
            type="text"
            placeholder="e.g. Jane Appleseed"
            className="w-full h-[45px] border border-Light-Grey text-deep-violet rounded-[8px] mb-[20px] py-[11px] px-[11px] text-large desktop:mb-[26px]"
          />

          <h1 className="text-medium text-deep-violet uppercase tracking-[2px] mb-[9px]">
            Card Number
          </h1>
          <input
            type="number"
            placeholder="e.g. 1234 5678 9123 0000"
            className="w-full h-[45px] border border-Light-Grey text-deep-violet rounded-[8px] py-[11px] px-[11px] mb-[20px] text-large desktop:mb-[26px]"
          />

          <div className="w-full h-[72px] mb-[28px] flex justify-between desktop:mb-[40px]">
            <div className="w-[152px] desktop:w-[170px]">
              <h1 className="text-medium text-deep-violet uppercase tracking-[2px] mb-[9px]">
                Exp. Date (MM/YY)
              </h1>

              <input
                type="number"
                placeholder="MM"
                className="w-[72px] h-[45px] border border-Light-Grey text-deep-violet rounded-[8px] py-[11px] px-[11px] text-center mr-[8px] text-large desktop:w-[80px]"
              />

              <input
                type="number"
                placeholder="YY"
                className="w-[72px] h-[45px] border border-Light-Grey text-deep-violet rounded-[8px] py-[11px] px-[11px] text-center text-large desktop:w-[80px]"
              />
            </div>

            <div className="w-[164px] desktop:w-[190px]">
              <h1 className="text-medium text-deep-violet uppercase tracking-[2px] mb-[9px]">
                CVC
              </h1>

              <input
                type="number"
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
