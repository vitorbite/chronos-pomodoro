import { TimerIcon } from "lucide-react";
import { Heading } from "./components/Heading";

import './styles/global.css';
import './styles/theme.css';

export function App() {

  return (
    <>
      <Heading>
        Olá Mundo 1
        <button>
          <TimerIcon/>
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        voluptatum fugiat adipisci, ab blanditiis ut illo aut iste quis est
        dolores amet ea sapiente veritatis. Debitis suscipit laborum molestiae
        ducimus.
      </p>
    </>
  );
}

//export default App;
//export { App };