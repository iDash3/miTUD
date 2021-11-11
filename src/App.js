import "./App.css";

import AnchorBlock from "./components/AnchorBlock";
import { MdMail } from "react-icons/md";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <AnchorBlock
            href="https://msx.tu-dresden.de/"
            iconComponent={<MdMail size={40} color="#f8f8f8" />}
            title="Email"
          />
          <AnchorBlock
            href="https://bildungsportal.sachsen.de/opal/"
            title="Opal"
          />
        </div>
      </header>
    </div>
  );
}

export default App;
