import { useEffect } from 'react';
import web3app from '@/src/utils/web3app';

web3app.init();
const Demo = () => {

  // DEMO
  useEffect(() => {
  }, []);

  const handleSell = () => {
    web3app.sell();
  }

  const handleBuy = () => {
    web3app.buy();
  }

  const handleVerify = () => {
    web3app.verify();
  }

  const totalCount = () => {
    web3app.totalCount();
  }

  const tokenURI = () => {
    web3app.tokenURIs();
  }

  return (
    <>
      <button onClick={handleSell}>sell</button>
      <button onClick={handleBuy}>buy</button>
      <button onClick={handleVerify}>verify</button>
      <button onClick={totalCount}>totalCount</button>
      <button onClick={tokenURI}>tokenURI</button>
    </>
  );
};

export default Demo;
