import React, { createContext, Dispatch, SetStateAction } from 'react';

export interface ContectContextProps {
    ContectData: string;
    setContectData: Dispatch<SetStateAction<string>>;
}

const ContectContext = createContext<ContectContextProps | undefined>(undefined);
export default ContectContext;