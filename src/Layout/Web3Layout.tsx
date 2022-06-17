import dynamic from "next/dynamic";

import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import { Spinner } from "@fluentui/react/lib/Spinner";

import Web3Context, { IWeb3ContextValue } from "@/src/context/Web3Context";
import Container from "@/src/components/Container";
import Error, { ErrorType } from "@/src/components/Error";
import Footer from "@/src/components/Footer";

import web3app from "@/src/utils/web3app";

const Header = dynamic(() => import("@/src/components/Header"), { ssr: false });

type StatusType = "loading" | "loaded" | "error";
initializeIcons();

const SpinnerWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Layout: FC = ({ children }) => {
  const [web3, setWeb3] = useState<IWeb3ContextValue>(web3app);
  const [pageStatus, setPageStatus] = useState<StatusType>("loading");
  const [errorType, setErrorType] = useState<ErrorType>("none");

  useEffect(() => {
    (async () => {
      const newWeb3 = await web3app.init();
      setWeb3(newWeb3 as IWeb3ContextValue);
      const checkAvailable = newWeb3?.checkAvailable();
      if (!checkAvailable) {
        setErrorType(!newWeb3?.networkAddress ? "network" : "wallet");
      }
      setPageStatus(checkAvailable ? "loaded" : "error");
    })();
  }, []);

  return (
    <Web3Context.Provider value={web3}>
      {pageStatus === "loading" && (
        <SpinnerWrapper>
          <Spinner
            label="Wait, wait..."
            ariaLive="assertive"
            labelPosition="bottom"
          />
        </SpinnerWrapper>
      )}
      {pageStatus === "loaded" && (
        <>
          <Header />
          <Container>{children}</Container>
          <Footer />
        </>
      )}
      {pageStatus === "error" && <Error type={errorType} />}
    </Web3Context.Provider>
  );
};

export default dynamic(() => Promise.resolve(Layout), { ssr: false });
