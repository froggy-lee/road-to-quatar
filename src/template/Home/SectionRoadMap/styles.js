import styled from 'styled-components'

export const Wrapper = styled.div`
    padding: 4rem;
    background-image: url('/images/roadmap/background.png');
    background-size: 100%;
    background-repeat: no-repeat;
    padding-bottom: 8rem;
    @media (max-width: 1000px) {
        padding-bottom: 3rem;
    }
    .roadmap-pic {
        display: flex;
        justify-content: center;
        position: relative;
        img {
            width: 100%;
        }
    }
`
export const TimeLine = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 0 7%;
`
export const Des = styled.ul`
    font-weight: 600;
    font-size: 20px;
    line-height: 31px;
    color: #FFFFFF;
    text-align: center;
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 100%;
    &:nth-child(odd) {
        margin-top: 20%;
    }
    @media (max-width: 960px) {
        font-size: 14px;
    }
`
export const Line = styled.li`
    font-weight: 500;
    font-size: 12px;
    line-height: 150%;
    margin-top: 0.3rem;
    @media (max-width: 960px) {
        font-size: 8px;
    }
`