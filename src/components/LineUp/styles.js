import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 3rem;
    background: rgba(114, 32, 76, 0.9);
    border-radius: 15px;
    font-weight: 500;
    font-size: 20px;
    line-height: 29px;
    color: #FFFFFF;
    text-transform: uppercase;
    img {
        border-radius: 50px;
        width: 5rem;
        height: 5rem;
    }
`
export const Button = styled.div`
    text-transform: none;
    color: #6d043d;
    background: #D5AB37;
    font-weight: 800;
    padding: 0.5rem 1rem;
    border-radius: 15px;
    &:hover {
        cursor: pointer;
    }
`