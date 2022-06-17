import useWeb3 from "@/src/hooks/useWeb3";
import { IButtonProps, ITextFieldProps } from "@fluentui/react";
import { useState } from "react";
import { BuyView } from "./View";

export function Buy() {
  const web3app = useWeb3();

  const [loading, setLoading] = useState(false);
  const [appTokenId, setAppTokenId] = useState("");
  const [price, setPrice] = useState("");
  const [resultText, setResultText] = useState("");

  const onAppTokenIdChange: ITextFieldProps["onChange"] = (e) => {
    setAppTokenId(e.currentTarget.value);
  };

  const onPriceChange: ITextFieldProps["onChange"] = (e) => {
    setPrice(e.currentTarget.value);
  };

  const checkInput = (): boolean => {
    return appTokenId.length > 0 && price.length > 0;
  };

  const onButtonClick: IButtonProps["onClick"] = async () => {
    setResultText("");

    if (!checkInput()) {
      setResultText("Please input app token id and price");
    } else {
      setLoading(true);
      const result = await web3app.buy(appTokenId, price);
      setLoading(false);

      if (result !== null) {
        setResultText("Done");
      } else {
        setResultText("Something is wrong");
      }
    }
  };

  return (
    <BuyView
      loading={loading}
      appTokenId={appTokenId}
      price={price}
      resultText={resultText}
      onPriceChange={onPriceChange}
      onAppTokenIdChange={onAppTokenIdChange}
      onButtonClick={onButtonClick}
    />
  );
}
