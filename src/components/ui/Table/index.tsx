import { Table } from 'antd';
import { translateContent as tc } from "@/lib/i18n";
import { twMerge } from "@/lib/twMerge";
import parser from "html-react-parser";

import './styles.css';

interface Column {
    title: {
        en: string;
        th: string;
    };
    dataIndex: string;
    key: string;
}

interface DataSourceItem {
    key: string;
    [dataIndex: string]: { en: string; th: string } | string;
}

interface TableProps {
    tableData: {
        columns: Column[];
        dataSource: DataSourceItem[];
    };
    className?: string;
}

function Tables({ tableData, className }: TableProps) {
    // สร้าง columns โดยใช้การแปลภาษาใน title และ render function
    const columns = tableData.columns.map(column => ({
        title: tc(column.title),
        dataIndex: column.dataIndex,
        key: column.key,
        render: (text: { en: string; th: string } | string) => (
            <span className="tw-text-white tw-font-[14px]">
                {typeof text === 'object' ? parser(tc(text).toString()) : parser(text)}
            </span>
        )
    }));

    // สร้าง dataSource ให้มีการแยกประเภทข้อมูลอย่างชัดเจน
    const dataSource = tableData.dataSource.map(item => {
        const newItem: Record<string, string | { en: string; th: string }> = { key: item.key };
        tableData.columns.forEach(column => {
            newItem[column.dataIndex] = item[column.dataIndex];
        });
        return newItem;
    });

    return (
        <>
            <Table
                columns={columns}
                dataSource={dataSource}
                pagination={false}
                className={twMerge(className, "invite-table no-hover")}
                rowClassName={() => ""}
            />
        </>
    );
}

export default Tables;
