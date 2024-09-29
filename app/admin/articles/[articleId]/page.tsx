/******************************************************************************
 * @Author                : Jbristhuille<jbristhuille@gmail.com>              *
 * @CreatedDate           : 2024-09-29 19:56:46                               *
 * @LastEditors           : Jbristhuille<jbristhuille@gmail.com>              *
 * @LastEditDate          : 2024-09-29 21:27:16                               *
 *****************************************************************************/

/* SUMMARY
  * Imports
  * UI
  * Styles
  * Save article change
  * Remove article
*/

/* Imports */
import { prisma } from "@/app/lib/prisma";
import { redirect } from "next/navigation";
import { article } from "@prisma/client";
import Link from "next/link";
/***/

/* UI */
import EditArticleForm from "@/app/ui/admin/articles/[articleId]/EditArticleForm";
/***/

/* Styles */
import styles from "@/app/ui/admin/articles/[articleId]/[articleId].module.scss";
import Button from "@/app/ui/Button";
/***/

export default async function Page({params}: {params: {articleId: string}}) {
  const article = await prisma.article.findUnique({where: {id: params.articleId}});
  
  if (!article) redirect("/admin/articles");
  
  /**
  * Save article change
  * @param article - Article mutated 
  */
  const saveArticle = async(article: article) => {
    "use server";

    await prisma.article.update({
      where: {id: article.id},
      data: {
        title: article.title,
        content: article.content
      }
    });

    redirect(`/admin/articles`);
  }
  /***/

  /**
  * Remove article
  */
  const removeArticle = async() => {
    "use server";
    
    await prisma.article.delete({where: {id: article.id}});
    redirect("/admin/articles");
  }
  /***/

  return (
    <div className={styles["article-edit"]}>
      <div className={styles.head}>
        <Link href="/admin/articles">Retour</Link>
        <Button content="-" callback={removeArticle}/>
      </div>
  
      <EditArticleForm article={article} onSubmit={saveArticle} />
    </div>
  )
}
