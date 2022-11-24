import React from "react";
import * as S from "./styles";

const LastFiveMatch = ({ data }) => {
  const { match } = data;
  return (
    <S.Wrapper>
      <S.Title>LAST 5 MATCHES</S.Title>

      <S.LastFiveMatchWrapper>
        <S.Home>
          <S.HomeName>
            <span className="home__name">{match.home}</span>
            <div className="home__flag--icon">
              <img src={match.flagHome} alt="flag" />
            </div>
          </S.HomeName>
          <S.With>
            <S.Date>06/04/2022: </S.Date>
            <S.Score>2 - 0</S.Score>
            <S.Opponent>japan</S.Opponent>
          </S.With>

          <S.With>
            <S.Date>06/04/2022: </S.Date>
            <S.Score>2 - 0</S.Score>
            <S.Opponent>japan</S.Opponent>
          </S.With>

          <S.With>
            <S.Date>06/04/2022: </S.Date>
            <S.Score>2 - 0</S.Score>
            <S.Opponent>japan</S.Opponent>
          </S.With>

          <S.With>
            <S.Date>06/04/2022: </S.Date>
            <S.Score>2 - 0</S.Score>
            <S.Opponent>japan</S.Opponent>
          </S.With>

          <S.With>
            <S.Date>06/04/2022: </S.Date>
            <S.Score>2 - 0</S.Score>
            <S.Opponent>japan</S.Opponent>
          </S.With>
        </S.Home>

        <S.Away>
          <S.AwayName>
            <span className="away__name">{match.away}</span>
            <div className="away__flag--icon">
              <img src={match.flagAway} alt="flag" />
            </div>
          </S.AwayName>

          <S.With>
            <S.Date>06/04/2022: </S.Date>
            <S.Score>2 - 0</S.Score>
            <S.Opponent>japan</S.Opponent>
          </S.With>

          <S.With>
            <S.Date>06/04/2022: </S.Date>
            <S.Score>2 - 0</S.Score>
            <S.Opponent>japan</S.Opponent>
          </S.With>

          <S.With>
            <S.Date>06/04/2022: </S.Date>
            <S.Score>2 - 0</S.Score>
            <S.Opponent>japan</S.Opponent>
          </S.With>

          <S.With>
            <S.Date>06/04/2022: </S.Date>
            <S.Score>2 - 0</S.Score>
            <S.Opponent>japan</S.Opponent>
          </S.With>

          <S.With>
            <S.Date>06/04/2022: </S.Date>
            <S.Score>2 - 0</S.Score>
            <S.Opponent>japan</S.Opponent>
          </S.With>
        </S.Away>
      </S.LastFiveMatchWrapper>
    </S.Wrapper>
  );
};

export default LastFiveMatch;
