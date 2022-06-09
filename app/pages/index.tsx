import Script from "next/script";
import dynamic from 'next/dynamic'

const Demo = dynamic(
  () => import('@/components/Demo'),
  { ssr: false }
)

const HomePage = () => {
  return (
    <>
      <Script strategy="beforeInteractive" src="js/web3.min.js"></Script>
      <Script strategy="beforeInteractive" src="js/truffle-contract.js"></Script>
      <h1>Hello BitForest DAppStore</h1>
      <Demo />
    </>
  );
};

export default HomePage;
