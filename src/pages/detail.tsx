import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState, useMemo } from "react";

import Web3 from "web3";
import axios from "axios";
import styled from "styled-components";

import { PrimaryButton, Stack, StackItem, Spinner } from "@fluentui/react";

import useWeb3 from "@/src/hooks/useWeb3";
import AppItemCard from "@/src/components/AppItemCard";
import { FontIcon } from "@fluentui/react/lib/Icon";
const Web3Layout = dynamic(() => import("@/src/Layout/Web3Layout"), {
  ssr: false,
});

export type AppMetaDataType = {
  name: string;
  image: string;
  external_url: string;
  description: string;
  _appInfo: {
    name: string;
    price: string;
    seller: string;
    buyers: string[];
  };
};

const TopLeft = styled(StackItem)`
  margin-left: 24px;
`;

const Img = styled.img`
  width: 500px;
`;

const MediumDescriptionTitle = styled.h3`
  margin-bottom: 2px;
  margin-top: 8px;
  margin-left: 20px;
`;

const MediumDescriptionText = styled.p`
  margin-bottom: 10px;
  margin-left: 20px;
`;

const DetailContainerBottomTitle = styled.h2`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  margin-top: 0;
  margin-bottom: 0;
  color: #262626;
`;

const DetailContainerBottomText = styled(StackItem)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: white;
  padding: 24px;
  margin: 12px 0px 40px;
  height: max-content;
  width: 78%;
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
const Hr = styled.div`
  height: 1px;
  border: none;
  box-sizing: content-box;
  border-top: 1px solid #e2e2e2;
  margin: 24px 0 !important;
`;

const Price = styled.div`
  color: #605e5c;
  padding-top: 4px;
  font-size: 13px;
`;

const Error = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: #605e5c;
    padding-left: 8px;
  }
`;

const imgSrc =
  "https://store-images.s-microsoft.com/image/apps.60811.b0da2c59-ac0b-4fa2-be60-7bd5087a9aa2.7c62ea9f-3cc7-47c9-b561-95c9ae2a6405.7829337d-00ac-4df4-85ff-a0f218280be4";

const Detail = () => {
  const [data, setData] = useState<AppMetaDataType | null>(null);
  const [purchaseStatus, setPurcpurchaseStatushase] = useState("loading");
  const web3 = useWeb3();
  const router = useRouter();

  const tokenId = useMemo<string>(
    () => (router.query.id ? `${router.query.id}` : ""),
    [router.query.id]
  );

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
    setPurcpurchaseStatushase(purchased ? "purchased" : "noPurchased");
  }, [tokenId, web3]);

  const handlePurchase = useCallback(async () => {
    setPurcpurchaseStatushase("achieving");
    const price = data?._appInfo.price;
    if (price) {
      await web3.buy(tokenId, price);

      checkPurchaseStatus();
    }
  }, [tokenId, web3, data]);

  const Top = () => {
    return (
      <Stack horizontal disableShrink horizontalAlign="space-between">
        <TopLeft>{data && <AppItemCard data={data} />}</TopLeft>
        <StackItem align="center">
          <>
            {purchaseStatus === "loading" && (
              <PrimaryButton>
                <Spinner />
              </PrimaryButton>
            )}
            {purchaseStatus === "purchased" && (
              <PrimaryButton disabled text="Purchased" />
            )}
            {purchaseStatus === "noPurchased" && (
              <>
                <PrimaryButton text="Purchase" onClick={handlePurchase} />
                {data?._appInfo && (
                  <Price>
                    {Web3.utils.fromWei(data?._appInfo.price, "ether")} ETH
                  </Price>
                )}
              </>
            )}
            {purchaseStatus === "achieving" && (
              <>
                <PrimaryButton disabled text="Achieving">
                  <Spinner />
                </PrimaryButton>
              </>
            )}
          </>
        </StackItem>
      </Stack>
    );
  };

  const Medium = () => {
    return (
      <Stack horizontal disableShrink horizontalAlign="start">
        <StackItem style={{ marginRight: 12 }}>
          <Img src={imgSrc} />
        </StackItem>
        <StackItem style={{ marginRight: 24 }}>
          <Img src={imgSrc} />
        </StackItem>
        <StackItem>
          <MediumDescriptionTitle>Details</MediumDescriptionTitle>
          <MediumDescriptionText>Version 32.2.0.47</MediumDescriptionText>
          <MediumDescriptionText>Updated June 1, 2022</MediumDescriptionText>
          <MediumDescriptionTitle> Terms</MediumDescriptionTitle>
          <MediumDescriptionText>Privacy policy</MediumDescriptionText>
          <MediumDescriptionTitle> Developer</MediumDescriptionTitle>
          <MediumDescriptionText>
            More add-ons from markd.ltd
          </MediumDescriptionText>
        </StackItem>
      </Stack>
    );
  };

  const Bottom = ({ data }: any) => {
    return (
      <Stack disableShrink >
        <StackItem style={{ marginTop: 24, marginBottom: 12 }}>
          <DetailContainerBottomTitle>Description</DetailContainerBottomTitle>
        </StackItem>

        <DetailContainerBottomText>
          <DetailContainerBottomDesc >
            {data.description}
          </DetailContainerBottomDesc>
          <DetailContainerBottomLink href="" target="_blank">
            Show More
          </DetailContainerBottomLink>
        </DetailContainerBottomText>
      </Stack>
    );

  };

  return (
    <Stack grow>
      <Top />
      <Hr />
      <Medium />
      <>{data && <Bottom data={data} />}</>
    </Stack>
  );
};

const DetailPage = () => {
  return (
    <Web3Layout>
      <Detail />
    </Web3Layout>
  );
};

export default DetailPage;
