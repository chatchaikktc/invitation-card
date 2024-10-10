import { changeLanguage } from "i18next";
import React from "react";
import { useMatch, Routes, Route , useLocation} from "react-router-dom";
import HomePage from "./components/homePage/HomePage";


function AppContent() {
  const match = useMatch("/:lang/*");
  const [currentLanguage, setCurrentLanguage] = React.useState("th");
  const location = useLocation();

  React.useEffect(() => {
      console.log("Match params:", match);
      console.log("Current Location:", location.pathname);

      if (match) {
          const { lang } = match.params;
          if (lang === "en") {
              changeLanguage("en");
              document.documentElement.lang = "en";
              setCurrentLanguage("en");
          } else {
              changeLanguage("th");
              document.documentElement.lang = "th";
              setCurrentLanguage("th");
          }
      } else {
          changeLanguage("th");
          document.documentElement.lang = "th";
          setCurrentLanguage("th");
      }
  }, [match, location]);
  console.log("Current Language:", currentLanguage);

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:cardname" element={<HomePage />} />
        <Route path="/en/:cardname" element={<HomePage />} />
        <Route path="*" element={<HomePage />} /> {/* จัดการเส้นทางที่ไม่ตรงกับที่กำหนด */}
      </Routes>
    </div>
  );
}

function App() {
  return <AppContent />;
}

export default App;
