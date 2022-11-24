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

export const LastFiveMatchWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  background: rgba(114, 32, 76, 0.9);
  border-radius: 15px;
  padding: 4rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Home = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  div {
    padding: 10px;
  }
`;

export const Away = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  div {
    padding: 10px;
  }
`;

export const Name = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  font-size: 24px;
  line-height: 26px;
  color: #ffffff;

  div {
    padding: 5px;
  }
`;

export const HomeName = styled(Name)`
  text-transform: uppercase;
  .home__flag--icon {
    img {
      width: 86px;
      height: 86px;
      border-radius: 50%;
    }
  }
`;

export const AwayName = styled(Name)`
  text-transform: uppercase;
  .away__flag--icon {
    img {
      width: 86px;
      height: 86px;
      border-radius: 50%;
    }
  }
`;

export const With = styled.div`
  display: flex;
  align-items: center;

  div {
    padding: 5px;
  }
`;

export const MatchInfo = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-align: right;
  color: #ffffff;
`;

export const Date = styled(MatchInfo)``;

export const Score = styled(MatchInfo)`
  min-width: 65px;
`;

export const Opponent = styled(MatchInfo)`
  text-transform: uppercase;
`;
