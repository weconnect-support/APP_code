import { createContext } from "react";

interface MultiStepFormContextProps {
  setEmail: (email: string) => void;
  next: () => void;
  prev: () => void;
  setPW: (pw: string) => void;
  setName: (name: string) => void;
  setPhone: (phone: string) => void;
  email: string;
  pw: string;
  name: string;
  phone: string;
  nickname: string;
  address: string;
  address_detail: string;
  platform: number;
  noti_flag: number;
}

const MultiStepFormContext = createContext<MultiStepFormContextProps | null>(
  null
);

export default MultiStepFormContext;
