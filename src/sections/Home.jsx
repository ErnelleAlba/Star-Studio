import styled from "styled-components";
import CoverVideo from "../components/CoverVideo";
import Logo from "../components/Logo";

const Section = styled.section`
  position: relative;
  min-height: 200dvh;
  overflow: hidden;
`;

function Home() {
  return (
    <>
      <Section>
        <CoverVideo />
        <Logo />
      </Section>
    </>
  );
}

export default Home;
