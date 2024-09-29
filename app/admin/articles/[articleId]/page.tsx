/******************************************************************************
 * @Author                : Jbristhuille<jbristhuille@gmail.com>              *
 * @CreatedDate           : 2024-09-29 19:56:46                               *
 * @LastEditors           : Jbristhuille<jbristhuille@gmail.com>              *
 * @LastEditDate          : 2024-09-29 20:50:13                               *
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
import EditArticleForm from "@/app/ui/admin/articles/[articleId]/EditArticleForm";
import { article } from "@prisma/client";
/***/

export default async function Page({params}: {params: {articleId: string}}) {
  const article = await prisma.article.findUnique({where: {id: params.articleId}});
  
  if (!article) redirect("/admin/articles");
  
  const saveArticle = async(article: article) => {
    "use server";

    await prisma.article.update({
      where: {id: article.id},
      data: {
        title: article.title,
        content: article.content
      }
    });

    redirect(`/admin/articles/${article.id}`);
  }

  return (
    <div>
      <EditArticleForm article={article} onSubmit={saveArticle} />
    </div>
  )
}
