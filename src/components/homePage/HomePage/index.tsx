import { useParams } from 'react-router-dom';
import { changeLanguage } from "i18next";
import { useEffect, useState } from 'react';
import { SectionProvider } from "@/context/SectionContext";
import SecondaryMenuSection from "@/components/secondaryMenuSection/SecondaryMenuSection";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import CheckTotop from "@/components/ui/checkTotop/CheckTotop";
import HeadSection from '@/components/headSection/HeadSection';
import PrivillegeSection from '@/components/privilegeSection/PrivilegeSection';

import '@/index.css'



function HomePage() {
    const { lang, cardname } = useParams();

    // ถ้าไม่มีค่า cardname ให้กำหนด selectedCard เป็น 'ktc-digital-platinum-mastercard'
    const selectedCard = cardname || 'ktc-digital-platinum-mastercard';

    const [cardData, setCardData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`/api/cards/${selectedCard}`);
            const data = await response.json();
            setCardData(data);
        }
        fetchData();
    }, [selectedCard]);

    useEffect(() => {
        if (lang === "en") {
            changeLanguage("en");
            document.documentElement.lang = "en";
        } else {
            changeLanguage("th");
            document.documentElement.lang = "th";
        }
    }, [lang]);
    console.log(cardData);
    return (
        <SectionProvider>
            {import.meta.env.MODE !== "production" && <Header />}
            <main className="tw-min-h-screen">
                <HeadSection selectedCard={selectedCard} />
                <PrivillegeSection selectedCard={selectedCard} />
                <CheckTotop />
            </main>
            {import.meta.env.MODE !== "production" && <Footer />}
        </SectionProvider>
    );
}

export default HomePage;
