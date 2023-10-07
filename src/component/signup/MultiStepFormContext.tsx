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
  platform: number;
  noti_flag: number;
  address: string;
  setAddress: (address: string) => void;
  address_detail: string;
  setAddress_Detail: (address_detail: string) => void;
}

const MultiStepFormContext = createContext<MultiStepFormContextProps | null>(
  null
);

export default MultiStepFormContext;
