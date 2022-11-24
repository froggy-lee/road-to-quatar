import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 2rem 0;
  color: #fff;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: clamp(22px, 2vw, 24px);
  line-height: 26px;

  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-transform: uppercase;

  padding: 0 2rem;
`;

export const HistoryWrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: rgba(114, 32, 76, 0.9);
  border-radius: 15px;
`;

export const Match = styled.div`
  position: relative;
  width: 100%;
  padding: 10px 4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Date = styled.div`
  font-weight: 700;
  font-size: clamp(18px, 2vw, 24px);
  line-height: 26px;
`;

export const MatchContent = styled.div`
  position: relative;
  display: flex;

  div {
    margin: 0 10px;
  }
`;

export const Home = styled.div`
  display: flex;
  align-items: center;

  .home__flag--icon {
    img {
      display: none;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      @media screen and (min-width: 992px) {
        display: block;
      }
    }
  }
`;

export const Score = styled(Date)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 60px;
`;

export const Away = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;

  .away__flag--icon {
    img {
      display: none;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      @media screen and (min-width: 992px) {
        display: block;
      }
    }
  }
`;

export const Name = styled(Date)`
  text-transform: uppercase;
`;

export const HomeName = styled(Name)``;

export const AwayName = styled(Name)``;
