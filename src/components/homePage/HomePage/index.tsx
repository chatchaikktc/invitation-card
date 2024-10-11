import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
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
    console.log("cardData : "+cardname);
    const selectedCard = location.pathname.split('/').pop() || '';
    

    const findCard = CardData.filter((card) => card.cardLink === selectedCard && card.isActive === true);

    const card = findCard.length > 0 ? findCard[0] : null;

    console.log("length : "+findCard.length);
    if (!card) {
        return <div>Card not found</div>;
    }

    return (
        <SectionProvider>
            {import.meta.env.MODE !== "production" && <Header />}
            <main className="tw-min-h-screen">
                <HeadSection selectedCard={selectedCard as string} />
                <PrivillegeSection selectedCard={selectedCard as string} />
                <SpecialPrivillegeSection selectedCard={selectedCard as string} />
                <BenefitSection selectedCard={selectedCard as string} />
                {
                    card.cardType === 'KTBWHEALTH' &&(<QualificationsSection selectedCard={selectedCard as string}/>)
                }
                <CheckTotop />
            </main>
            {import.meta.env.MODE !== "production" && <Footer />}
        </SectionProvider>
    );
}

export default HomePage;