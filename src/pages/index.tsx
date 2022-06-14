import dynamic from "next/dynamic";
import { useRouter } from 'next/router'

import { useCallback } from "react";
import styled from "styled-components";

import SiderBar from "@/src/components/SiderBar";
import Carousel from "@/src/components/Carousel";
import AppList from "@/src/components/AppList";

const Web3Layout = dynamic(() => import("@/src/Layout/Web3Layout"), { ssr: false });

const LeftPanel = styled.div`
  flex: 0 296px;
`;

const MainContent = styled.div`
  background: grren;
  flex: 1 auto;
  margin-left: 24px;
`;

const HomePage = () => {
  const router = useRouter()

  const handleItemClick = useCallback((item) => {
    router.push(`/detail/${item._tokenId}`);
  }, []);

  return (
    <Web3Layout>
      <LeftPanel>
        <SiderBar />
      </LeftPanel>
      <MainContent>
        <Carousel />
        <AppList onItemClick={handleItemClick} />
      </MainContent>
    </Web3Layout>
  );
};

export default HomePage;
