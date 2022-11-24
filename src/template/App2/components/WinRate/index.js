import React from "react";
import * as S from "./styles";

const WinRate = ({ data }) => {
  const { match } = data;
  return (
    <S.Wrapper>
      <S.Title>Win Rate</S.Title>

      <S.WinRateInfo>
        <S.Home>
          <div className="home__flag--icon">
            <img src={match.flagHome} alt="flag" />
          </div>

          <S.WinTitle>Win</S.WinTitle>

          <S.Ratio>10%</S.Ratio>
        </S.Home>

        <S.Draw>
          <div className="draw__flag--icon"></div>

          <S.WinTitle>Draw</S.WinTitle>

          <S.Ratio>20%</S.Ratio>
        </S.Draw>

        <S.Away>
          <div className="away__flag--icon">
            <img src={match.flagAway} alt="flag" />
          </div>

          <S.WinTitle>Win</S.WinTitle>

          <S.Ratio>70%</S.Ratio>
        </S.Away>
      </S.WinRateInfo>
    </S.Wrapper>
  );
};

export default WinRate;
