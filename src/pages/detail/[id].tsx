import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState, useMemo } from "react";
import axios from "axios";
import styled from "styled-components";

import { PrimaryButton } from "@fluentui/react";
import { Spinner } from '@fluentui/react/lib/Spinner';

import useWeb3 from "@/src/hooks/useWeb3";
import AppItemCard from "@/src/components/AppItemCard";

const Web3Layout = dynamic(() => import("@/src/Layout/Web3Layout"), {
  ssr: false,
});

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1440px;
`;

const DetailContainerTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 1440px;
  margin: 20px 20px 30px 20px;
`;

const Top_Left = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
`;

const Top_Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
`;

const Top_Right_Text = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: flext-start;
  align-items: center;
  width: 100%;
  font-size: 10px;
  margin-left: 30%;
  margin-top: 8px;
`;
const DetailContainerMedium = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 1440px;
  margin: 40px 20px 0px 20px;
`;

const MediumImg = styled.img`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 38%;
  margin: 0px 30px 0px 0px;
  box-shadow: rgb(0 0 0 / 13%) 0px 1.6px 3.6px, rgb(0 0 0 / 11%) 0px 0px 2.9px;
  display: block;
  height: auto;

  cursor: pointer;
`;

const MediumDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
`;

const MediumDescriptionTitle = styled.h3`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2px;
  margin-top: 8px;
  margin-left: 20px;
`;

const MediumDescriptionText = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10px;
  margin-left: 20px;
`;

const DetailContainerBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 80%;
  margin-left: 20px;
  margin-top: 50px;
  padding-right: 25px;
`;

const DetailContainerBottomTitle = styled.h2`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  margin-top: 0;
  margin-bottom: 0;
  color: #262626;
`;

const DetailContainerBottomText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: white;
  padding: 24px;
  margin: 16px 0px 40px;
  height: max-content;
  width: 100%;
  border-radius: 4px;
  box-shadow: 0px 1.6px 3.6px rgb(0 0 0 / 14%), 0px 0px 2.9px rgb(0 0 0 / 12%);
`;

const DetailContainerBottomDesc = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  white-space: pre-wrap;
  font-family: "Roboto";
  font-size: 15px;
  line-height: 25px;
  margin: 0px;
`;

const DetailContainerBottomLink = styled.a`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
  font-size: 14px;
  line-height: 20px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  color: #387de4;
`;
const Hr = styled.hr`
  margin: 32px -5px;
  margin-inline-end: 0px;
  height: 0;
  margin: 0;
  border: none;
  box-sizing: content-box;
  transition: all 0.2s ease-in-out;
  border-top: 1px solid #e2e2e2;
`;

const Price = styled.div`
  color: #605e5c;
  padding-top: 4px;
  font-size: 13px;
`;

const imgSrc =
  "https://store-images.s-microsoft.com/image/apps.60811.b0da2c59-ac0b-4fa2-be60-7bd5087a9aa2.7c62ea9f-3cc7-47c9-b561-95c9ae2a6405.7829337d-00ac-4df4-85ff-a0f218280be4";

const Detail = () => {
  const [data, setData] = useState<Record<string, any> | null>(null);
  const [purchaseStatus, setPurcpurchaseStatushase] = useState("loading");
  const web3 = useWeb3();
  const router = useRouter();

  const tokenId = useMemo(() => router.query.id, [router.query.id]);

  useEffect(() => {
    (async () => {
      if (!tokenId || !web3.web3) return;

      const itemURI = await web3.tokenURI(tokenId);
      const appInfo = await web3.getAppInfo(tokenId);
      const data = await axios.get(itemURI);

      setData({
        ...data.data,
        _appInfo: appInfo,
      });

      checkPurchaseStatus();
    })();
  }, [tokenId, web3.web3]);

  const checkPurchaseStatus = useCallback(async () => {
    const purchased = await web3.verify(tokenId);
    setPurcpurchaseStatushase(purchased ? 'purchased' : 'noPurchased'); 
  }, [tokenId, web3]);

  const handlePurchase = useCallback(async () => {
    const price = data?._appInfo.price;
    if (price) {
      await web3.buy(tokenId, web3.toBN(price));

      checkPurchaseStatus();
    }
  }, [tokenId, web3, data]);

  const Top = () => {
    return (
      <DetailContainerTop>
        <Top_Left>
          <>{data && <AppItemCard data={data} />}</>
        </Top_Left>

        <Top_Right>
          {
            purchaseStatus === 'loading' && <PrimaryButton><Spinner /></PrimaryButton>
          }
          {
            purchaseStatus === 'purchased' && <PrimaryButton disabled text="Purchased" />
          }
          {
            purchaseStatus === 'noPurchased' && <>
              <PrimaryButton text="Purchase" onClick={handlePurchase} />
              { data?._appInfo && <Price>{data._appInfo.price / 10**18} ETH</Price>}
              
            </>
          }
        </Top_Right>
      </DetailContainerTop>
    );
  };

  const Medium = () => {
    return (
      <DetailContainerMedium>
        <MediumImg src={imgSrc} />
        <MediumImg src={imgSrc} />
        <MediumDescription>
          <MediumDescriptionTitle> Details</MediumDescriptionTitle>
          <MediumDescriptionText>Version 32.2.0.47</MediumDescriptionText>
          <MediumDescriptionText>Updated June 1, 2022</MediumDescriptionText>
          <MediumDescriptionTitle> Terms</MediumDescriptionTitle>
          <MediumDescriptionText>Privacy policy</MediumDescriptionText>
          <MediumDescriptionTitle> Developer</MediumDescriptionTitle>
          <MediumDescriptionText>
            More add-ons from markd.ltd
          </MediumDescriptionText>
        </MediumDescription>
      </DetailContainerMedium>
    );
  };

  const Bottom = ({ data }: any) => {
    return (
      <DetailContainerBottom>
        <DetailContainerBottomTitle>Description</DetailContainerBottomTitle>
        <DetailContainerBottomText>
          <DetailContainerBottomDesc>
            {data.description}
          </DetailContainerBottomDesc>
          <DetailContainerBottomLink href="" target="_blank">
            Show More
          </DetailContainerBottomLink>
        </DetailContainerBottomText>
      </DetailContainerBottom>
    );
  };

  return (
    <>
      <DetailContainer>
        <Top />
        <Hr />
        <Medium />
        <>{data && <Bottom data={data} />}</>
      </DetailContainer>
    </>
  );
};

export default () => {
  return (
    <Web3Layout>
      <Detail />
    </Web3Layout>
  );
};
