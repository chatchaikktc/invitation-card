import TableData from '@/data/table-data.json';
import { translateContent as tc } from "@/lib/i18n";

import { useState, useEffect } from 'react';

import parse from 'html-react-parser';

interface TableProps {
  tableName: string;
}

function Tables({ tableName }: TableProps) {

  const filteredTable = TableData.filter((item) => item.tableName === tableName);
  
  const tabledata = filteredTable.length > 0 ? filteredTable[0] : null;

    if (!tabledata) {
        return null; // หากไม่มีข้อมูล Privilege ก็ไม่ต้องแสดงผลอะไร
    }

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
 
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const getTableWidth = () => {
    if (windowWidth >= 991) {
      // Large screens
      return tabledata['tableWith-md'];
    } else {
      // Small screens
      return tabledata['tableWith-sm'];
    }
  };

  return (
    <>
      <div className='tw-w-[100%] tw-my-5 tw-overflow-y-auto'>
        {tc(tabledata.tableTitle) ? <h3 className='tw-text-[20px] tw-font-bold tw-leading-[1.4] tw-mb-2  '>{tc(tabledata.tableTitle)}</h3> : null}
        <div style={{ width: getTableWidth() }}>
          <div className='divTable tw-border-[1px] tw-border-solid  tw-w-full tw-rounded-[8px] '>
            <div className='divTableHead tw-bg-[#212529] tw-border-[1px] tw-border-[#212529] tw-border-solid tw-rounded-t-[7px]'>
              <div className={"divTableRow tw-flex tw-text-white tw-text-center tw-font-bold tw-py-2 md:tw-text-[16px] tw-text-[14px] "}>
                <TableHeader columns={tc(tabledata.tableHeader)} size={tabledata.tableColumnSize} />
              </div>

            </div>
            <div className='divTableBody'>
              {tabledata.tableRow.map((item, index) => (
                <div className='divTableRow tw-flex last:tw-border-b-0 tw-border-b-[1px] sarabun'>
                  <TableRows rows={tc(item.column)} key={index} size={tabledata.tableColumnSize} />
                </div>
              ))}

            </div>
          </div>
        </div>



      </div>


    </>
  )
}

export default Tables;

interface TableHeaderProps {
  columns: string[];
  size: number[];
}

function TableHeader({ columns, size }: TableHeaderProps) {

  return (
    <>
      {columns.map((item, index) => (
        <div key={index} style={{ width: size[index] + "%" }}>{parse(item)}</div>
      ))}
    </>
  )
}

interface TableRowsProps {
  rows: string[];
  size: number[];
}

function TableRows({ rows, size }: TableRowsProps) {
  return (
    <>
      {rows.map((item, index) => (
        <div key={index} className='first:tw-border-l-0 tw-border-r-[1px] last:tw-border-r-0 tw-py-2 tw-px-2 sarabun tw-text-[20px] tw-leading-[1.4] sarabun' style={{ width: size[index] + "%" }}>{parse(item)}</div>
      ))}
    </>
  )
}

