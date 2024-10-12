
import { translateContent as tc } from "@/lib/i18n";
import { twMerge } from "@/lib/twMerge";
import parse from "html-react-parser";

import Tab, { TabList, TabTrigger, TabContent } from "@/components/ui/Tab";
import Tables from "@/components/ui/Table";
import Scroll, { Viewport, Scrollbar, Corner, Thumb } from '@/components/ui/ScrollArea';

// Load data
import TCData from "@/data/TermsAndCondition.json";
import TableData from "@/data/TableData.json";
import TabData from "@/data/TabsForTerms.json";

interface TabsForTermsProps {
    DialogID: string;
}

function TabsForTerms({ DialogID }: TabsForTermsProps) {
    const filteredDialog = TCData.filter(item => item.DialogID === DialogID);
    const Dialog = filteredDialog.length > 0 ? filteredDialog[0] : null;

    if (!Dialog) {
        return null;
    }

    // Helper function for rendering tab titles
    const renderTabTitle = (tabName: string) => {
        const tab = TabData.find(tabs => tabs.tabName === tabName);
        return tab ? tc(tab.tabTitle) : null;
    };

    return (
        <div>
            <Tab defaultValue={Dialog.TermsTabs[0]}>
                <TabList className="lg:tw-gap-x-1 tw-gap-3 md:tw-mb-0 ">
                    {Dialog.TermsTabs.map((item, index) => (
                        <TabTrigger key={index} value={item} className="tw-border-[1px] tw-border-solid mb:tw-border-b-0 tw-border-b-[1px] tw-border-white tw-p-0 tw-m-0 tw-py-2 md:tw-px-10 tw-px-5  md:tw-rounded-none tw-rounded-3xl lg:tw-rounded-t-xl data-[state=active]:tw-bg-white data-[state=active]:tw-text-black hover:tw-bg-white hover:tw-text-black">
                            <div>
                                {renderTabTitle(item)}
                            </div>
                        </TabTrigger>
                    ))}
                </TabList>
                {Dialog.TermsTabs.map((item, index) => (
                    <TabContent key={index} value={item} className="tw-border-[1px] md:tw-border-solid tw-border-none tw-border-white lg:tw-p-5 tw-px-0">
                        <TermsAndConditions TermsTabs={item} />
                    </TabContent>
                ))}
            </Tab>
        </div>
    );
}

export default TabsForTerms;


interface TermsAndConditionsOfPointItemsProps {
    TermsTabs: string | undefined;
}

function TermsAndConditions({ TermsTabs }: TermsAndConditionsOfPointItemsProps) {
    const filteredData = TabData.filter(item => item.tabName === TermsTabs);
    const Dialog = filteredData.length > 0 ? filteredData[0] : null;

    if (!Dialog) {
        return null;
    }

    const filteredTableData = TableData.find(item => item.tableName === Dialog.TableName);

    return (
        <>
            {filteredData.map((item, index) => (
                <div className="last:tw-mb-0 tw-mb-[16px]" key={index}>
                    {tc(item.descriptionTitle).length > 1 ? <h2 className="tw-text-[16px] tw-font-bold tw-mb-5">{parse(tc(item.descriptionTitle))}</h2> : null}
                    {tc(item.description)?.map((description, idx) => (
                        <p key={idx} className="tw-mb-1 tw-text-[14px]">{parse(description)}</p>
                    ))}

                    {Dialog?.TableName && filteredTableData && (
                        <div className="tw-my-5">
                            {tc(filteredTableData.tableTitle).length > 1 ? <h2 className="tw-text-[16px] tw-font-bold tw-mb-3">{tc(filteredTableData.tableTitle)}</h2> : null}
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

                    {tc(item.TermsTitle) && <h2 className="tw-text-[16px] tw-font-bold tw-pt-5">{parse(tc(item.TermsTitle))}</h2>}
                    <ul className={twMerge(item.listType === "NUMBER" ? "tw-list-decimal" : "tw-list-disc", "tw-ml-6 tw-my-2 tw-text-[14px]")}>
                        <TermsItems item={tc(item.TermsItems) || []} />
                    </ul>
                </div>
            ))}
            {Dialog?.note && tc(Dialog.note).map((note, idx) => (
                <p key={idx} className="tw-text-[14px] tw-mb-3 last:tw-mb-0">{parse(note)}</p>
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
                    {parse(termItem)}
                </li>
            ))}
        </>
    );
}
