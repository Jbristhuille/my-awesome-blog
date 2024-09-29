/******************************************************************************
 * @Author                : Jbristhuille<jbristhuille@gmail.com>              *
 * @CreatedDate           : 2024-09-24 13:38:13                               *
 * @LastEditors           : Jbristhuille<jbristhuille@gmail.com>              *
 * @LastEditDate          : 2024-09-29 19:25:31                               *
 *****************************************************************************/

/* SUMMARY
  * Imports
  * Styles
  * Interfaces
*/

"use client";

/* Imports */
import Link from "next/link";
import { formatDate } from "@/app/lib/utils";
/***/

/* Styles */
import styles from "@/app/ui/articles/Article.module.scss";
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
  const maxLength = 255; // Max length for content preview

  return (
    <Link className={styles.article} href={`/articles/${article.id}`}>
      <div className={styles.head}>
        <h3>{article.title}</h3>
        <span>{formatDate(article.created)}</span>
      </div>

      <p>
        {
          article.content.length > maxLength ? 
            article.content.substring(0, maxLength)+"..." : article.content
        }
      </p>
    </Link>
  );
}
