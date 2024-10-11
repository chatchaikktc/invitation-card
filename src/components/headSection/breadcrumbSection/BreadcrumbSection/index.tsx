import Container from "@/components/ui/Container";
import { useTranslation } from "react-i18next";
import { twMerge } from "@/lib/twMerge";


interface BreadcrumbSectionProps {
    className?: string;
    themeColor?:string;
    cardName:string;
}

function BreadcrumbSection({ cardName, className}: BreadcrumbSectionProps) {

    const { t } = useTranslation();

    return (
        <>
            <Container className={className}>
                <nav className="flex" aria-label="Breadcrumb">
                    <ol className="tw-inline-flex tw-items-center tw-space-x-1 md:tw-space-x-2 rtl:tw-space-x-reverse tw-text-[12px] tw-mt-2">
                        <li className={twMerge("first:tw-hidden tw-text-[rgba(91,102,112,0.6)]")}>/</li>
                        <li className={twMerge("last:tw-font-bold tw-inline-flex tw-items-center tw-text-[12px] tw-font-medium  last:tw-text-[#121212] tw-text-[#ffffff]")}>
                            <a href={t('BreadcrumbSection.Home Link')} className="hover:tw-text-[rgba(91,102,112,0.6)]">{t('BreadcrumbSection.Home')}</a>
                        </li>
                        <li className={twMerge(" first:tw-hidden tw-text-[rgba(91,102,112,0.6)]")}>/</li>
                        <li className={twMerge("last:tw-font-bold tw-inline-flex tw-items-center tw-text-[12px] tw-font-medium hover:tw-text-[#121212] last:tw-text-[#121212] tw-text-[rgba(#ffffff]")}>
                            
                                {cardName ? (
                                    <a href={t('BreadcrumbSection.creditCard link')} className="hover:tw-text-[rgba(91,102,112,0.6)]">
                                        {t('BreadcrumbSection.creditCard')}
                                    </a>
                                ) : (
                                    <div>{t('BreadcrumbSection.creditCard')}</div>
                                )}
                        </li>
                        {cardName &&
                            (<>
                                <li className={twMerge(" first:tw-hidden tw-text-[rgba(91,102,112,0.6)]")}>/</li>
                                <li className={twMerge("last:tw-font-bold tw-inline-flex tw-items-center tw-text-[12px] tw-font-medium   tw-text-[#ffffff]")}>
                                    {cardName}
                                </li>
                            </>)
                        }
                    </ol>
                </nav>
            </Container>
        </>
    );
}
export default BreadcrumbSection;