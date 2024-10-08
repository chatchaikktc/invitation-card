import { changeLanguage } from "i18next";
import React from "react";
import { useMatch, Routes, Route } from "react-router-dom";
import HomePage from "./components/homePage/HomePage";

function AppContent() {
  const match = useMatch("/:lang/*"); // จับคู่พารามิเตอร์ภาษาและเส้นทางที่เหลือ

  React.useEffect(() => {
    if (match) {
      const { lang } = match.params;
      if (lang === "en") {
        changeLanguage("en");
        document.documentElement.lang = "en";
      } else {
        changeLanguage("th");
        document.documentElement.lang = "th";
      }
    } else {
      // กำหนดค่าเริ่มต้นเป็นภาษาไทยถ้าไม่มีพารามิเตอร์ภาษา
      changeLanguage("th");
      document.documentElement.lang = "th";
    }
  }, [match]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:cardname" element={<HomePage />} />
      <Route path="/en/:cardname" element={<HomePage />} />
      <Route path="*" element={<HomePage />} /> {/* จัดการเส้นทางที่ไม่ตรงกับที่กำหนด */}
    </Routes>
  );
}

function App() {
  return <AppContent />;
}

export default App;
