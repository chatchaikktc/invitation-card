import { useState } from 'react'; // เพิ่มการนำเข้า useState
import { translateContent as tc } from "@/lib/i18n";
import { twMerge } from "@/lib/twMerge";
// import { htmlStripper } from "@/components/ui/HtmlStripper";
import parse from "html-react-parser";
import { useTranslation } from "react-i18next";
import Container from "@/components/ui/Container";
import Tab, { TabList, TabTrigger, TabContent } from "@/components/ui/Tab";

//load data
import CardData from '@/data/CreditCardData.json';
import QualificationData from '@/data/QualificationsData.json';
import WealthData from '@/data/WealthPrivilegeData.json'

//load styles
import '../style.css'

interface QualificationsSectionProps {
    selectedCard: string;
}

function QualificationsSection({ selectedCard }: QualificationsSectionProps) {

    const { t,i18n } = useTranslation();
    const isThai = i18n.language === 'th';
    const [selectedTab, setSelectedTab] = useState(0); // สร้าง state เพื่อเก็บแท็บที่เลือก

    const findCard = CardData.filter((card) => card.cardLink === selectedCard && card.isActive === true);
    const card = findCard.length > 0 ? findCard[0] : null;

    if (!card) {
        return <div>Card not found</div>;
    }

    // ค้นหาคุณสมบัติที่ตรงกับ cardQualifications ของบัตรที่ค้นพบ
    const filteredQualifications = QualificationData.filter((qualification) =>
        qualification.qualificationName === card.cardQualifications
    );

    const Qualifications = filteredQualifications.length > 0 ? filteredQualifications[0] : null;


    if (!Qualifications) {
        return <div>Card not found</div>;
    }

    const Wealth = WealthData.length > 0 ? WealthData[0] : null;

    if (!Wealth) {
        return <div>Wealth not found</div>;
    }

    return (
        <>
            <section className="" id="QualificationsSection">
                <div className='QualificationsSection-bg tw-max-w-[844px] lg:tw-px-0 tw-px-5 tw-py-[40px]'>
                    <h2 className="tw-text-[25px] tw-leading-[1.4] tw-text-center tw-font-bold">
                        {parse(t("Qualifications.Qualifications and Supporting Documents for Credit Card Application Primary Card"))}
                    </h2>
                    <Tab value={tc(Qualifications.QualificationsTabs[selectedTab].tabTitle)}>
                        <TabList className='tw-pt-10 tw-grid tw-grid-cols-2 tw-gap-5  '>
                            {Qualifications.QualificationsTabs.map((qualification, index) => (
                                <TabTrigger
                                    key={index}
                                    value={tc(qualification.tabTitle)}
                                    onClick={() => setSelectedTab(index)} // เมื่อคลิกแท็บ ให้เปลี่ยน selectedTab
                                    className="data-[state=active]:tw-bg-[#357cff] hover:tw-bg-[#357cff] tw-border-[1px] tw-border-solid data-[state=active]:tw-border-[#357cff] hover:tw-border-[#357cff] tw-border-white tw-font-bold tw-py-[.5rem] tw-rounded-[8px] tw-transition tw-ease-in-line tw-delay-150 tw-text-center"
                                >
                                    {parse(tc(qualification.tabTitle))}
                                </TabTrigger>
                            ))}
                        </TabList>
                        {Qualifications.QualificationsTabs.map((qualification, index) => (
                            <TabContent
                                key={index}
                                value={tc(qualification.tabTitle)}
                                hidden={selectedTab !== index} // ซ่อนเนื้อหาที่ไม่ตรงกับ selectedTab
                            >
                                <ContentItem item={qualification.tabContent} />

                            </TabContent>
                        ))}
                    </Tab>
                </div>
            </section>
            <section id="wealth-privilege">
                <Container className='QualificationsSection-bg  tw-py-[40px]'>
                    <div className='lg:tw-px-20 tw-px-5'>
                        <div className='tw-p-[28px] tw-border-white tw-border-[1px] tw-border-solid tw-rounded-[10px] tw-bg-cover tw-mb-10' style={{ backgroundImage: `url(https://www.ktc.co.th/pub/media/creditcard/invitation/img/Banner-Krungthai_Wealth_BG.webp)` }}>
                            <h2 className={twMerge(isThai ? 'md:tw-text-[25px] tw-text-[20px] ' : 'tw-text-[21px]','tw-font-bold tw-text-center tw-leading-[1.4]')}>{tc(Wealth.title)}</h2>
                            <p className={twMerge(isThai ? 'md:tw-text-[25px] tw-text-[20px]' : 'tw-text-[21px]','tw-font-bold tw-text-center tw-leading-[1.4] tw-text-[#80B0EF]')}>{tc(Wealth.subTitle)}</p>
                        </div>
                        <h3 className='tw-text-[18px] tw-font-bold tw-mb-3'>{t('Qualifications.note')}</h3>
                        <ul className='sarabun tw-text-[26px] tw-list-disc tw-leading-[1.4] lg:tw-pl-[50px] tw-pl-5'>
                                {tc(Wealth.note).map((note, index) => (
                                    <li key={index}>{parse(note)}</li>
                                ))}
                        </ul>
                    </div>
                </Container>

            </section>
        </>
    );
}

export default QualificationsSection;


interface ContentItemProp {
    item: {
        title: {
            th: string;
            en: string;
        };
        content: {
            th: string[];
            en: string[];
        };
    }[];
}

function ContentItem({ item }: ContentItemProp) {
    return (
        <>
            {item.map((contentItem, index) => (
                <div key={index} className='tw-border-b-[1px] tw-border-solid tw-border-b-[#707070] last:tw-border-hidden tw-py-5'>
                    <h3 className='tw-text-[18px] tw-font-bold'>{parse(tc(contentItem.title))}</h3>
                    <ul className='tw-pt-2 tw-pl-10 tw-list-disc'>
                        {tc(contentItem.content).map((content, index) => (
                            <li key={index} className='tw-pl-3'>{parse(content)}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    );
}
