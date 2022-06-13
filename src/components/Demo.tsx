import useWeb3 from '@/src/hooks/useWeb3';

const Demo = () => {
  const web3 = useWeb3();

  const handleSell = () => {
    web3?.sell();
  }

  const handleBuy = () => {
    web3?.buy();
  }

  const handleVerify = () => {
    web3?.verify();
  }

  const totalCount = () => {
    web3?.totalCount();
  }

  const tokenURI = () => {
    web3?.tokenURIs();
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
