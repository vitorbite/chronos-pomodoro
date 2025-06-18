//import { TimerIcon } from "lucide-react";
import { Heading } from "./components/Heading";

import "./styles/global.css";
import "./styles/theme.css";

export function App() {
  return (
    <>
      <div className="container">
        <div className="content">
          <section><Heading>LOGO</Heading></section>
        </div>
      </div>

      <div className="container">
        <div className="content">
          <section>MENU</section>
        </div>
      </div>

      <div className="container">
        <div className="content">
          <section>FORM</section>
        </div>
      </div>

      <div className="container">
        <div className="content">
          <section>FOOTER</section>
        </div>
      </div>
    </>
  );
}

//export default App;
//export { App };
