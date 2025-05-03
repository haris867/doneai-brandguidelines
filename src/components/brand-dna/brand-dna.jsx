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
        Done.ai is an AI-native platform built to embed intelligence into the
        heart of modern business. We empower companies of all sizes to automate
        workflows, optimize operations, and make smarter decisions in real time.
        With seamlessly integrated AI-powered solutions, they don't have to
        think twice about what's running, or how. It's just handled. It's
        intelligent.
        <S.LogoCatchPhrase>
          It's
          <S.DoneTM />
        </S.LogoCatchPhrase>
      </S.Bodytext>

      <S.Subtitle>Vision</S.Subtitle>
      <S.Bodytext>
        Our vision is a world where business just works. Smarter. Faster.
        Effortless. We help companies of all sizes move with clarity, precision,
        and purpose. When operations run themselves, businesses can focus on
        what truly matters.
      </S.Bodytext>

      <S.Subtitle>Mission</S.Subtitle>
      <S.Bodytext>
        Our mission is to take the friction out of business operations. By
        embedding intelligence directly into the systems companies use every
        day, we empower them to move faster, think clearer and act with
        confidence, so they can spend less time managing and more time growing.
      </S.Bodytext>

      <S.Subtitle>Brand Promise</S.Subtitle>
      <S.Bodytext>
        We promise our customers more than software. We deliver clarity, speed,
        and control. With intelligence built into every layer, Done.ai makes
        business feel simpler, sharper, and smarter from day one. No complexity.
        No chaos. Everything they need is seamlessly integrated, AI-powered, and
        already handled.
        <S.LogoCatchPhrase>
          It's
          <S.DoneTM />
        </S.LogoCatchPhrase>
      </S.Bodytext>

      <S.Subtitle>Our Core Values</S.Subtitle>

      <S.FlexContainer>
        <div>
          <S.SubSubtitle>
            We <u>Empower</u>
          </S.SubSubtitle>
          <S.Bodytext>
            We don't just provide software. We <b>empower</b> people. Our tools
            give companies clarity, control, and confidence to grow on their
            terms.
          </S.Bodytext>
        </div>

        <div>
          <S.SubSubtitle>
            We Build for <u>Thinking</u>
          </S.SubSubtitle>
          <S.Bodytext>
            Our platform isn't just fast, it's smart. <b>Intelligence</b> is
            built into every layer, helping our customers make better decisions
            without the complexity.
          </S.Bodytext>
        </div>

        <div>
          <S.SubSubtitle>
            We Prioritize <u>Clarity</u>
          </S.SubSubtitle>
          <S.Bodytext>
            We provide <b>clarity</b> by removing friction, noise, and bloated
            systems. Our job is to make the complex feel simple, and help
            businesses move with purpose.
          </S.Bodytext>
        </div>

        <div>
          <S.SubSubtitle>
            We Move with <u>Purpose</u>
          </S.SubSubtitle>
          <S.Bodytext>
            We build <b>intentionally</b>, adapt quickly, and act decisively,
            because speed only matters when it leads to meaningful impact. Every
            product we ship and every feature we refine is guided by what helps
            our customers move forward.
          </S.Bodytext>
        </div>

        <div>
          <S.SubSubtitle>
            We Earn <u>Trust</u>
          </S.SubSubtitle>
          <S.Bodytext>
            Every line of code, every product decision, every relationship—we
            approach it with <b>integrity</b>. We deliver what we promise.
            Always.
          </S.Bodytext>
        </div>

        <div>
          <S.SubSubtitle>
            We Scale <u>Sustainably</u>
          </S.SubSubtitle>
          <S.Bodytext>
            Efficiency isn't just good business. It's good stewardship. Smarter
            workflows mean less waste, more focus, and long-term{" "}
            <b>sustainability</b>.
          </S.Bodytext>
        </div>
      </S.FlexContainer>
    </div>
  );
}
