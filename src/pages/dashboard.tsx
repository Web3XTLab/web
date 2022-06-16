import dynamic from "next/dynamic";
import Web3 from "web3";

import { Input, Button } from "@fluentui/react-components";
import { PrimaryButton } from "@fluentui/react/lib/Button";

import { useRef, useCallback } from "react";
import useWeb3 from "@/src/hooks/useWeb3";

const Web3Layout = dynamic(() => import("@/src/Layout/Web3Layout"), {
  ssr: false,
});

const Dashboard = () => {
  const web3 = useWeb3();
  const sellValue = useRef({
    name: "",
    tokenURI: "",
    price: '0',
  });
  const buyValue = useRef({
    tokenId: "",
    price: '0',
  });
  const verifyValue = useRef("");
  const appValue = useRef("");

  const handleSell = useCallback(async () => {
    console.log('sell', sellValue.current);
    if (window.confirm("Are you sure to publish the tokenURI?")) {
      const result = await web3.sell(sellValue.current.name, sellValue.current.tokenURI, sellValue.current.price);
      console.log('sell result:', result);
    }
  }, []);

  const handleBuy = useCallback(async () => {
    console.log('buy', buyValue.current);
    if (window.confirm("Are you sure to buy this token?")) {
      const result = await web3.buy(buyValue.current.tokenId, buyValue.current.price);
      console.log('buy result:', result);
    }
  }, []);

  const handleVeriry = useCallback(async () => {
    console.log("verify tokenId:", verifyValue.current);

    const result = await web3.verify(verifyValue.current);
    console.log("verify result:", result);
  }, []);

  const totalCount = useCallback(async () => {
    const count = await web3.totalCount();
    console.log("totalCount", count);
  }, []);

  const tokenURIs = useCallback(async () => {
    const URIs = await web3.tokenURIs();
    console.log("URIs", URIs);
  }, []);

  const handleAppInfo = useCallback(async () => {
    const appInfo = await web3.getAppInfo(appValue.current);
    console.log("appInfo", appInfo);
  }, []);

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h4>sell</h4>
        <Input
          placeholder="Enter the Name"
          onChange={(e) => (sellValue.current.name = e.target.value)}
        />
        <Input
          placeholder="Enter the tokenURI"
          onChange={(e) => (sellValue.current.tokenURI = e.target.value)}
        />
        <Input
          placeholder="Enter the price"
          onChange={(e) =>
            (sellValue.current.price = Web3.utils.toBN(e.target.value) as any)
          }
        />
        <Button onClick={handleSell}>Sell</Button>
      </div>
      <div style={{ marginBottom: 24 }}>
        <h4>buy</h4>
        <Input
          placeholder="Enter the tokenId"
          onChange={(e) => (buyValue.current.tokenId = e.target.value)}
        />
        <Input
          placeholder="Enter the price"
          onChange={(e) =>
            (buyValue.current.price = Web3.utils.toBN(e.target.value) as any)
          }
        />
        <Button onClick={handleBuy}>Buy</Button>
      </div>
      <div style={{ marginBottom: 24 }}>
        <h4>Verify</h4>
        <Input
          placeholder="Enter the tokenId"
          onChange={(e) => (verifyValue.current = e.target.value)}
        />
        <Button onClick={handleVeriry}>Verify</Button>
      </div>
      <div style={{ marginBottom: 24 }}>
        <h4>Get App Info</h4>
        <Input
          placeholder="Enter the tokenId"
          onChange={(e) => (appValue.current = e.target.value)}
        />
        <Button onClick={handleAppInfo}>Get App Info</Button>
      </div>
      <div style={{ marginBottom: 24 }}>
        <PrimaryButton onClick={totalCount}>totalCount</PrimaryButton>
      </div>
      <div style={{ marginBottom: 24 }}>
        <PrimaryButton onClick={tokenURIs}>tokenURIs</PrimaryButton>
      </div>
    </div>
  );
};

const DashboardPage = () => {
  return (
    <Web3Layout>
      <Dashboard />
    </Web3Layout>
  );
};

export default DashboardPage;
