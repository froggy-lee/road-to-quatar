import styled from "styled-components"

export const Wrapper = styled.div`
    background-color: #dce0e3;
    padding: 4rem 10rem;
    @media (max-width: 1075px) {
        padding: 4rem 2rem;
    }
    h2 {
        color: #303030 !important;
    }
    .section-heading::after {
        background: #303030 !important;
    }
    .section-heading::before {
        background: #303030 !important;
    }
`
export const ListQA = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
export const QA = styled.div`
    width: 45%;
    height: 100%;
    padding: 1rem;
    .active {
        padding: 0.1rem 0.5rem;
        border: none;
        background-color: rgba(0,0,0,0);
        font-size: 21px;
        font-weight: 600;
        &:hover {
            cursor: pointer;
        }
    }
    .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 18px;
        font-weight: 600;
    }
    .des {
        font-size: 8px;
        height: 0;
        overflow: hidden;
        transition: 0.2s all;
    }
    .des-active {
        height: 100%;
        //width: 100%;
        font-size: 14px;
        overflow:auto;
        transition: 0.2s all;
        
    }
`