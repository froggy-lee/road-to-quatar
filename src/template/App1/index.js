import React from 'react';
import Header from "../../layouts/Header"
import LiveMatch from '../../components/LiveMatch';
import * as S from './styles'
import LineUp from '../../components/LineUp';
import SectionHeading from '../../components/SectionHeading'
import Footer from '../../layouts/Footer1';

const liveMatch = {
    match: {
        home:'senegal',
        flagHome:'/images/liveMatch/senegal.png',
        scoreHome:0,
        away:'netherlands',
        flagAway:'/images/liveMatch/holland.png',
        scoreAway:0
    },
    group:'A',
    time:'17:00',
    day:'11/21/2022',
    location:'Al Thumama Stadium',
    bet: {
        win: 50.36,
        draw: 25.47,
        lose: 1.023
    }
    
}

const ListLineUp = [{
    
        match: {
            home:'senegal',
            flagHome:'/images/liveMatch/senegal.png',
            scoreHome:0,
            away:'netherlands',
            flagAway:'/images/liveMatch/holland.png',
            scoreAway:0
        },
        group:'A',
        time:'17:00',
        day:'11/21/2022',
        location:'Al Thumama Stadium'
        
    
},
{
        match: {
            home:'senegal',
            flagHome:'/images/liveMatch/senegal.png',
            scoreHome:0,
            away:'netherlands',
            flagAway:'/images/liveMatch/holland.png',
            scoreAway:0
        },
        group:'A',
        time:'17:00',
        day:'11/21/2022',
        location:'Al Thumama Stadium'
    
},
{
        match: {
            home:'senegal',
            flagHome:'/images/liveMatch/senegal.png',
            scoreHome:0,
            away:'netherlands',
            flagAway:'/images/liveMatch/holland.png',
            scoreAway:0
        },
        group:'A',
        time:'17:00',
        day:'11/21/2022',
        location:'Al Thumama Stadium'
        
},
{
        match: {
            home:'senegal',
            flagHome:'/images/liveMatch/senegal.png',
            scoreHome:0,
            away:'netherlands',
            flagAway:'/images/liveMatch/holland.png',
            scoreAway:0
        },
        group:'A',
        time:'17:00',
        day:'11/21/2022',
        location:'Al Thumama Stadium'
        
},
{
        match: {
            home:'senegal',
            flagHome:'/images/liveMatch/senegal.png',
            scoreHome:0,
            away:'netherlands',
            flagAway:'/images/liveMatch/holland.png',
            scoreAway:0
        },
        group:'A',
        time:'17:00',
        day:'11/21/2022',
        location:'Al Thumama Stadium'
        
}]

function App1(props) {
    return (
        <>
        <Header />
        <S.Wrapper>
            <LiveMatch liveMatch = {liveMatch} showBet={false}/>
            <div>
            <div className="title">
                <SectionHeading title="Match day" />
            </div>
            <div>
                <S.Time>Monday, 11/21/ 2022</S.Time>
                {ListLineUp.map((item, index) => {
                    return(
                        <S.LineUp>
                            <LineUp liveUp = {item} key={index}/>
                        </S.LineUp>
                    )
                })}
            </div>
            <div>
            <S.Time>Monday, 11/21/ 2022</S.Time>
                {ListLineUp.map((item, index) => {
                    return(
                        <S.LineUp>
                            <LineUp liveUp = {item} key={index}/>
                        </S.LineUp>
                    )
                })}
            </div>
            </div>
        </S.Wrapper>
        <Footer />
        </>
    )
}

export default App1;