import { useRouter } from "next/router";
import styled from "styled-components";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";

import useWeb3 from "@/src/hooks/useWeb3";
const HeaderWrapper = styled.div`
  background-color: #fff;
  box-shadow: rgb(0 0 0 / 12%) 0px 2px 6px 0px;
  width: 100%;
  min-width: 1440px;
  height: 54px;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  padding: 0 72px;
  width: 100%;
  height: 100%;
`;

const Logo = styled.div`
  background-image: url(https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31);
  background-size: 100%;
  background-repeat: no-repeat;
  width: 86px;
  height: 18px;
`;

const LogoText = styled.h1`
  color: #605e5c;
  font-size: 16px;
  margin-left: 16px;
  line-height: 23px;
  height: 23px;
  font-weight: normal;
`;

const Left = styled.div`
  display: flex;
  flex: 1 auto;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  flex: 0 auto;
  align-items: center;
`;

const UserName = styled.div`
  color: #605e5c;
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 8px;
  font-size: 13px;
`;

const LogoWrapper = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
`;

const Header = () => {
  const router = useRouter();
  const web3 = useWeb3();
  return (
    <HeaderWrapper>
      <HeaderContent>
        <Left>
          <LogoWrapper onClick={() => router.push("/")}>
            <Logo />
            <LogoText>Bit Forest App Store</LogoText>
          </LogoWrapper>
        </Left>
        {web3.account && (
          <Right>
            <Jazzicon diameter={24} seed={jsNumberForAddress(web3.account)} />
            <UserName title={`${web3.account}`}>{web3.account}</UserName>
          </Right>
        )}
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
