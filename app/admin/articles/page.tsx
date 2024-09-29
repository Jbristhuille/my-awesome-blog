/******************************************************************************
 * @Author                : Jbristhuille<jbristhuille@gmail.com>              *
 * @CreatedDate           : 2024-09-29 19:38:03                               *
 * @LastEditors           : Jbristhuille<jbristhuille@gmail.com>              *
 * @LastEditDate          : 2024-09-29 19:54:21                               *
 *****************************************************************************/

/* SUMMARY
  * Imports
  * Styles
  * Create new article and redirect to edit page
*/

/* Imports */
import { prisma } from "@/app/lib/prisma";
import Link from "next/link";
/***/

/* Styles */
import styles from "@/app/ui/admin/articles/page.module.scss";
import { formatDate } from "@/app/lib/utils";
import Button from "@/app/ui/Button";
import { redirect } from "next/navigation";
/***/

export default async function Page() {
  const articles = await prisma.article.findMany();

  /**
  * Create new article and redirect to edit page
  */
  const createArticle = async() => {
    "use server";
    
    let newArticle = await prisma.article.create({
      data: {
        title: "New Article",
        content: ""
      }
    });

    redirect(`/admin/articles/${newArticle.id}`);
  }
  /***/

  return (
    <div className={styles["admin-articles"]}>
      <div className={styles.head}>
        <h2>Liste des articles</h2>
        <Button callback={createArticle} content="+"/>
      </div>

      <div className={styles["articles-list"]}>
        {articles.map((article) => (
          <Link key={article.id} href={`/admin/articles/${article.id}`}>
            <div>
              <span>{article.id} - </span>
              <b>{article.title}</b>
            </div>
            
            <span>{formatDate(article.created)}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
