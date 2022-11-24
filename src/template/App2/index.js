import React from "react";
import * as S from "./styles";
import Header from "../../layouts/Header";
import LiveMatch from "../../components/LiveMatch";
import WinRate from "./components/WinRate";
import MatchHistory from "./components/MatchHistory";
import LastFiveMatch from "./components/LastFiveMatch";
import Footer from '../../layouts/Footer1'

const liveMatch = {
  match: {
    home: "senegal",
    flagHome: "/images/liveMatch/senegal.png",
    scoreHome: 0,
    away: "netherlands",
    flagAway: "/images/liveMatch/holland.png",
    scoreAway: 0,
  },
  group: "A",
  time: "17:00",
  day: "11/21/2022",
  location: "Al Thumama Stadium",
  bet: {
    win: 50.36,
    draw: 25.47,
    lose: 1.023,
  },
};

const App2 = () => {
  return (
    <>
      <Header />
      <S.Wrapper>
        <S.LiveMatchWrapper>
          <LiveMatch liveMatch={liveMatch} showBet />
        </S.LiveMatchWrapper>
        <S.MatchInfoSection>
          <S.Title>
            <h1 data-aos="fade-up" data-aos-delay='300'>MATCH INFO</h1>
          </S.Title>
          <WinRate data={liveMatch} />
          <MatchHistory data={liveMatch} />
          <LastFiveMatch data={liveMatch} />
        </S.MatchInfoSection>
      </S.Wrapper>
      <Footer />
    </>
  );
};

export default App2;
