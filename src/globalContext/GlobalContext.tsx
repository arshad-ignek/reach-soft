import React, { createContext, Dispatch, SetStateAction } from 'react';

export interface ContectContextProps {
    ContactData: {};
    setContactData: Dispatch<SetStateAction<string>>;
}

const ContectContext = createContext<ContectContextProps | undefined>(undefined);
export default ContectContext;