import dynamic from "next/dynamic";

import { Input, Button } from "@fluentui/react-components";
import { PrimaryButton } from "@fluentui/react/lib/Button";
import { useRouter } from "next/router";

import { useRef, useCallback } from "react";
import useWeb3 from "@/src/hooks/useWeb3";

const Web3Layout = dynamic(() => import("@/src/Layout/Web3Layout"), {
  ssr: false,
});

const Dashboard = () => {
  const web3 = useWeb3();
  const router = useRouter();
  const sellValue = useRef({
    tokenURI: "",
    amount: 0,
  });
  const buyValue = useRef({
    tokenId: "",
    amount: 0,
  });
  const verifyValue = useRef("");

  const handleSell = useCallback(async () => {
    console.log('sell', sellValue.current);
    if (window.confirm("Are you sure to publish the tokenURI?")) {
      const result = await web3.sell(sellValue.current.tokenURI, sellValue.current.amount);
      console.log('sell result:', result);
    }
  }, []);

  const handleBuy = useCallback(async () => {
    console.log('buy', buyValue.current);
    if (window.confirm("Are you sure to buy this token?")) {
      const result = await web3.buy(buyValue.current.tokenId, buyValue.current.amount);
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

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h4>sell</h4>
        <Input
          placeholder="Enter the tokenURI"
          onChange={(e) => (sellValue.current.tokenURI = e.target.value)}
        />
        <Input
          placeholder="Enter the amount"
          onChange={(e) =>
            (sellValue.current.amount = web3.toBN(e.target.value) as any)
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
          placeholder="Enter the amount"
          onChange={(e) =>
            (buyValue.current.amount = web3.toBN(e.target.value) as any)
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
        <PrimaryButton onClick={totalCount}>totalCount</PrimaryButton>
      </div>
      <div style={{ marginBottom: 24 }}>
        <PrimaryButton onClick={tokenURIs}>tokenURIs</PrimaryButton>
      </div>
    </div>
  );
};

export default () => {
  return (
    <Web3Layout>
      <Dashboard />
    </Web3Layout>
  );
};
