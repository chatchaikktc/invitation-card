import parser from "html-react-parser";
import { translateContent as tc } from "@/lib/i18n";
import DialogOpen from "@/components/ui/Dialog/DialogOpen";
import { twMerge } from "@/lib/twMerge";
import Tables from "@/components/ui/Table";
import Scroll, { Viewport, Scrollbar, Corner, Thumb } from '@/components/ui/ScrollArea';

import '../styles.css';

// data
import TCData from "@/data/TermsAndCondition.json";
import TableData from "@/data/TableData.json";
import TabsForTerms from "../TabsForTerms";

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

    const DialogTitle = parser(tc(Dialog.DialogTitle));

    return (
        <DialogOpen
            Title={DialogTitle as string}
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

    const filteredTableData = TableData.filter(item => item.tableName === Dialog.TableName);

    // Use Set to filter out duplicate table titles
    const uniqueTableData = Array.from(new Set(filteredTableData.map(table => table.tableTitle)))
        .map(title => filteredTableData.find(table => table.tableTitle === title));

    return (
        <>
            {filteredData.map((item, index) => (
                <div className="last:tw-mb-0 tw-mb-[16px]" key={index}>
                    {tc(item.descriptionTitle).length > 1 ? <h2 className="tw-text-[16px] tw-font-bold tw-mb-5">{parser(tc(item.descriptionTitle))}</h2> : null}
                    {tc(item.description)?.map((description, idx) => (
                        <p key={idx} className="tw-mb-1 md:tw-text-[16px] tw-text-[14px]">{parser(description)}</p>
                    ))}

                    {Dialog.TermsTabs.length === 0 ? null : (<div className="tw-pt-4 tw-mb-5"><TabsForTerms DialogID={Dialog.DialogID} /></div>)}

                    {Dialog?.TableName && uniqueTableData.length > 0 && uniqueTableData.map((Table, index) => (
                        <div className="tw-mt-5" key={index}>
                            {Table && tc(Table.tableTitle).length > 1 ? <h2 className="tw-text-[16px] tw-font-bold tw-mb-3">{parser(tc(Table.tableTitle))}</h2> : null}
                            <Scroll className='tw-max-w-full'>
                                <Viewport className='tw-h-fit'>
                                    <div className="lg:tw-w-full lg:tw-min-w-full tw-min-w-[600px] tw-max-w-[1100px]">
                                        {Table && (
                                            <Tables
                                                key={index}
                                                tableData={{
                                                    columns: Table.columns,
                                                    dataSource: Table.dataSource
                                                }}
                                                className="tw-mb-5 tw-shrink-0"
                                            />
                                        )}
                                    </div>
                                </Viewport>
                                <Scrollbar orientation="horizontal">
                                    <Thumb />
                                </Scrollbar>
                                <Corner />
                            </Scroll>
                        </div>
                    ))}

                    {tc(item.TermsTitle) && <h2 className="tw-text-[16px] tw-font-bold tw-pt-5">{parser(tc(item.TermsTitle))}</h2>}
                    <ul className={twMerge(item.listType === "NUMBER" ? "tw-list-decimal" : "tw-list-disc", "tw-ml-8 tw-my-2 lg:tw-text-[16px] tw-text-[14px]")}>
                        <TermsItems item={tc(item.TermsItems) || []} />
                    </ul>
                </div>
            ))}
            {Dialog?.note && tc(Dialog.note).map((note, idx) => (
                <p key={idx} className="lg:tw-text-[16px] tw-text-[14px] tw-mb-3 last:tw-mb-0">{parser(note)}</p>
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
