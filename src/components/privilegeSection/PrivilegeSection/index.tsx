//load Component and Module
import parse from "html-react-parser";
import { translateContent as tc } from "@/lib/i18n";
import { twMerge } from "@/lib/twMerge";
import { htmlStripper } from "@/components/ui/HtmlStripper";
import Container from "@/components/ui/Container";
import ButtonDialog from "@/components/termsAndConditions/TermsAndConditions";
import Link from "@/components/ui/Link";

//load data
import CardData from '@/data/CreditCardData.json';
import PrivilegeData from '@/data/PrivilegeData.json';

interface PrivillegeSectionProps {
    selectedCard: string;
}

function PrivillegeSection({ selectedCard }: PrivillegeSectionProps) {
    const findCard = CardData.filter((card) => card.cardLink === selectedCard && card.isActive === true);

    const card = findCard.length > 0 ? findCard[0] : null;

    if (!card) {
        return <div>Card not found</div>;
    }
    return (
        <section id="PrivilegeSection" className="lg:tw-mt-[60px] tw-mt-[0px] tw-py-[40px]">
            <Container>
                {findCard.map((card,index) => (
                    <div className="lg:tw-px-20 tw-px-5" key={index}>
                        <PrivillegeItem items={card.privilegeitems} key={index}/>
                    </div>
                ))}
            </Container>
        </section>
    );
}

export default PrivillegeSection;

interface PrivillegeItemProps {
    items: string[];
}

function PrivillegeItem({ items }: PrivillegeItemProps) {
    return (
        <div>
            {items.map((item,index) => (
                <div className="tw-grid md:tw-grid-cols-2 tw-grid-cols-1 tw-gap-10 tw-items-center tw-mt-10 first:tw-mt-0" key={index}>
                    <PrivilegeDetail id={item} key={index}/>
                </div>
            ))}
        </div>
    );
}

interface PrivilegeDetailProps {
    id: string;
}

function PrivilegeDetail({ id }: PrivilegeDetailProps) {
    const findPrivilege = PrivilegeData.filter((privilege) => privilege.privilegeName === id);

    const privilege = findPrivilege.length > 0 ? findPrivilege[0] : null;

    if (!privilege) {
        return null;
    }

    return (
        <>
            <div className={twMerge(privilege.positionImage === 'left' ? 'tw-order-1' : 'md:tw-order-2 tw-order-1')}>
                <img src={privilege.imgaePath} alt={htmlStripper(privilege.privilegeName)} />
            </div>
            <div className={twMerge(privilege.positionImage === 'left' ? 'md:tw-order-2 tw-order-1' : 'tw-order-1')}>
                <h2 className="lg:tw-text-[35px] tw-text-[25px] md:tw-text-start tw-text-center tw-font-bold tw-mb-3 tw-leading-[1.4]">{parse(tc(privilege.title))}</h2>
                <div className="lg:tw-text-[18px] md:tw-text-[16px] tw-text-[18px] md:tw-text-start tw-text-center"><DetailsItems item={tc(privilege.description)} /></div>
                {
                    privilege.buttonType === "" ? null :
                        privilege.buttonType === "DIALOG" ?
                            (<ButtonDialog DialogID={tc(privilege.buttonLink)} className="tw-mt-5 tw-py-[4px] tw-px-4 tw-border-[1px] tw-border-solid tw-border-white tw-text-white hover:tw-text-black hover:tw-bg-white tw-rounded-[100px] tw-transition tw-ease-in tw-delay-150 duration-150 tw-block tw-w-fit md:tw-mx-0 tw-mx-auto">{tc(privilege.buttonText)}</ButtonDialog>)
                            :
                            privilege.buttonType === "LINK" ?
                                (<Link href={tc(privilege.buttonLink)} className="tw-mt-5 tw-py-[4px] tw-px-4 tw-border-[1px] tw-border-solid tw-border-white tw-text-white hover:tw-text-black hover:tw-bg-white tw-rounded-[100px] tw-transition tw-ease-in tw-delay-150 duration-150 tw-block tw-w-fit md:tw-mx-0 tw-mx-auto">{tc(privilege.buttonText)}</Link>)
                                : null
                }
            </div>
        </>
    );
}

interface DetailsItemsProps {
    item: string[];
}

function DetailsItems({ item }: DetailsItemsProps) {
    return (
        <>
            {item.map((item,index) => (
                <p key={index}>{item}</p>
            ))}
        </>
    )
}