import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="소개" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>소개</h2>
            <div className="underline"></div>
          </div>
          <p>
            50년 역사의 전통을 자랑하는 골목의 작은 가구점에서 시작하였습니다.
            대량생산을 추구하는 것이 아닌 맞춤제작을 통해 고객의 만족을 우선시 하겠습니다.
            전세계에서 유일한 자신만의 가구를 받아 볼 수 있습니다.
            제작기간 단축을 위해 가구 장인을 모집중 입니다.
            더욱더 고품질의 제품을 만들도록 노력하겠습니다.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
