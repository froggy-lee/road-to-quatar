import React from "react";
import * as S from "./styles";

const MatchHistory = ({ data }) => {
  const { match } = data;
  return (
    <S.Wrapper>
      <S.Title>MATCH HISTORY</S.Title>

      <S.HistoryWrapper>
        <S.Match>
          <S.Date>06/14/2010</S.Date>

          <S.MatchContent>
            <S.Home>
              <S.HomeName>{match.home}</S.HomeName>
              <div className="home__flag--icon">
                <img src={match.flagHome} alt="flag" />
              </div>
            </S.Home>
            <S.Score>0 - 2</S.Score>
            <S.Away>
              <S.AwayName>{match.away}</S.AwayName>
              <div className="away__flag--icon">
                <img src={match.flagAway} alt="flag" />
              </div>
            </S.Away>
          </S.MatchContent>
        </S.Match>

        <S.Match>
          <S.Date>06/14/2010</S.Date>

          <S.MatchContent>
            <S.Home>
              <S.HomeName>{match.home}</S.HomeName>
              <div className="home__flag--icon">
                <img src={match.flagHome} alt="flag" />
              </div>
            </S.Home>
            <S.Score>0 - 2</S.Score>
            <S.Away>
              <S.AwayName>{match.away}</S.AwayName>
              <div className="away__flag--icon">
                <img src={match.flagAway} alt="flag" />
              </div>
            </S.Away>
          </S.MatchContent>
        </S.Match>

        <S.Match>
          <S.Date>06/14/2010</S.Date>

          <S.MatchContent>
            <S.Home>
              <S.HomeName>{match.home}</S.HomeName>
              <div className="home__flag--icon">
                <img src={match.flagHome} alt="flag" />
              </div>
            </S.Home>
            <S.Score>0 - 2</S.Score>
            <S.Away>
              <S.AwayName>{match.away}</S.AwayName>
              <div className="away__flag--icon">
                <img src={match.flagAway} alt="flag" />
              </div>
            </S.Away>
          </S.MatchContent>
        </S.Match>

        <S.Match>
          <S.Date>06/14/2010</S.Date>

          <S.MatchContent>
            <S.Home>
              <S.HomeName>{match.home}</S.HomeName>
              <div className="home__flag--icon">
                <img src={match.flagHome} alt="flag" />
              </div>
            </S.Home>
            <S.Score>0 - 2</S.Score>
            <S.Away>
              <S.AwayName>{match.away}</S.AwayName>
              <div className="away__flag--icon">
                <img src={match.flagAway} alt="flag" />
              </div>
            </S.Away>
          </S.MatchContent>
        </S.Match>

        <S.Match>
          <S.Date>06/14/2010</S.Date>

          <S.MatchContent>
            <S.Home>
              <S.HomeName>{match.home}</S.HomeName>
              <div className="home__flag--icon">
                <img src={match.flagHome} alt="flag" />
              </div>
            </S.Home>
            <S.Score>0 - 2</S.Score>
            <S.Away>
              <S.AwayName>{match.away}</S.AwayName>
              <div className="away__flag--icon">
                <img src={match.flagAway} alt="flag" />
              </div>
            </S.Away>
          </S.MatchContent>
        </S.Match>
      </S.HistoryWrapper>
    </S.Wrapper>
  );
};

export default MatchHistory;
