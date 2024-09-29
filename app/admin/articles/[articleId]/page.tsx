/******************************************************************************
 * @Author                : Jbristhuille<jbristhuille@gmail.com>              *
 * @CreatedDate           : 2024-09-29 19:56:46                               *
 * @LastEditors           : Jbristhuille<jbristhuille@gmail.com>              *
 * @LastEditDate          : 2024-09-29 19:59:12                               *
 *****************************************************************************/

/* SUMMARY
  * Imports
*/

/* Imports */
import { prisma } from "@/app/lib/prisma";
import { redirect } from "next/navigation";
/***/

export default async function Page({params}: {params: {articleId: string}}) {
  const article = await prisma.article.findUnique({where: {id: params.articleId}});

  if (!article) redirect("/admin/articles");

  return (
    <div>
      <div>
        <label htmlFor="title">Titre:</label>
        <input type="text" id="title" value={article.title} />
      </div>
    </div>
  )
}
