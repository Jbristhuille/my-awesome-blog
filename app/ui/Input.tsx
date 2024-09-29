/******************************************************************************
 * @Author                : Jbristhuille<jbristhuille@gmail.com>              *
 * @CreatedDate           : 2024-09-29 20:23:17                               *
 * @LastEditors           : Jbristhuille<jbristhuille@gmail.com>              *
 * @LastEditDate          : 2024-09-29 20:25:12                               *
 *****************************************************************************/

/* SUMMARY
  * Imports
  * Styles
*/

"use client";

/* Imports */

/***/

/* Styles */
import styles from "@/app/ui/Input.module.scss";
/***/

export default function Input() {
  return (
  <div className={styles.input}>
    <label htmlFor="title">Titre:</label>
    <input  type="text"
            id="title"
            value={article.title}
            onChange={(e) => article.title = e.target.value} />
  </div>
  )
}
