//load Coponent and Module
import {htmlStripper} from "@/components/ui/HtmlStripper";
import parse from "html-react-parser";


//load data
import CardData from '@/data/CreditCardData.json';
import Image from '@/components/ui/Image';
import Container from '@/components/ui/Container';
import BreadcrumbSection from '@/components/headSection/breadcrumbSection/BreadcrumbSection';


//load style
import '../styles.css';

interface HeadSectionProps {
    selectedCard: string;
}



function HeadSection({ selectedCard }: HeadSectionProps) {

    const findCard = CardData.filter((card) => card.cardLink === selectedCard);

    const card = findCard[0];

    if (!card) {
        return <div>Card not found</div>;
    }


    return (
        <section className='hero-banner tw-w-full tw-relative tw-bg-cover tw-bg-center tw-h-[280px]' style={{ backgroundImage: `url(${card.headSectionImage})` }} id="HeadSection">
            <BreadcrumbSection cardName={htmlStripper(card.cardName)} />
            <Container>
                <div className='tw-grid tw-grid-cols-2 tw-gap-10 tw-pt-5 tw-px-20 tw-items-center'>
                    <h1 className='tw-text-end tw-text-[35px] tw-font-bold'>{parse(card.cardName)}</h1>
                    <Image src={card.cardImage} alt={card.cardName} className='tw-w-[445px]' />
                </div>
            </Container>
        </section>
    )
}

export default HeadSection