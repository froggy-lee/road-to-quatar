import styled from "styled-components"

export const Wrapper = styled.div`
    background-image: url('/images/liveMatch/background.png');
    background-size: cover;
    background-repeat: no-repeat;
    padding: 4rem;
    font-weight: 600;
    font-size: 26px;
    line-height: 31px;
    border-radius: 50px;
    text-align: center;
    color: #FFFFFF;
    position: relative;
    .list-bet,
    .list-btn {
        display: flex;
        justify-content: center;
        margin-top: 3rem;
    }
    .list-bet {
        justify-content: space-around;
    }
`
export const Live = styled.div`
    position: absolute;
    top: 3rem;
    left: 3rem;
    &::before {
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        background: #ffffff;
        border-radius: 50px;
        top:30%;
        left: -1.5rem;
    }
`
export const Cup = styled.div`
    position: absolute;
    z-index: 1;
    left: 43%;
    top: 5rem;
`
export const LineUp= styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #ffffff;
    border-radius: 50px;
    margin-top: 20rem;
    position: relative;
    z-index: 2;
    img {
        border-radius: 50%;
        width: 5rem;
        height: 5rem;
    }
`
export const Country = styled.div`
    font-weight: 800;
    color: #61103B;
    text-transform: uppercase;
    width: 14rem;
`
export const Flag = styled.div`
    background-image: ${props => props.primary ? "url('/images/liveMatch/flag-right.png')" : "url('/images/liveMatch/flag-left.png')"};
    background-size: contain;
    background-repeat: no-repeat;
    width: 6.9rem;
    height: 100%;
    padding: 0.5rem;
`
export const Score = styled.div`
    font-weight: 800;
    font-size: 42px;
    line-height: 50px;
    color: #D5AB37;
    background: radial-gradient(37.9% 98.1% at 50% 50%, #992556 0.69%, #6A023B 100%);
    padding: 1.4rem 3rem;
`

export const Infor =styled.div`
    margin-top: 2rem;
    span {
        padding: 0 1rem;
        border-right: 2px solid #ffffff;
        &:last-child {
            border: none;
        }
    }
`
export const Location = styled.div`
    margin-top: 2rem;
`
export const Button = styled.div`
    background: #D5AB37;
    border-radius: 15px;
    color: #590C3A;
    width: 10rem;
    padding: 1rem 0;
    &:hover {
        cursor: pointer;
    }
`