import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 900;
`;
export const Subtitle = styled.h2`
  font-size: 23px;
  font-weight: 600;
  padding: 2rem 0;
`;

export const Bodytext = styled.p`
  font-size: 15px;
  padding-bottom: 2rem;
  font-weight: 300;
`;

export const SubSubtitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
`;

export default function BrandDNA() {
  return (
    <div>
      <Helmet>
        <title>Done.ai | Brand DNA</title>
      </Helmet>
      <Title>Our Brand</Title>
      <Subtitle>Brand Positioning</Subtitle>
      <Bodytext>
        Done.ai delivers AI-native solutions designed to automate, optimize, and
        elevate business operations. We are committed to providing powerful,
        intuitive tools that make smart decision-making effortless and
        future-proof, empowering businesses of all sizes to thrive.
      </Bodytext>

      <Subtitle>Vision</Subtitle>
      <Bodytext>
        To be the leading force in redefining enterprise resource planning
        through AI, creating a world where businesses of all sizes operate
        intelligently, efficiently, and sustainably.
      </Bodytext>

      <Subtitle>Mission</Subtitle>
      <Bodytext>
        Done.ai empowers businesses with AI-native solutions that automate
        workflows, optimize operations, and elevate decision-making, ensuring
        companies move smarter, faster, and with confidence into the future.
      </Bodytext>

      <Subtitle>Brand Promise</Subtitle>
      <Bodytext>
        At Done.ai, we promise to deliver innovative, reliable, and user-centric
        AI solutions that drive tangible results. Our focus is to make
        intelligent business operations accessible, seamless, and future-ready
        for every client.
      </Bodytext>

      <Subtitle>Our Core Values</Subtitle>

      <SubSubtitle>Innovation First</SubSubtitle>
      <Bodytext>
        We constantly push boundaries with AI technologies to deliver smarter,
        more powerful solutions that redefine what businesses can achieve.
      </Bodytext>

      <SubSubtitle>Reliability</SubSubtitle>
      <Bodytext>
        Our clients can depend on us to provide secure, consistent, and powerful
        tools they can trust to run and grow their operations.
      </Bodytext>

      <SubSubtitle>Customer-Centricity</SubSubtitle>
      <Bodytext>
        Everything we build is centered around real customer needs — solving
        today's challenges while anticipating tomorrow's opportunities.
      </Bodytext>

      <SubSubtitle>Agility</SubSubtitle>
      <Bodytext>
        We move fast and adapt faster, staying ahead of the evolving digital
        landscape to deliver cutting-edge solutions when our clients need them
        most.
      </Bodytext>

      <SubSubtitle>Transparency</SubSubtitle>
      <Bodytext>
        We believe in clear communication, open processes, and honest
        relationships with our clients, investors, and partners.
      </Bodytext>

      <SubSubtitle>Sustainability</SubSubtitle>
      <Bodytext>
        Through automation and smart resource management, we help businesses
        reduce waste, improve efficiency, and contribute to a more sustainable
        future.
      </Bodytext>
    </div>
  );
}
