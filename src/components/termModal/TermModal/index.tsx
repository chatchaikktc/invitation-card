

// import Termsdata from '@/data/term-condition-data.json';
// import { translateContent as tc } from "@/lib/i18n";
// import Tables from '@/components/ui/Tables';

// import parse from 'html-react-parser';
// // import { useTranslation } from "react-i18next"; 

// interface TermModalProps {
//   id?: string;
// }

// function TermModal({ id }: TermModalProps) {
//   const filteredTerms = Termsdata.filter((item) => item.termModalID === id);

//   if (filteredTerms.length === 0) {
//     return null; // ถ้าไม่มีข้อมูลใน filteredTerms ให้ไม่แสดงผลอะไรเลย
//   }

//   const headline = tc(filteredTerms[0].headline);
//   const descriptionArray = tc(filteredTerms[0].description);

//   const hasValidDescription = Array.isArray(descriptionArray) && descriptionArray.some(desc => typeof desc === 'string' && desc.trim() !== "");


//   return (
//     <div className=''>
//       <h2 className='tw-w-full tw-pb-3 tw-border-b-[1px] tw-border-solid tw-border-[#E6E8EA] tw-text-[18px] tw-font-bold '>
//         {parse(headline)}
//       </h2>
//       <div className='tw-mt-3'>
//         {hasValidDescription ? <DescriptionItem item={tc(filteredTerms[0].description)} /> : null}
//         {filteredTerms[0].tableName ? <Tables tableName={filteredTerms[0].tableName.toString()} /> :null}
//         {filteredTerms[0].termContent.map((item, index) => (
//           <div key={index} className='tw-my-3 tw-border-b-[1px] last:tw-border-0 tw-pb-3'>
//             {tc(item.content).length > 0 ? <TableConent item={tc(item.content)} /> : null}
            
//             {item.tableName ? <Tables tableName={item.tableName.toString()} /> :null}
//             {tc(item.title) === '' ? null : <div className='tw-mt-5 tw-mb-2 tw-text-[20px] tw-font-bold sarabun tw-underline'>{tc(item.title)}</div>}
//             <ul className='sarabun tw-list-decimal tw-pl-5 tw-text-[20px] tw-leading-[1.2]'>
//               <ItemList item={tc(item.termList)} />
//             </ul>
//           </div>
//         ))}
        
//       </div>
//     </div>
//   );
// }

// export default TermModal;

// interface DescriptionItemProps {
//   item: string[];
// }

// function DescriptionItem({ item }: DescriptionItemProps) {

//   return (
//     <>
//       {item.map((item, index) => (
//         <div className='tw-text-[20px] tw-leading-[1.5] sarabun' key={index}>{parse(item)}</div>
//       ))}
//     </>

//   )
// }

// interface ItemListProps {
//   item: string[];
// }

// function ItemList({ item }: ItemListProps) {

//   return (
//     <>
//       {item.map((item, index) => (
//         <li key={index}>{parse(item)}</li>
//       ))}
//     </>

//   )
// }

// interface TableConentProps {
//   item: string[];
// }

// function TableConent({ item }: TableConentProps) {
  
//     return (
//       <>
//         {item.map((item, index) => (
//           <div key={index} className='sarabun tw-text-[20px]'>{parse(item)}</div>
//         ))}
//       </>
  
//     )
//   }


