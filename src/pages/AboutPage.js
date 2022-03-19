import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Eiusmod veniam elit nostrud cillum quis laboris ad est Lorem. Aute
            cupidatat ad incididunt et nostrud irure. Elit do non ex nostrud
            dolor laborum sit velit ad. Excepteur pariatur non dolor magna
            eiusmod nulla. Id proident pariatur qui aliquip ad mollit sint sit
            eiusmod reprehenderit. Eiusmod est in eiusmod culpa magna tempor in
            sit sint elit esse. Id et incididunt aliquip consequat elit
            exercitation. Officia culpa eu ea qui mollit est nulla elit eiusmod
            qui excepteur. Adipisicing officia nisi id officia deserunt aliquip
            velit exercitation officia sit pariatur. Consequat veniam incididunt
            sit minim pariatur non dolore irure. Enim aute sunt esse est et
            ullamco et labore cupidatat consectetur nisi.
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
