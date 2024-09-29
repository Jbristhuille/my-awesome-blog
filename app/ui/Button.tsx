/******************************************************************************
 * @Author                : Jbristhuille<jbristhuille@gmail.com>              *
 * @CreatedDate           : 2024-09-24 14:14:02                               *
 * @LastEditors           : Jbristhuille<jbristhuille@gmail.com>              *
 * @LastEditDate          : 2024-09-29 19:55:23                               *
 *****************************************************************************/

/* SUMMARY
  * Interfaces
  * Styles
*/

"use client";

/* Interfaces */
interface IPropsButton {
  callback: (e: any)=>void,
  content: string
}
/***/

/* Styles */
import styles from "@/app/ui/Button.module.scss";
/***/

export default function Button(props: IPropsButton) {
  return(
    <button className={styles.button} onClick={(e) => props.callback({})}>
      {props.content}
    </button>
  );
}
