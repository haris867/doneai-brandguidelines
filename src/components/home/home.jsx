import React from "react";
import { Helmet } from "react-helmet-async";
import * as S from "../commonStyles/index.js";
import styled from "styled-components";
import { useEffect } from "react";

// const LogoBox = styled.div`
//   display: flex;
//   justify-content: center;
//   position: absolute;
//   width: 100%;
// `;

// const LogoContainerImage = styled.img`
//   max-width: calc(120px + 3vw);
//   max-height: 100px;
//   margin: 0px 10px;
//   position: relative;
//   bottom: 100px;
// `;

const Title = styled(S.Title)`
  padding-bottom: 2rem;
`;

export default function Home() {
  useEffect(() => {
    const interBubble = document.querySelector(".div-block-33 .interactive");
    const container = document.querySelector(".div-block-33");

    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
      if (interBubble) {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubble.style.transform = `translate(${Math.round(
          curX
        )}px, ${Math.round(curY)}px)`;
      }
      requestAnimationFrame(move);
    }

    const mouseMoveHandler = (event) => {
      if (container) {
        const rect = container.getBoundingClientRect();
        tgX = event.clientX - rect.left;
        tgY = event.clientY - rect.top;
      }
    };

    window.addEventListener("mousemove", mouseMoveHandler);
    move();

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return (
    <div>
      <Helmet>
        <title>Brand Guidelines | Done.ai</title>
      </Helmet>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <S.HomeTitleContainer>
          <Title>Welcome to our Brand Guidelines</Title>
        </S.HomeTitleContainer>

        <div className="div-block-33">
          <div className="gradient-bg">
            <svg xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="goo">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="10"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                    result="goo"
                  />
                  <feBlend in="SourceGraphic" in2="goo" />
                </filter>
              </defs>
            </svg>

            <div className="gradients-container-box">
              <div className="gradients-container">
                <div className="g1"></div>
                <div className="g2"></div>
                <div className="g3"></div>
                <div className="g4"></div>
                <div className="g5"></div>
                <div className="interactive"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <LogoBox>
        <LogoContainerImage src="./images/done-logo.svg"></LogoContainerImage>
      </LogoBox> */}
      <S.Bodytext style={{ padding: "0 0.3em" }}>
        These guidelines are an instruction manual explaining how we present
        ourselves to the world as an organisation and brand. It's our rule book
        on communicating consistently across all channels, and defines visual,
        verbal, and written communication frameworks and set the foundation for
        our brand to grow and thrive.
      </S.Bodytext>
    </div>
  );
}
