import React from 'react';
import * as S from './styles'
import { useHistory } from 'react-router-dom'

function LineUp(props) {
    const { match, time, group} =props.liveUp
    const history = useHistory()

    const handleChangePage = () => {
        history.push('/app2/1')
    }

    return (
        <S.Wrapper>
            <div>
                <div>
                    {time}
                </div>
                <div>
                    Group {group}
                </div>
            </div>
            <div>
                {match.home}
            </div>
            <div>
                <img src={match.flagHome} alt="flag" />
            </div>
            <div>VS</div>
            <div>
                <img src={match.flagAway} alt="flag" />
            </div>
            <div>
                {match.away}
            </div>
            <S.Button onClick={handleChangePage}>
                Bet Now
            </S.Button>
        </S.Wrapper>
    )
}

export default LineUp;