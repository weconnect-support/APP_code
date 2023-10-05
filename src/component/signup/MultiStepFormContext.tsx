import { createContext } from 'react';

interface MultiStepFormContextProps {
  email: string;
  setEmail: (email: string) => void;
  next: () => void;
  prev: () => void;
  pw: string;
  setPW: (pw: string) => void;
  name: string;
  phone: string;
  setName: (name: string) => void;
  setPhone: (phone: string) => void;
  address: string;
  setAddress: (address: string) => void;
  address_detail: string,
  setAddress_Detail: (address_detail: string) => void;
}

const MultiStepFormContext = createContext<MultiStepFormContextProps | null>(null);

export default MultiStepFormContext;
