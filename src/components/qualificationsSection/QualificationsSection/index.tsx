import { useState } from 'react'; // เพิ่มการนำเข้า useState
import { translateContent as tc } from "@/lib/i18n";
import { twMerge } from "@/lib/twMerge";
import { htmlStripper } from "@/components/ui/HtmlStripper";
import parse from "html-react-parser";
import { useTranslation } from "react-i18next";
import Container from "@/components/ui/Container";
import Tab , {TabList, TabTrigger, TabContent} from "@/components/ui/Tab";

//load data
import CardData from '@/data/CreditCardData.json';
import QualificationData from '@/data/QualificationsData.json';

//load styles
import '../style.css'

interface QualificationsSectionProps {
    selectedCard: string;
}

function QualificationsSection({ selectedCard }: QualificationsSectionProps) {

    const { t } = useTranslation();
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

    return (
        <section className="tw-py-[40px]" id="QualificationsSection">
            <Container>
                <h2 className="tw-text-[25px] tw-leading-[1.4] tw-text-center tw-font-bold">
                    {parse(t("Qualifications.Qualifications and Supporting Documents for Credit Card Application Primary Card"))}
                </h2>
                <Tab value={tc(Qualifications.QualificationsTabs[selectedTab].tabTitle)}>
                    <TabList>
                        {Qualifications.QualificationsTabs.map((qualification, index) => (
                            <TabTrigger 
                                key={index} 
                                value={tc(qualification.tabTitle)} 
                                onClick={() => setSelectedTab(index)} // เมื่อคลิกแท็บ ให้เปลี่ยน selectedTab
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
                            {parse(tc(qualification.tabTitle))}
                        </TabContent>
                    ))}
                </Tab>
            </Container>
        </section>
    );
}

export default QualificationsSection;
