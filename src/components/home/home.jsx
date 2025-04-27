import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

const Title = styled.h1`
  font-size: 30px;
  font-weight: 400;
  padding-bottom: 2rem;
`;

export const Bodytext = styled.p`
  font-size: 15px;
  padding-bottom: 2rem;
  font-weight: 300;
`;

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Done.ai | Brand Guidelines</title>
      </Helmet>
      <Title>Welcome to our Brand Guidelines</Title>
      <Bodytext>
        Our guidelines are an instruction manual explaining how we present
        ourselves to the world as an organisation and brand. It's our rule book
        on communicating consistently across all channels. Our brand guidelines
        define visual, verbal, and written communication frameworks and set the
        foundation for our brand to grow and thrive.
      </Bodytext>
    </div>
  );
}
