/******************************************************************************
 * @Author                : Jbristhuille<jbristhuille@gmail.com>              *
 * @CreatedDate           : 2024-09-24 14:14:02                               *
 * @LastEditors           : Jbristhuille<jbristhuille@gmail.com>              *
 * @LastEditDate          : 2024-09-24 14:32:20                               *
 *****************************************************************************/

/* SUMMARY
  * Interfaces
*/

"use client";

/* Interfaces */
interface IPropsButton {
  callback: (e: any)=>{},
  content: string
}
/***/

export default function Button(props: IPropsButton) {
  return(
    <button onClick={(e) => props.callback({})}>
      {props.content}
    </button>
  );
}
