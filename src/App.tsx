import { Container } from './components/Container'
import { Heading } from "./components/Heading";
import { Logo } from './components/Logo';

import "./styles/global.css";
import "./styles/theme.css";


export function App() {
  return (
    <>
      <Container>
          <Logo/>
      </Container>

      <Container>
        <section><Heading>MENU</Heading></section>
      </Container>
    </>
  );
}

//export default App;
//export { App };
