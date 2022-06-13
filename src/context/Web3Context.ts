import React from 'react';
import web3app from '@/src/utils/web3app';

export type IWeb3ContextValue = typeof web3app;

const Web3Context = React.createContext<IWeb3ContextValue>(web3app);

export default Web3Context;