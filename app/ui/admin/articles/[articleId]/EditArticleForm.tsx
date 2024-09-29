/******************************************************************************
 * @Author                : Jbristhuille<jbristhuille@gmail.com>              *
 * @CreatedDate           : 2024-09-29 20:29:40                               *
 * @LastEditors           : Jbristhuille<jbristhuille@gmail.com>              *
 * @LastEditDate          : 2024-09-29 21:15:45                               *
 *****************************************************************************/

/* SUMMARY
  * Imports
  * Interfaces
  * Styles
*/

"use client";

/* Imports */
import { useState } from "react";
import { article } from "@prisma/client";
/***/

/* Interfaces */
interface IPropsEditArticleForm {
  article: {
    title: string,
    id: string,
    content: string,
    created: Date
  }
  onSubmit: (article: article)=>Promise<void>
}
/***/

/* Styles */
import styles from "@/app/ui/admin/articles/[articleId]/EditArticleForm.module.scss";
import Button from "@/app/ui/Button";
/***/

export default function EditArticleForm(props: IPropsEditArticleForm) {
  const [title, titleChange] = useState(props.article.title);
  const [content, contentChange] = useState(props.article.content);

  return (
    <div className={styles["edit-article-form"]}>
      <div className="input">
        <label htmlFor="title">Titre:</label>
        <input type="text" value={title} onChange={(e) => titleChange(e.target.value)} />
      </div>

      <div className="input">
        <label htmlFor="content">Contenu:</label>
        <textarea id="content" value={content} onChange={(e) => contentChange(e.target.value)}></textarea>
      </div>

      <Button content="Sauvegarder"
              callback={(e) => props.onSubmit({...props.article, title: title, content: content})}/>
    </div>
  );
}
