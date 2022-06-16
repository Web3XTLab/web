import styled from "styled-components";
import ReactStars from "react-stars";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  height: 120px;
  width: 120px;
  margin-right: 24px;
`;

const DetailText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
`;
const AppTitle = styled.span`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  margin-top: 0;
  margin-bottom: 10px;
  width: 100%;
`;

const CorporationLink = styled.a`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
  line-height: 20px;
  width: 100%;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  color: #387de4;
`;
const StartsWrapper = styled.div`
  display: flex;
  margin-top: 4px;
  margin-bottom: 4px;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const AppItemCard = ({ data }: any) => {
  return (
    <Container>
      <Img src={data.image} />
      <DetailText>
        <AppTitle>{data.name}</AppTitle>
        <CorporationLink href={data.external_url} target="_blank">
          Go to the App pages
        </CorporationLink>
        <StartsWrapper>
          <ReactStars
            count={5}
            value={3}
            size={12}
            edit={false}
            color2={"#ffd700"}
          />
        </StartsWrapper>
      </DetailText>
    </Container>
  );
};

export default AppItemCard;
