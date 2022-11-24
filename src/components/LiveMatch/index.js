import React from 'react';
import * as S from './styles'
import { useHistory } from 'react-router-dom'

function LiveMatch(props) {
    const { match, group, time, day,location, bet} =props.liveMatch
    const { showBet } = props
    const history = useHistory()

    const handleChangePage = () =>{
        history.push('/app2/1')
    }

    return (
        <S.Wrapper>
            <S.Live>
                LIVE
            </S.Live>
            <S.Cup>
                <img src="/images/liveMatch/wc.png" alt="cup" />
            </S.Cup>
           <S.LineUp>
            <S.Flag>
                <img src={match.flagHome} alt="flag" />
            </S.Flag>
            <S.Country>
                {match.home}
            </S.Country>
            <S.Score>
                {match.scoreHome} - {match.scoreAway}
            </S.Score>
            <S.Country>
                {match.away}
            </S.Country>
            <S.Flag primary>
                <img src={match.flagAway} alt="flag" />
            </S.Flag>
           </S.LineUp>
           <S.Infor>
            <span>Group {group}</span>
            <span>{time}</span>
            <span>{day}</span>
           </S.Infor>
           <S.Location>
            {location}
           </S.Location>
           <div className={showBet? 'list-bet' : 'list-btn'}>
            {!showBet ?  <S.Button onClick={handleChangePage}>Bet Now</S.Button>: <>
            <S.Button>{bet.win}</S.Button>
            <S.Button>{bet.draw}</S.Button>
            <S.Button>{bet.lose}</S.Button>
            </>}
           </div>
        </S.Wrapper>
    );
}

export default LiveMatch