/******************************************************************************
 * @Author                : Jbristhuille<jbristhuille@gmail.com>              *
 * @CreatedDate           : 2024-09-23 19:50:14                               *
 * @LastEditors           : Jbristhuille<jbristhuille@gmail.com>              *
 * @LastEditDate          : 2024-09-23 20:09:24                               *
 *****************************************************************************/

/* SUMMARY
  * Imports
*/

/* Imports */
import { prisma } from "../lib/prisma";
/***/

export default async function Page() {
  const articles = await prisma.article.findMany();

  console.log(articles); // debug

  return(
    <div>
      Number of articles: {articles.length || 0}
    </div>
  )
}
