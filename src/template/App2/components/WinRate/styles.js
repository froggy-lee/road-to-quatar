import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 2rem 0;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: clamp(22px, 2vw, 24px);
  line-height: 26px;

  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-transform: uppercase;
  text-align: center;

  padding: 0 2rem;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

export const WinRateInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const WinRateItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 86px;
    height: 86px;
  }

  div {
    padding: 5px;
  }
`;

export const Home = styled(WinRateItem)``;

export const Draw = styled(WinRateItem)`
  .draw__flag--icon {
    width: 86px;
    height: 86px;
    background-color: #d9d9d9;
    border-radius: 50%;
  }
`;

export const Away = styled(WinRateItem)`
  .away__flag--icon {
    img {
      border-radius: 50%;
    }
  }
`;

export const WinTitle = styled.div`
  font-weight: 800;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;

  margin: 0;
`;

export const Ratio = styled.div`
  font-weight: 700;
  font-size: 36px;
  line-height: 58px;
  text-align: center;
  color: #ffffff;
`;
