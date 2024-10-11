//load component and module
import parse from "html-react-parser";
import { translateContent as tc } from "@/lib/i18n";
// import { twMerge } from "@/lib/twMerge";
import { htmlStripper } from "@/components/ui/HtmlStripper";
import Image from "@/components/ui/Image";
import ButtonDialog from "@/components/termsAndConditions/TermsAndConditions";

//load data
import BenefitData from '@/data/BenefitData.json';
import CardData from '@/data/CreditCardData.json';


// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Mousewheel, Navigation,Pagination } from 'swiper/modules';


import '../styles.css'



interface PrivillegeSectionProps {
    selectedCard: string;
}

function BenefitMobile({ selectedCard }: PrivillegeSectionProps) {

    const findCard = CardData.filter((card) => card.cardLink === selectedCard && card.isActive === true);

    const card = findCard.length > 0 ? findCard[0] : null;

    if (!card) {
        return <div>Card not found</div>;
    }

    return (
        <>
            <Swiper
                navigation={true}
                pagination={
                    {
                        "clickable": true
                    }
                }
                className="benefit-slider"
                modules={[Mousewheel, Navigation, Pagination]}
            >
                {card.BenefitName.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="tw-border-solid tw-border-[1px] tw-border-white tw-rounded-[10px] tw-bg-black tw-p-7 tw-h-[300px] tw-w-full">
                            <BenefitItem benefitName={item} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </>
    )
}

export default BenefitMobile;

interface BenefitItemProps {
    benefitName: string;
}

function BenefitItem({ benefitName }: BenefitItemProps) {

    const findBenefit = BenefitData.filter((benefit) => benefit.benefitName === benefitName && benefit.isActive === true);
    return (
        <>
            {findBenefit.map((benefit, index) => (
                <div key={index} className="">
                    <div className="lg:tw-flex tw-block tw-justify-between tw-items-start">
                        <h2 className="tw-uppercase tw-text-[16px] tw-font-bold tw-h-[55px] tw-leading-[1.4]">{parse(tc(benefit.title))}</h2>
                        {benefit.icon.length == 0 ? null : <Image src={benefit.icon} className="tw-max-w-[150px] tw-h-auto tw-mx-auto tw-my-3" alt={htmlStripper(tc(benefit.title))} />}
                    </div>
                    <div className="tw-text-[16px] tw-text-white tw-min-h-[150px]">
                        <Description item={tc(benefit.description)} />
                    </div>
                    {benefit.buttonType.length == 0 ? null : <ButtonDialog DialogID={tc(benefit.buttonLink)} className="tw-mt-5 tw-py-[4px] tw-px-4 tw-border-[1px] tw-border-solid tw-border-white tw-text-white hover:tw-text-black hover:tw-bg-white tw-rounded-[100px] tw-transition tw-ease-in tw-delay-150 duration-150 tw-block tw-w-fit tw-mx-auto">{tc(benefit.buttonText)}</ButtonDialog>}
                </div>
            ))}
        </>
    );
}

interface DescriptionProps {
    item: string[];
}

function Description({ item }: DescriptionProps) {
    return (
        <div>
            {item.map((item) => (
                <p>{parse(item)}</p>
            ))}
        </div>
    );
}