import { changeLanguage } from "i18next";
import React from "react";
import { useParams, Routes, Route } from "react-router-dom";
import HomePage from "./components/homePage/HomePage";

function AppContent() {
  const { lang } = useParams(); // ใช้ useParams เพื่อดึง lang โดยตรง

  React.useEffect(() => {
    if (lang === "en") {
      changeLanguage("en");
      document.documentElement.lang = "en";
    } else {
      changeLanguage("th");
      document.documentElement.lang = "th";
    }
  }, [lang]);

  console.log(lang);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:cardname" element={<HomePage />} />
      <Route path="/:lang/:cardname?" element={<HomePage />} />
      <Route path="*" element={<HomePage />} /> {/* จัดการเส้นทางที่ไม่ตรงกับที่กำหนด */}
    </Routes>
  );
}

export default AppContent;
