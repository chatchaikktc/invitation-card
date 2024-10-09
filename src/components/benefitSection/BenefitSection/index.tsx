import Container from "@/components/ui/Container"
import BenefitDesktop from "../BenefitDesktop"

//load data
import CardData from '@/data/CreditCardData.json';

interface PrivillegeSectionProps {
    selectedCard : string;
}


function BenefitSection ({selectedCard} : PrivillegeSectionProps) {

    const findCard = CardData.filter((card) => card.cardLink === selectedCard && card.isActive === true);

    const card = findCard.length > 0 ? findCard[0] : null;

    if (!card) {
        return <div>Card not found</div>;
    }

  return (
    <section id="BenefitSection" className="tw-py-[40px] tw-bg-cover tw-bg-bottom" style={{ backgroundImage: `url(${card.footerSectionImage})` }}>
        <Container className="tw-relative">
            <div className="lg:tw-px-20 tw-px-5">
                <BenefitDesktop selectedCard={selectedCard}/>
            </div>
        </Container>
    </section>
  )
}

export default BenefitSection