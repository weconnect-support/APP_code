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
}

const MultiStepFormContext = createContext<MultiStepFormContextProps | null>(null);

export default MultiStepFormContext;
