//load Component and Module
import parse from "html-react-parser";
import { translateContent as tc } from "@/lib/i18n";
import { twMerge } from "@/lib/twMerge";
import ButtonDialog from "@/components/termsAndConditions/TermsAndConditions";
import Link from "@/components/ui/Link";

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
            <Container className="lg:tw-px-20 tw-px-0">
                <div className="lg:tw-mx-20 tw-mx-0 tw-relative">
                    <div className="lg:tw-absolute tw-relative tw-top-0 tw-bottom-[-20px] tw-right-0 tw-left-0 tw-flex tw-items-end tw-justify-center tw-z-[4] lg:tw-pt-0 tw-pt-20">
                        <div className="lg:tw-px-0 tw-px-5">
                            <h2 className="tw-font-bold tw-text-[#D0B185] tw-text-center lg:tw-text-[45px] tw-text-[30px] tw-leading-[1.4]">{parse(tc(card.specialPrivilege.title))}</h2>
                            <div className="tw-bg-[#D0B185] tw-h-[3px] tw-w-[100px] tw-mt-[20px] tw-mb-[10px] tw-mx-auto"></div>
                            <p className="tw-text-[18px] tw-text-center">{parse(tc(card.specialPrivilege.subTitle))}</p>
                        </div>
                    </div>
                    <div className="lg:tw-relative md:tw-absolute tw-absolute tw-top-0 tw-z-[2]"><Image src={card.specialPrivilege.backgroundImage} /></div>
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
            <div className="xl:tw-absolute tw-relative tw-top-0 tw-bottom-0 tw-z-[1] tw-right-0 tw-left-0">
                <img src={privilege.imgaePath} alt={privilege.privilegeName} className={twMerge(privilege.positionImage == "left" ? "tw-object-left" : "tw-object-right" , privilege.objectSize == "contain" ? "xl:tw-object-contain tw-object-cover" : "tw-object-cover" ,"tw-w-full lg:tw-rounded-[10px] tw-rounded-t-[10px] xl:tw-h-full md:tw-h-[330px] tw-h-[150px] ")} />
            </div>
            <div className={twMerge("tw-relative tw-z-[3] tw-grid xl:tw-grid-cols-2 md:tw-grid-cols-1 tw-grid-cols-1 xl:tw-gap-10 tw-gap-0 tw-items-center tw-left-0 tw-right-0 lg:tw-min-h-[250px] tw-min-h-auto xl:tw-bg-transparent tw-bg-[#2c2c2c] tw-rounded-b-[10px]")}>
                <div className={twMerge(privilege.positionImage == "left" ? "tw-order-1" : "tw-order-2")}></div>
                <div className={twMerge(privilege.positionImage == "left" ? "tw-order-2" : "tw-order-1","xl:tw-p-10 md:tw-p-5 tw-p-5")}>
                    <h2 className="tw-text-[25px] tw-text-[#D0B185] tw-font-bold tw-mb-3 xl:tw-text-start tw-text-center">{parse(tc(privilege.title))}</h2>
                    <div className="md:tw-text-[18px] tw-text-[16px] xl:tw-text-start tw-text-center"><DetailsItems item={tc(privilege.description)} /></div>
                    {
                    privilege.buttonType === "" ? null :
                        privilege.buttonType === "DIALOG" ?
                            (<ButtonDialog DialogID={tc(privilege.buttonLink)} className="tw-mt-5 tw-py-[4px] tw-px-4 tw-border-[1px] tw-border-solid tw-border-white tw-text-white hover:tw-text-black hover:tw-bg-white tw-rounded-[100px] tw-transition tw-ease-in tw-delay-150 duration-150 tw-block tw-w-fit lg:tw-mx-start tw-mx-auto">{tc(privilege.buttonText)}</ButtonDialog>)
                            :
                            privilege.buttonType === "LINK" ?
                                (<Link href={tc(privilege.buttonLink)} className="tw-mt-5 tw-py-[4px] tw-px-4 tw-border-[1px] tw-border-solid tw-border-white tw-text-white hover:tw-text-black hover:tw-bg-white tw-rounded-[100px] tw-transition tw-ease-in tw-delay-150 duration-150 tw-block tw-w-fit hover:tw-no-underline lg:tw-mx-start tw-mx-auto">{tc(privilege.buttonText)}</Link>)
                                : null
                }                </div>
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