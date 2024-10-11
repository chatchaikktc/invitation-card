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
        <section className='hero-banner tw-w-full tw-relative tw-bg-cover tw-bg-center xl:tw-h-[280px] lg:tw-h-[580px] ' style={{ backgroundImage: `url(${card.headSectionImage})` }} id="HeadSection">
            <BreadcrumbSection cardName={htmlStripper(card.cardName)} />
            <Container>
                <div className='tw-grid lg:tw-grid-cols-2 tw-grid-cols-1 tw-gap-10 tw-pt-5 lg:tw-px-20 tw-px-5 tw-items-center'>
                    <h1 className='lg:tw-text-end tw-text-center lg:tw-text-[35px] tw-text-[30px] tw-font-bold lg:tw-order-1 tw-order-2'>{parse(card.cardName)}</h1>
                    <Image src={card.cardImage} alt={card.cardName} className='tw-w-[445px] lg:tw-order-2 tw-order-1 lg:tw-mx-0 tw-mx-auto' />
                </div>
            </Container>
        </section>
    )
}

export default HeadSection