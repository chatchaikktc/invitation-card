import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { SectionProvider } from "@/context/SectionContext";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import CheckTotop from "@/components/ui/checkTotop/CheckTotop";
import HeadSection from '@/components/headSection/HeadSection';
import PrivillegeSection from '@/components/privilegeSection/PrivilegeSection';
import SpecialPrivillegeSection from '@/components/specialPrivilegeSection/SpecialPrivilegeSection';
import BenefitSection from '@/components/benefitSection/BenefitSection';

import '@/index.css'

//load data
import CardData from '@/data/CreditCardData.json';
import QualificationsSection from '@/components/qualificationsSection/QualificationsSection';

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

    console.log(cardData);


    const findCard = CardData.filter((card) => card.cardLink === selectedCard && card.isActive === true);

    const card = findCard.length > 0 ? findCard[0] : null;

    if (!card) {
        return <div>Card not found</div>;
    }

    return (
        <SectionProvider>
            {import.meta.env.MODE !== "production" && <Header />}
            <main className="tw-min-h-screen">
                <HeadSection selectedCard={selectedCard} />
                <PrivillegeSection selectedCard={selectedCard} />
                <SpecialPrivillegeSection selectedCard={selectedCard} />
                <BenefitSection selectedCard={selectedCard} />
                {
                    card.cardType === 'KTBWHEALTH' &&(<QualificationsSection selectedCard={selectedCard}/>)
                }
                <CheckTotop />
            </main>
            {import.meta.env.MODE !== "production" && <Footer />}
        </SectionProvider>
    );
}

export default HomePage;