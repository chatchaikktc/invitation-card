import parser from "html-react-parser";
import { translateContent as tc } from "@/lib/i18n";
import DialogOpen from "@/components/ui/Dialog/DialogOpen"
import { twMerge } from "@/lib/twMerge";
import Tables from "@/components/ui/Table";
import Scroll, { Viewport, Scrollbar, Corner, Thumb } from '@/components/ui/ScrollArea';

import '../styles.css'

//data
import TCData from "@/data/TermsAndCondition.json";
import TableData from "@/data/TableData.json";

interface ButtonDialogProps {
    DialogID: string; // Now accepts an array of strings
    children?: React.ReactNode;
    className?: string;
}

function ButtonDialog({ DialogID, children, className }: ButtonDialogProps) {
    const filteredDialog = TCData.filter(item => item.DialogID === DialogID);
    const Dialog = filteredDialog.length > 0 ? filteredDialog[0] : null;

    if (!Dialog) {
        return null;
    }

    return (
        <DialogOpen
            Title={tc(Dialog.DialogTitle)}
            ClassName={`lg:tw-text-[16px] tw-text-[14px] tw-text-start ${className}`}
        >
            {children}
            <div className="first:tw-max-full tw-shrink-0 xl:tw-pr-5 tw-pr-2 dialog-area">
                <TermsAndConditions DialogID={DialogID} />
            </div>
        </DialogOpen>
    );
}

export default ButtonDialog;

interface TermsAndConditionsOfPointItemsProps {
    DialogID: string | undefined;
}

function TermsAndConditions({ DialogID }: TermsAndConditionsOfPointItemsProps) {
    const filteredData = TCData.filter(item => item.DialogID === DialogID);
    const Dialog = filteredData.length > 0 ? filteredData[0] : null;

    if (!Dialog) {
        return null;
    }

    const filteredTableData = TableData.find(item => item.tableName === Dialog.TableName);

    return (
        <>
            {filteredData.map((item, index) => (
                <div className="last:tw-mb-0 tw-mb-[16px]" key={index}>
                    {item.descriptionTitle && <h2 className="tw-text-[16px] tw-font-bold">{tc(item.descriptionTitle)}</h2>}
                    {tc(item.description)?.map((description, idx) => (
                        <p key={idx} className="tw-mb-1">{parser(description)}</p>
                    ))}

                    {Dialog?.TableName && filteredTableData && (
                        <div className="tw-my-5">
                            <h2 className="tw-text-[16px] tw-font-bold tw-mb-3">{tc(filteredTableData.tableTitle)}</h2>
                                <Scroll className='tw-max-w-full'>
                                    <Viewport className='tw-h-fit'>
                                        <div className="lg:tw-w-full tw-min-w-[500px] tw-max-w-[900px]"> {/* สร้างเนื้อหาที่ยาวพอที่จะเลื่อนได้ */}
                                            <Tables tableData={filteredTableData} className="tw-mb-5 tw-shrink-0" />
                                        </div>
                                    </Viewport>
                                    <Scrollbar orientation="horizontal" className=''>
                                        <Thumb className='' />
                                    </Scrollbar>
                                    <Corner />
                                </Scroll>
                        </div>
                    )}

                    {item.TermsTitle && <h2 className="tw-text-[16px] tw-font-bold tw-pt-5">{tc(item.TermsTitle)}</h2>}
                    <ul className={twMerge(item.listType === "NUMBER" ? "tw-list-decimal" : "tw-list-disc", "tw-ml-6 tw-my-2 tw-text-[14px]")}>
                        <TermsItems item={tc(item.TermsItems) || []} />
                    </ul>
                </div>
            ))}
            {Dialog?.note && tc(Dialog.note).map((note, idx) => (
                <p key={idx} className="tw-text-[14px] tw-mb-3 last:tw-mb-0">{parser(note)}</p>
            ))}
        </>
    );

}

interface TermsItemsProps {
    item: string[];
}

export function TermsItems({ item = [] }: TermsItemsProps) {
    return (
        <>
            {item.map((termItem, index) => (
                <li className="tw-mb-1" key={index}>
                    {parser(termItem)}
                </li>
            ))}
        </>
    );
}
