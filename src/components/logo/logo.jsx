import React from "react";
import { Helmet } from "react-helmet-async";
import * as S from "../commonStyles/index.js";

export default function Logo() {
  return (
    <div>
      <Helmet>
        <title>Logo | Done.ai</title>
      </Helmet>
      <S.Title>Logo</S.Title>
      <S.ImageContainer>
        <S.LogoImage src="./images/done-logo.svg" />
        <S.LogoImage src="./images/done-logo-icon.svg" />
      </S.ImageContainer>
      <S.Subtitle>About our logo</S.Subtitle>
      <S.Bodytext style={{ display: "inline-block" }}>
        <S.LogoCatchPhrase
          style={{
            display: "inline-block",
            transform: "scale(1.2)",
            transformOrigin: "left",
          }}
        >
          Soon to be
          <S.DoneTM />
        </S.LogoCatchPhrase>
      </S.Bodytext>
    </div>
  );
}
