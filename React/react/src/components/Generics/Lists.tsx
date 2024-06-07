// // type ListProps={
// //     items:Array<string> // items:string[]  ---> Can also be written like this
// //     onClick:(value:string)=>void
// // }

// // const Lists = ({items,onClick}:ListProps) => {
// //   return (
// //     <>
// //         <div>List of Items</div>
// //         {items.map((item,index)=>{
// //             return (
// //                 <div key={index} onClick={()=>onClick(item)} > {item}</div>
// //             )
// //         })}
// //     </>
// //   )
// // }

// // export default Lists




// type ListProps<T>={
//     // items:Array<string> // items:string[]  ---> Can also be written like this
//     items:T[]
//     // onClick:(value:string)=>void
//     onClick:(value:T)=>void
// }

// const Lists = <T , >({items,onClick}:ListProps<T>) => {
//   return (
//     <>
//         <div>List of Items</div>
//         {items.map((item,index)=>{
//             return (
//                 <div key={index} onClick={()=>onClick(item)} > {item}</div>
//             )
//         })}
//     </>
//   )
// }

// export default Lists

// //


import React from 'react';

type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void; // onClick should take a single item of type T
};

const Lists = <T extends string|number| {id:number}>({ items, onClick }: ListProps<T>) => {
  return (
    <>
      {/* <div>List of Items</div>
      {items.map((item) => (
        <div key={item} onClick={() => onClick(item)}>
          {item}
        </div>
      ))} */}
    </>
  );
};

export default Lists;