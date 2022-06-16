import styled from "styled-components";
import { PrimaryButton } from '@fluentui/react/lib/Button';

const Container = styled.div`
  display: flex;
`;

const ImageWrapper = styled.div`
  flex: 0 0 608px;
`;

const TextWrapper = styled.div`
  margin-left: 18px;
  flex: 1 1 auto;
`;

const H3 = styled.h3`
  font-size: 16px;
`;

const P = styled.p`
  color: #979593;
  font-size: 13px;
  margin-top: 16px;
`;

const Carousel = () => {
  return (
    <Container>
      <ImageWrapper>
        <img
          width="100%"
          src="https://store-images.s-microsoft.com/image/apps.24192.d5843a61-6690-459f-ae52-ae77f312646b.60631f11-c517-4883-af5a-6153c3e7f440.6b723fda-6967-4edd-9753-7a75da9a9511"
        />
      </ImageWrapper>
      <TextWrapper>
        <H3>Editor's Choice 👍</H3>
        <P>This is the DAppStore handpicked App placement for users. App owners can also bid to increase the visibility of their apps.</P>
        <PrimaryButton style={{ marginTop: 24 }}>Get</PrimaryButton>
      </TextWrapper>
    </Container>
  );
};

export default Carousel;
