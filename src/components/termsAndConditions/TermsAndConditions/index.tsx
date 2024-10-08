//load module and component
import parser from "html-react-parser";
import { translateContent as tc } from "@/lib/i18n";
import DialogOpen from "@/components/ui/Dialog/DialogOpen"
import Tables from "@/components/ui/Tables";


//load data
import TCData from "@/data/term-condition-data.json";




interface OpenDialogProps {
    DialogName: string; // Now accepts an array of strings
    children: React.ReactNode;
    className?: string;
}

function OpenDialog({ DialogName, children, className }: OpenDialogProps) {
    // Ensure DialogID is an array, even if it's a single string or undefined
    //const dialogIds = Array.isArray(DialogID) ? DialogID : DialogID ? [DialogID] : [];

    const filteredData = TCData.filter(item => item.DialogName === DialogName);
    const Dialog = filteredData.length > 0 ? filteredData[0] : null;

    if (!Dialog) {
        return null;
    }

    return (
        <DialogOpen
            Title={tc(Dialog.Headline)}
            ClassName={`lg:tw-text-[16px] tw-text-[14px] tw-text-[#5B6670] tw-underline hover:tw-no-underline tw-w-full tw-font-bold tw-text-start ${className}`}
        >
            {/* Button content */}
            {children}
            {/* Dialog content */}
            <div className="first:tw-max-full tw-overflow-y-auto tw-overflow-x-hidden scroll-container xl:tw-pr-5 tw-pr-2 xl:tw-max-h-[60vh] tw-max-h-[60vh] tw-text-[#5B6670]">
                {Dialog.Description ?<ContentList item={tc(Dialog.Description)} />: null}
                {Dialog.TableName ? <Tables tableName={Dialog.TableName} /> : null}
                {Dialog.TermContent.map((item, index) => (
                    <TermsSection
                        key={index}
                        Title={tc(item.Title)}
                        Content={tc(item.Content)}
                        TableName={item.TableName}
                        item={tc(item.TermList)}
                    />
                ))}

            </div>
        </DialogOpen>
    );
}


export default OpenDialog;


interface TermsSectionProps {
    Title: string;
    Content: string[];
    TableName: string;
    item: string[];
}

function TermsSection({Title,Content,TableName,item}: TermsSectionProps) {
    return (
        <>
            <div className="tw-mb-5 last:tw-mb-0 tw-border-b-[1px] tw-border-solid tw-border-[#0000001a] last:tw-border-none">
                
                {Content ? <ContentList item={Content} /> : null}
                {TableName ? <Tables tableName={TableName} /> : null}
                <h3  className="tw-text-[18px] tw-mb-3 tw-font-bold">{Title}</h3>
                <ul className="tw-list-decimal tw-ml-6 tw-leading-[1.4]">
                    <TCItem item={item} />
                </ul>

            </div>
        </>
    );
}

interface ContentListProps {
    item: string[];
}

function ContentList({ item }: ContentListProps) {
    return (
        <>
            {item.map((contentItem, index) => (
                <p className="tw-mb-3 psl-font tw-text-[20px]" key={index}>
                    {parser(contentItem)}
                </p>
            ))}
        </>
    );
}


interface TCItemProps {
    item: string[];
}

function TCItem({ item }: TCItemProps) {
    return (
        <>
            {item.map((itemContent, index) => (
                <li key={index} className="psl-font tw-text-[20px] tw-mb-0 last:tw-mb-5">
                    {parser(itemContent)}
                </li>
            ))}
        </>
    );
}


// interface TermsAndConditionsOfPointItemsProps {
//     DialogID: string | undefined;
// }

// function TermsAndConditions({ DialogID }: TermsAndConditionsOfPointItemsProps) {
//     const filteredData = TCData.filter(item => item.DialogID === DialogID);

//     return (
//         <>
//             {filteredData.map((item, index) => (
//                 <>
//                     <div className="last:tw-mb-0 tw-mb-[16px]" key={index}>
//                         {tc(item.descriptionTitle) && <h2 className="xl:tw-text-[22px] tw-text-[20px] tw-font-bold tw-text-[#222222]">{tc(item.descriptionTitle)}</h2>}
//                         {tc(item.description) && <p className="tw-mb-5">{tc(item.description)}</p>}
//                         <h2 className="xl:tw-text-[22px] tw-text-[20px] tw-font-bold tw-text-[#222222]">{tc(item.TermsTitle)}</h2>
//                         <ul className="tw-list-decimal tw-ml-5 tw-my-2">
//                             <TermsItems item={tc(item.TermsItems)} />
//                         </ul>
//                     </div>
//                     {tc(item.DiaglogButton.ButtonText) && (
//                         <ButtonFooter ButtonText={tc(item.DiaglogButton.ButtonText)} ButtonLink={tc(item.DiaglogButton.ButtonLink)} />
//                     )}

//                 </>
//             ))}
//         </>
//     );
// }


// interface TermsItemsProps {
//     item: string[];
// }

// export function TermsItems({ item }: TermsItemsProps) {
//     return (
//         <>
//             {item.map((termItem, index) => (
//                 <li className="tw-mb-1" key={index}>
//                     {parser(termItem)}
//                 </li>
//             ))}
//         </>
//     );
// }

// interface ButtonFooterProps {
//     ButtonText: string;
//     ButtonLink: string;
// }

// function ButtonFooter({ ButtonText, ButtonLink }: ButtonFooterProps) {
//     return (
//         <div className="tw-mt-[16px] tw-w-fit tw-mx-auto">
//             <a
//                 href={ButtonLink}
//                 className="tw-text-[#343434] tw-py-[12px] tw-px-[16px] xl:tw-text-[20px] sm:tw-text-[16px] tw-text-[16px] tw-font-bold sukumvit tw-border-[1px] tw-border-solid tw-border-[#CCCCCC] tw-rounded-[8px] hover:tw-bg-[#f4f4f4] hover:tw-text-[#222222]"
//             >
//                 {ButtonText}
//             </a>
//         </div>
//     );
// }
