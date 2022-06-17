import useWeb3 from "@/src/hooks/useWeb3";
import { IButtonProps, ITextFieldProps } from "@fluentui/react";
import { useState } from "react";
import { SellView } from "./View";

export function Sell() {
  const web3app = useWeb3();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [appTokenURI, setAppTokenURI] = useState("");
  const [price, setPrice] = useState("");
  const [resultText, setResultText] = useState("");

  const onNameChange: ITextFieldProps["onChange"] = (e) => {
    setName(e.currentTarget.value);
  };

  const onAppTokenURIChange: ITextFieldProps["onChange"] = (e) => {
    setAppTokenURI(e.currentTarget.value);
  };

  const onPriceChange: ITextFieldProps["onChange"] = (e) => {
    setPrice(e.currentTarget.value);
  };

  const onButtonClick: IButtonProps["onClick"] = async () => {
    setResultText("");

    setLoading(true);
    const result = await web3app.sell(name, appTokenURI, price);
    setLoading(false);

    if (result !== undefined) {
      setResultText("Done");
    } else {
      setResultText("Something is wrong");
    }
  };

  return (
    <SellView
      loading={loading}
      name={name}
      appTokenURI={appTokenURI}
      price={price}
      resultText={resultText}
      onNameChange={onNameChange}
      onAmountChange={onPriceChange}
      onAppTokenURIChange={onAppTokenURIChange}
      onButtonClick={onButtonClick}
    />
  );
}
