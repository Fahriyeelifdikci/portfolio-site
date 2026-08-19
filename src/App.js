import "./App.css";

import Menu from "./components/Menu";
import AnaMenu from "./components/AnaMenu";
import Hakkimda from "./components/Hakkimda";
import Yetenekler from "./components/Yetenekler";
import Projeler from "./components/Projeler";
import Iletisim from "./components/Iletisim";

function App() {
  return (
    <div>
      <Menu />
      <AnaMenu />
      <Hakkimda />
      <Yetenekler />
      <Projeler />
      <Iletisim />
    </div>
  );
}

export default App;
