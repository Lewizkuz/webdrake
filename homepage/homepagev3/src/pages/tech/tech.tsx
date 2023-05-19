import { Container, Footer, Graph, Header, NavBar } from "../../Components";
import { About } from "./about";
import { Examples } from "./example";
import { Intro } from "./intro";

export const TechPage = () => {
  return (
    <Container>
      <button
        onClick={() => {
          setPage(() => true);
        }}
      >
        back to landing
      </button>
      <Header
        title="Leevi Kukkonen"
        subhead="Webdrake"
      />
      <NavBar tabheads={["About", "Introduction", "Examples"]} startindex={1}>
        <About />
        <Intro />
        <Examples />
      </NavBar>
      <Footer />
      <Graph />
    </Container>
  );
};
