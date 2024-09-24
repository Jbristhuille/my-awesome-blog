/******************************************************************************
 * @Author                : Jbristhuille<jbristhuille@gmail.com>              *
 * @CreatedDate           : 2024-09-24 13:50:23                               *
 * @LastEditors           : Jbristhuille<jbristhuille@gmail.com>              *
 * @LastEditDate          : 2024-09-24 14:38:00                               *
 *****************************************************************************/

/* SUMMARY
  * Imports
  * Components
*/

/* Imports */
import { prisma } from "@/app/lib/prisma";
/***/

/* Components */
import Button from "@/app/lib/Button";
import Article from "@/app/ui/articles/Article";
import { redirect } from "next/navigation";
/***/

export default async function Page() {
  let articles = await prisma.article.findMany();
  
  async function createArticle() {
    "use server";

    let ret = await prisma.article.create({
      data: {
        title: "New article",
        content: "Hello world"
     }
    });

    redirect("/admin/articles");
  }

  return(
    <div>
      {articles.map(el => <Article key={el.id} article={el}/>)}
      <Button callback={createArticle} content="Test"/>
    </div>
  );
}
