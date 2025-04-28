import React from "react";
import { Helmet } from "react-helmet-async";
import * as S from "../commonStyles/index.js";

export default function BrandDNA() {
  return (
    <div>
      <Helmet>
        <title>Brand DNA | Done.ai</title>
      </Helmet>
      <S.Title>Our Brand</S.Title>
      <S.Subtitle>Brand Positioning</S.Subtitle>
      <S.Bodytext>
        Done.ai delivers AI-native solutions designed to automate, optimize, and
        elevate business operations. We are committed to providing powerful,
        intuitive tools that make smart decision-making effortless and
        future-proof, empowering businesses of all sizes to thrive.
      </S.Bodytext>

      <S.Subtitle>Vision</S.Subtitle>
      <S.Bodytext>
        To be the leading force in redefining enterprise resource planning
        through AI, creating a world where businesses of all sizes operate
        intelligently, efficiently, and sustainably.
      </S.Bodytext>

      <S.Subtitle>Mission</S.Subtitle>
      <S.Bodytext>
        Done.ai empowers businesses with AI-native solutions that automate
        workflows, optimize operations, and elevate decision-making, ensuring
        companies move smarter, faster, and with confidence into the future.
      </S.Bodytext>

      <S.Subtitle>Brand Promise</S.Subtitle>
      <S.Bodytext>
        At Done.ai, we promise to deliver innovative, reliable, and user-centric
        AI solutions that drive tangible results. Our focus is to make
        intelligent business operations accessible, seamless, and future-ready
        for every client.
      </S.Bodytext>

      <S.Subtitle>Our Core Values</S.Subtitle>

      <S.SubSubtitle>Innovation First</S.SubSubtitle>
      <S.Bodytext>
        We constantly push boundaries with AI technologies to deliver smarter,
        more powerful solutions that redefine what businesses can achieve.
      </S.Bodytext>

      <S.SubSubtitle>Reliability</S.SubSubtitle>
      <S.Bodytext>
        Our clients can depend on us to provide secure, consistent, and powerful
        tools they can trust to run and grow their operations.
      </S.Bodytext>

      <S.SubSubtitle>Customer-Centricity</S.SubSubtitle>
      <S.Bodytext>
        Everything we build is centered around real customer needs — solving
        today's challenges while anticipating tomorrow's opportunities.
      </S.Bodytext>

      <S.SubSubtitle>Agility</S.SubSubtitle>
      <S.Bodytext>
        We move fast and adapt faster, staying ahead of the evolving digital
        landscape to deliver cutting-edge solutions when our clients need them
        most.
      </S.Bodytext>

      <S.SubSubtitle>Transparency</S.SubSubtitle>
      <S.Bodytext>
        We believe in clear communication, open processes, and honest
        relationships with our clients, investors, and partners.
      </S.Bodytext>

      <S.SubSubtitle>Sustainability</S.SubSubtitle>
      <S.Bodytext>
        Through automation and smart resource management, we help businesses
        reduce waste, improve efficiency, and contribute to a more sustainable
        future.
      </S.Bodytext>
    </div>
  );
}
