import styled from 'styled-components';

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#e2e3e5')};

  @media screen and (max-width: 768px) {
    padding: '2.5rem 2.5rem';
    position: relative;
    height: 45rem;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100%;
  padding: '30px 30px 30px 30px';
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) => (imgStart ? `'col3 col2 col1'` : `'col1 col2 col3'`)};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2' 'col1' 'col3'` : `'col2' 'col3' 'col1'`)};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  margin: auto;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const Column3 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  margin: auto;
  grid-area: col3;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 10%;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #4973b9;
  font-size: 30px;
  line-height: 40px;
  font-weight: 700;
  margin-bottom: 5%;
  text-align: center;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  margin-bottom: 35px;
  padding-top: 20px;
  max-width: 360px;
  min-width: 360px;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  margin: auto;
  color: ${({ darkText }) => (darkText ? '#333333' : '#fff')};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 250px;
  height: 100%;

  @media screen and (max-width: 768px) {
    max-width: 100px;
    height: 100%;
  }
`;

export const MaleTshirtImg = styled.img`
  width: 100%;
  margin: 30% 0 0 20%;
  padding-right: 0;

  @media screen and (max-width: 768px) {
    -webkit-transform: rotate(-20deg);
    -moz-transform: rotate(-20deg);
    -ms-transform: rotate(-20deg);
    -o-transform: rotate(-20deg);
    transform: rotate(-20deg);
    position: absolute;
    width: 6rem;
    top: 28rem;
    right: 12rem;
  }
`;

export const FemaleTshirtImg = styled.img`
  width: 90%;
  margin: 30% 0% 0 -40px;
  padding-right: 0;

  @media screen and (max-width: 768px) {
    -webkit-transform: rotate(20deg);
    -moz-transform: rotate(20deg);
    -ms-transform: rotate(20deg);
    -o-transform: rotate(20deg);
    transform: rotate(20deg);
    position: absolute;
    width: 5.5rem;
    top: 28rem;
    left: 15rem;
  }
`;
