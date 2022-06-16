import styled from "styled-components";
import ReactStars from "react-stars";
const Img = styled.img`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 9%;
  margin: 1px 30px 1px 1px;
`;

const DetailText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items:center;
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
  margin-bottom:10px;
  width:100%;
`;

// const P = styled.p`
//   display: inline-flex;
//   justify-content: flex-start;
//   align-items:center;
//   font-size: 16px;
//   line-height: 20px;
// `;

const CorporationLink = styled.a`
  display: inline-flex;
  justify-content: flex-start;
  align-items:center;
  font-size: 14px;
  line-height: 20px;
  width:100%;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  color: #387DE4;
`;
const StartsWrapper = styled.div`
  display: flex;
  margin-top:4px;
  margin-bottom: 4px;
  justify-content: flex-start;
  align-items:center;
  width: 100%;
`;

export default ({ data }: any) => {
  return (<>
    <Img src={data.image} />
    <DetailText>
      <AppTitle>{data.name}</AppTitle>
      <CorporationLink href="" target="_blank">Microsoft Corporation</CorporationLink>
      <StartsWrapper>
        <ReactStars count={5} value={3} size={12} edit={false} color2={"#ffd700"} />
      </StartsWrapper>
    </DetailText>
  </>)
}