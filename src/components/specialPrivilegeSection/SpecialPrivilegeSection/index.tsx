//load Component and Module
import parse from "html-react-parser";
import { translateContent as tc } from "@/lib/i18n";
import { twMerge } from "@/lib/twMerge";

//load data
import CardData from '@/data/CreditCardData.json';
import PrivilegeData from '@/data/PrivilegeData.json';
import Container from "@/components/ui/Container";
import Image from "@/components/ui/Image";

interface PrivillegeSectionProps {
    selectedCard: string;
}

function SpecialPrivillegeSection({ selectedCard }: PrivillegeSectionProps) {
    const findCard = CardData.filter((card) => card.cardLink === selectedCard && card.isActive === true);

    const card = findCard.length > 0 ? findCard[0] : null;

    if (!card) {
        return <div>Card not found</div>;
    }
    return (
        <section id="PrivilegeSection" className="tw-py-[40px]">
            <Container className="">
                <div className="lg:tw-mx-20 tw-mx-5 tw-relative">
                    <div className="tw-absolute tw-top-0 tw-bottom-[-20px] tw-right-0 tw-left-0 tw-flex tw-items-end tw-justify-center">
                        <div>
                            <h2 className="tw-font-bold tw-text-[#D0B185] tw-text-center tw-text-[45px] tw-leading-[1.4]">{parse(tc(card.specialPrivilege.title))}</h2>
                            <div className="tw-bg-[#D0B185] tw-h-[3px] tw-w-[100px] tw-mt-[20px] tw-mb-[10px] tw-mx-auto"></div>
                            <p className="tw-text-[18px] tw-text-center">{parse(tc(card.specialPrivilege.subTitle))}</p>
                        </div>
                    </div>
                    <div><Image src={card.specialPrivilege.backgroundImage} /></div>
                </div>
                <div className="lg:tw-px-20 tw-px-5 tw-mt-20">
                    <PrivillegeItem items={card.specialPrivilege.specialPrivilegeItems} />
                </div>
            </Container>
        </section>
    );
}

export default SpecialPrivillegeSection;

interface PrivillegeItemProps {
    items: string[];
}

function PrivillegeItem({ items }: PrivillegeItemProps) {
    return (
        <div>
            {items.map((item) => (
                <div className="tw-mt-3 tw-border-solid tw-border-[1px] tw-border-[#D0B185] tw-rounded-[10px] tw-relative">
                    <PrivilegeDetail id={item} />
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
        return <div>privilege not found</div>;
    }

    return (
        <>
            <div className={twMerge()}>
                <img src={privilege.imgaePath} alt={privilege.privilegeName} className="tw-w-full tw-rounded-[10px] " />
            </div>
            <div className={twMerge("tw-absolute tw-top-0 tw-bottom-0 tw-grid tw-grid-cols-2 tw-gap-10 tw-items-center tw-left-0 tw-right-0")}>
                <div className={twMerge(privilege.positionImage == "left" ? "tw-order-1" : "tw-order-2")}></div>
                <div className={twMerge(privilege.positionImage == "left" ? "tw-order-2" : "tw-order-1","tw-px-10")}>
                    <h2 className="tw-text-[25px] tw-text-[#D0B185] tw-font-bold tw-mb-3">{parse(tc(privilege.title))}</h2>
                    <div className="tw-text-[18px]"><DetailsItems item={tc(privilege.description)} /></div>
                    <button className="tw-mt-5 tw-py-[4px] tw-px-4 tw-border-[1px] tw-border-solid tw-border-white tw-text-white hover:tw-text-black hover:tw-bg-white tw-rounded-[100px]">{tc(privilege.buttonText)}</button>
                </div>
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
            {item.map((item) => (
                <p>{parse(item)}</p>
            ))}
        </>
    )
}