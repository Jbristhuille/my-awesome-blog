/******************************************************************************
 * @Author                : Jbristhuille<jbristhuille@gmail.com>              *
 * @CreatedDate           : 2024-09-29 18:24:26                               *
 * @LastEditors           : Jbristhuille<jbristhuille@gmail.com>              *
 * @LastEditDate          : 2024-09-29 19:31:24                               *
 *****************************************************************************/

/* SUMMARY
  * Imports
  * Styles
*/

/* Imports */
import { prisma } from "@/app/lib/prisma";
import { redirect } from "next/navigation";
/***/

/* Styles */
import styles from "@/app/ui/articles/[articleId].module.scss";
/***/

export default async function Page({params}: {params: {articleId: string}}) {
  const article = await prisma.article.findUnique({where: {id: params.articleId}}); 
  
  if (!article) redirect("/");
  
  let p = article.content.split("\n");

  return (
    <div className={styles.article}>
      <h2>{article.title}</h2>

      {p.map((el, i) => <p key={`${i}-p`}>{el}</p>)}
    </div>
  );
}
