import styled from "styled-components";

const Section = styled.section`
  min-height: 100dvh;
  width: 80dvw;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  @media (max-width: 768px) {
    width: 90dvw;
  }
`;

const Container = styled.div`
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const BannerComponent = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  color: ${(props) => props.theme.text};
  white-space: nowrap;
  text-transform: uppercase;
  line-height: 1;

  span {
    display: block;
    background-color: ${(props) => props.theme.body};
    padding: 1rem 2rem;
  }
  @media (max-width: 1120px) {
    font-size: ${(props) => props.theme.fontxxl};
  }

  @media (max-width: 1024px) {
    margin: 1rem 0;
  }

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontlg};
    margin: 0.5rem 0;
  }

  @media (max-width: 480px) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;

function Banner() {
  return (
    <Section>
      <Container id="up">
        <BannerComponent>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="8"
            data-scroll-target="#up"
          >
            Fashion is the armour
          </span>
        </BannerComponent>
        <BannerComponent>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-6"
            data-scroll-target="#up"
          >
            to survive everyday life
          </span>
        </BannerComponent>
        <BannerComponent>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            data-scroll-target="#up"
          >
            One is never over-dressed or
          </span>
        </BannerComponent>
        <BannerComponent>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-4"
            data-scroll-target="#up"
          >
            under-dressed
          </span>
        </BannerComponent>
        <BannerComponent>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            data-scroll-target="#up"
          >
            with a Little Black Dress
          </span>
        </BannerComponent>
      </Container>
    </Section>
  );
}

export default Banner;
