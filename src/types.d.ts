interface InfoInterface {
  name: string;
  cardNumber: string;
  month: string;
  year: string;
  cvc: string;
}

interface InputBoxProps {
  info: InfoInterface;
  setInfo: React.Dispatch<React.SetStateAction<InfoInterface>>;
  setSubmittedInfo: React.Dispatch<
    React.SetStateAction<InfoInterface | undefined>
  >;
  setShowThankYou: React.Dispatch<React.SetStateAction<boolean>>;
}

interface CardProps {
  submittedInfo?: InfoInterface;
}

type ThankYouInterface = {
  setShowThankYou: React.Dispatch<React.SetStateAction<boolean>>;
  setSubmittedInfo: React.Dispatch<
    React.SetStateAction<InfoInterface | undefined>
  >;
};
