import dynamic from 'next/dynamic'

import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Spinner } from '@fluentui/react/lib/Spinner';

import Web3Context, { IWeb3ContextValue } from '@/src/context/Web3Context';
import Container from '@/src/components/Container';
import MetaMaskSupport from '@/src/components/MetaMaskSupport';
import SiderBar from '@/src/components/SiderBar';
import Carousel from '@/src/components/Carousel';
import AppList from '@/src/components/AppList';
import Footer from '@/src/components/Footer';

import web3app from '@/src/utils/web3app';

const Header = dynamic(
  () => import('@/src/components/Header'),
  { ssr: false }
)
const Demo = dynamic(
  () => import('@/src/components/Demo'),
  { ssr: false }
)

type StatusType = 'loading' | 'loaded' | 'error';

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

const LeftPanel = styled.div`
  flex: 0 296px;
`;

const MainContent = styled.div`
  background: grren;
  flex: 1 auto;
  margin-left: 24px;
`;

const HomePage = () => {
  const [web3, setWeb3] = useState<IWeb3ContextValue>(web3app);
  const [pageStatus, setPageStatus] = useState<StatusType>('loading');

  useEffect(() => {
    (async () => {
      const newWeb3 = await web3app.init();
      setWeb3(newWeb3 as IWeb3ContextValue);
      setPageStatus(newWeb3?.useMetaMask() ? 'loaded' : 'error');
    })();
  }, []);

  return (
    <Web3Context.Provider value={web3}>
      {
        pageStatus === 'loading' && <SpinnerWrapper>
          <Spinner label="Wait, wait..." ariaLive="assertive" labelPosition="bottom" />
        </SpinnerWrapper>
      }
      {
        pageStatus === 'loaded' && <>
          <Header />
          <Container>
            <LeftPanel>
              <SiderBar />
            </LeftPanel>
            <MainContent>
              <Carousel />
              <AppList />
              <Demo />
            </MainContent>
          </Container>
          <Footer />
        </>
      }
      {
        pageStatus === 'error' && <MetaMaskSupport />
      }
    </Web3Context.Provider>
  );
};

export default dynamic(() => Promise.resolve(HomePage), { ssr: false });
