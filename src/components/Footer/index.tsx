import styled from 'styled-components';

const FooterWrapper = styled.div`
  color: #979593;
  height: 48px;
  width: 100%;
  text-align: center;
  font-size: 12px;
  margin-top: 48px;
`;

const Footer = () => {
  return <FooterWrapper>
    © Microsoft 2022
  </FooterWrapper>
}

export default Footer;

