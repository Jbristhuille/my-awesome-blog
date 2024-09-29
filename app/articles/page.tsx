/******************************************************************************
 * @Author                : Jbristhuille<jbristhuille@gmail.com>              *
 * @CreatedDate           : 2024-09-23 19:50:14                               *
 * @LastEditors           : Jbristhuille<jbristhuille@gmail.com>              *
 * @LastEditDate          : 2024-09-29 18:56:55                               *
 *****************************************************************************/

/* SUMMARY
  * Imports
  * Components
  * Styles
*/

/* Imports */
import { prisma } from "../lib/prisma";
/***/

/* Components */
import Article from "../ui/articles/Article";
/***/

/* Styles */
import styles from "@/app/ui/articles/page.module.scss";
/***/

export default async function Page() {
  const articles = await prisma.article.findMany();

  return(
    <div className={styles['articles-container']}>
      <h2>Articles</h2>

      <div className={styles["articles-list"]}>
        {articles.map((el) => <Article key={el.id} article={el}/>)}
      </div>
    </div>
  )
}
