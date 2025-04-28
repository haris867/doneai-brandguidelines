import React from "react";
import { Helmet } from "react-helmet-async";
import * as S from "../commonStyles/index.js";
import styled from "styled-components";

const Title = styled(S.Title)`
  padding-bottom: 2rem;
`;

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Brand Guidelines | Done.ai</title>
      </Helmet>
      <Title>Welcome to our Brand Guidelines</Title>
      <S.Bodytext>
        Our guidelines are an instruction manual explaining how we present
        ourselves to the world as an organisation and brand. It's our rule book
        on communicating consistently across all channels. Our brand guidelines
        define visual, verbal, and written communication frameworks and set the
        foundation for our brand to grow and thrive.
      </S.Bodytext>
    </div>
  );
}
