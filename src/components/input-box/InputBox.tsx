import { useState } from "react";

const InputBox: React.FC<InputBoxProps> = ({
  baseInfo,
  info,
  setInfo,
  setSubmittedInfo,
  setShowThankYou,
}) => {
  const [errors, setErrors] = useState<InfoInterface>(baseInfo);

  const handleErrors = () => {
    const newErrors: InfoInterface = { ...baseInfo };

    if (!info.name.trim()) {
      newErrors.name = "Can't be blank";
    }

    if (!info.cardNumber) {
      newErrors.cardNumber = "Can't be blank";
    } else if (info.cardNumber.length < 19) {
      newErrors.cardNumber = "Incorrect card number, fill all digits correctly";
    }

    if (!info.month) {
      newErrors.month = "Can't be blank";
    } else if (info.month.length < 2) {
      newErrors.month = "Must be 2 digits";
    }

    if (!info.year) {
      newErrors.year = "Can't be blank";
    } else if (info.year.length < 2) {
      newErrors.year = "Must be 2 digits";
    }

    if (!info.cvc) {
      newErrors.cvc = "Can't be blank";
    } else if (info.cvc.length < 3) {
      newErrors.cvc = "Must be 3 digits";
    }

    setErrors(newErrors);
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validation = handleErrors();
    const hasErrors = Object.values(validation).some((error) => error !== "");
    if (hasErrors) return;

    setSubmittedInfo(info);
    setInfo(baseInfo);
    setShowThankYou(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digitsOnly = e.target.value.replace(/\D/g, "");
    const lettersOnly = e.target.value.replace(/[0-9]/g, "");

    if (e.target.name === "name") {
      setInfo({ ...info, name: lettersOnly });
      return;
    }

    if (["month", "year", "cvc"].includes(e.target.name)) {
      setInfo({ ...info, [e.target.name]: digitsOnly });
      return;
    }

    if (e.target.name === "cardNumber") {
      const formatted = digitsOnly.match(/.{1,4}/g)?.join(" ") ?? "";
      setInfo({ ...info, cardNumber: formatted });
      return;
    }
  };

  console.log(info);
  return (
    <>
      <div className="w-full h-[464px] pt-[91px] pl-[17px] pr-[17px] desktop:w-[380px] desktop:h-[352px] desktop:p-0">
        <form onSubmit={handleSubmit} className="pl-[7px] pr-[7px] desktop:p-0">
          <div className="mb-[20px]">
            <h1 className="text-medium text-deep-violet uppercase tracking-[2px] mb-[9px]">
              Cardholder Name
            </h1>
            <input
              name="name"
              onChange={handleChange}
              value={info.name}
              type="text"
              placeholder="e.g. Jane Appleseed"
              className={`w-full h-[45px] border  text-deep-violet rounded-[8px] py-[11px] px-[11px] text-large desktop:mb-[26px] ${
                errors.name
                  ? "border-error-red mb-[8px]"
                  : "border-Light-Grey mb-0"
              }`}
            />
            {errors.name ? (
              <p className="text-medium text-error-red">{errors.name}</p>
            ) : (
              ""
            )}
          </div>

          <div className="mb-[20px]">
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
              className={`w-full h-[45px] border border-Light-Grey text-deep-violet rounded-[8px] py-[11px] px-[11px] text-large desktop:mb-[26px] ${
                errors.cardNumber
                  ? "border-error-red mb-[8px]"
                  : "border-Light-Grey mb-0"
              }`}
            />
            {errors.cardNumber ? (
              <p className="text-medium text-error-red">{errors.cardNumber}</p>
            ) : (
              ""
            )}
          </div>

          <div className="w-full h-[92px] mb-[28px] flex justify-between desktop:mb-[40px]">
            <div className="w-[152px] mr-[8px] desktop:w-[170px] ">
              <h1 className="text-medium text-deep-violet uppercase tracking-[2px] mb-[9px]">
                Exp. Date (MM/YY)
              </h1>
              <div className="flex flex-nowrap ">
                <div>
                  <input
                    name="month"
                    onChange={handleChange}
                    value={info.month}
                    type="text"
                    maxLength={2}
                    placeholder="MM"
                    className={`w-[72px] h-[45px] border border-Light-Grey text-deep-violet rounded-[8px] py-[11px] px-[11px] text-center mr-[8px] text-large desktop:w-[80px] ${
                      errors.month
                        ? "border-error-red mb-[8px]"
                        : "border-Light-Grey mb-0"
                    }`}
                  />
                  {errors.month ? (
                    <p className="text-medium text-error-red">{errors.month}</p>
                  ) : (
                    ""
                  )}
                </div>

                <div>
                  <input
                    name="year"
                    onChange={handleChange}
                    value={info.year}
                    type="text"
                    maxLength={2}
                    placeholder="YY"
                    className={`w-[72px] h-[45px] border border-Light-Grey text-deep-violet rounded-[8px] py-[11px] px-[11px] text-center text-large desktop:w-[80px] ${
                      errors.year
                        ? "border-error-red mb-[8px]"
                        : "border-Light-Grey mb-0"
                    }`}
                  />
                  {errors.year ? (
                    <p className="text-medium text-error-red">{errors.year}</p>
                  ) : (
                    ""
                  )}
                </div>
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
                className={`w-full h-[45px] border border-Light-Grey text-deep-violet rounded-[8px] py-[11px] px-[11px] text-large ${
                  errors.cvc
                    ? "border-error-red mb-[8px]"
                    : "border-Light-Grey mb-0"
                }`}
              />
              {errors.cvc ? (
                <p className="text-medium text-error-red">{errors.cvc}</p>
              ) : (
                ""
              )}
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
