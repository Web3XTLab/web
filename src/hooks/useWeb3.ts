import { useEffect, useContext } from 'react';
import Web3Context from '@/src/context/Web3Context';

export default () => {
  const web3 = useContext(Web3Context);
  return web3;
}