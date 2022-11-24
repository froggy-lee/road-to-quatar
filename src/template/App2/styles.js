import styled from "styled-components";

export const Wrapper = styled.section`
  position: relative;
  margin-top: 80px;
  background-image: url("/images/main-bg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    margin-top: 90px;
  }
`;

export const MatchInfoSection = styled.section`
  padding: 2rem;
`;

export const Title = styled.div`
  position: relative;
  z-index: 1;
  padding: 0 2rem;
  margin: 0;

  h1 {
    font-weight: 800;
    font-size: clamp(36px, 5vw, 48px);
    color: #fff;

    text-align: center;
    text-transform: uppercase;
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 50%;

    width: calc(50% - 14.5rem);
    height: 2px;
    background-color: #fff;
  }

  &:before {
    left: 2rem;
  }

  &:after {
    right: 2rem;
  }
`;

export const LiveMatchWrapper = styled.div`
  position: relative;
  padding: 2rem 2rem 0 2rem;
`;
