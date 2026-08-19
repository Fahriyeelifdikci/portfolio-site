import "./App.css";

import Menu from "./components/Menu";
import AnaMenu from "./components/AnaMenu";
import Hakkimda from "./components/Hakkimda";
import Yetenekler from "./components/Yetenekler";
import Projeler from "./components/Projeler";
import Iletisim from "./components/Iletisim";
import Deneyimler from "./components/Deneyimler";

import { LanguageProvider } from "./i18n/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <Menu />
        <AnaMenu />
        <Hakkimda />
        <Deneyimler />
        <Yetenekler />
        <Projeler />
        <Iletisim />
      </div>
    </LanguageProvider>
  );
}

export default App;