import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { SectionProvider } from "@/context/SectionContext";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import CheckTotop from "@/components/ui/checkTotop/CheckTotop";
import HeadSection from '@/components/headSection/HeadSection';
import PrivillegeSection from '@/components/privilegeSection/PrivilegeSection';
import SpecialPrivillegeSection from '@/components/specialPrivilegeSection/SpecialPrivilegeSection';

import '@/index.css'
import BenefitSection from '@/components/benefitSection/BenefitSection';

function HomePage() {
    const { cardname } = useParams();
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

    return (
        <SectionProvider>
            {import.meta.env.MODE !== "production" && <Header />}
            <main className="tw-min-h-screen">
                <HeadSection selectedCard={selectedCard} />
                <PrivillegeSection selectedCard={selectedCard} />
                <SpecialPrivillegeSection selectedCard={selectedCard} />
                <BenefitSection selectedCard={selectedCard} />
                <CheckTotop />
            </main>
            {import.meta.env.MODE !== "production" && <Footer />}
        </SectionProvider>
    );
}

export default HomePage;