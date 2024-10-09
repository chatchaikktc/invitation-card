//load Component and Module
import parse from "html-react-parser";
import { translateContent as tc } from "@/lib/i18n";
import { twMerge } from "@/lib/twMerge";
import {htmlStripper} from "@/components/ui/HtmlStripper";
//load data
import CardData from '@/data/CreditCardData.json';
import PrivilegeData from '@/data/PrivilegeData.json';
import Container from "@/components/ui/Container";

interface PrivillegeSectionProps {
    selectedCard : string;
}

function PrivillegeSection({selectedCard} : PrivillegeSectionProps) {
    const findCard = CardData.filter((card) => card.cardLink === selectedCard && card.isActive === true);

    const card = findCard.length > 0 ? findCard[0] : null;

    if (!card) {
        return <div>Card not found</div>;
    }
  return (
    <section id="PrivilegeSection" className="tw-mt-[60px] tw-py-[40px]">
        <Container>
        {findCard.map((card) => (
            <div className="lg:tw-px-20 tw-px-5">
                <PrivillegeItem items={card.privilegeitems} />
            </div>
        ))}
        </Container>
    </section>
  );
}

export default PrivillegeSection;

interface PrivillegeItemProps {
    items : string[];
}

function PrivillegeItem({items} : PrivillegeItemProps) {
    return (
        <div>
            {items.map((item) => (  
                <div className="tw-grid tw-grid-cols-2 tw-gap-10 tw-items-center tw-mt-3">
                    <PrivilegeDetail id={item}/>
                </div>
            ))}
        </div>
    );
}

interface PrivilegeDetailProps {
    id : string;
}

function PrivilegeDetail({id} : PrivilegeDetailProps) {
    const findPrivilege = PrivilegeData.filter((privilege) => privilege.privilegeName === id);

    const privilege = findPrivilege.length > 0 ? findPrivilege[0] : null;

    if (!privilege) {
        return <div>privilege not found</div>;
    }

    return (
        <>
            <div className={twMerge(privilege.positionImage === 'left' ? 'tw-order-1' : 'tw-order-2')}>
                <img src={privilege.imgaePath} alt={htmlStripper(privilege.privilegeName)} />
            </div>
            <div className={twMerge(privilege.positionImage === 'left' ? 'tw-order-2' : 'tw-order-1')}>
                <h2 className="tw-text-[35px] tw-font-bold tw-mb-3">{parse(tc(privilege.title))}</h2>
                <div className="tw-text-[18px]"><DetailsItems item={tc(privilege.description)} /></div>
                <button className="tw-mt-5 tw-py-[8px] tw-px-4 tw-border-[1px] tw-border-solid tw-border-white tw-text-white hover:tw-text-black hover:tw-bg-white tw-rounded-[100px]">{parse(tc(privilege.buttonText))}</button>
            </div>
        </>
    );
}

interface DetailsItemsProps {
    item : string[];
}

function DetailsItems({item} : DetailsItemsProps) {
    return(
        <>
        {item.map((item) => (
            <p>{item}</p>
        ))}
        </>
    )
}