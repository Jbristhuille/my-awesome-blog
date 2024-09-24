/******************************************************************************
 * @Author                : Jbristhuille<jbristhuille@gmail.com>              *
 * @CreatedDate           : 2024-09-24 13:38:13                               *
 * @LastEditors           : Jbristhuille<jbristhuille@gmail.com>              *
 * @LastEditDate          : 2024-09-24 13:43:45                               *
 *****************************************************************************/

/* SUMMARY
  * Styles
  * Interfaces
*/

"use client";

/* Styles */
import styles from "@/app/ui/articles/Article.module.css";
/***/

/* Interfaces */
interface IPropsArticle {
  article: {
    id: string,
    title: string,
    content: string,
    created: Date
  }
};
/***/

export default function Article({article}: IPropsArticle) {
  return (
    <div className={styles.article}>{article.title}</div>
  );
}
