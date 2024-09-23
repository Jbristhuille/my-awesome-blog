/******************************************************************************
 * @Author                : Jbristhuille<jbristhuille@gmail.com>              *
 * @CreatedDate           : 2024-09-23 19:39:21                               *
 * @LastEditors           : Jbristhuille<jbristhuille@gmail.com>              *
 * @LastEditDate          : 2024-09-23 19:48:52                               *
 *****************************************************************************/

/* SUMMARY
  * Imports
  * Metadata
*/

/* Imports */
import type { Metadata } from "next";
import "./ui/globals.css";
/***/

/* Metadata */
export const metadata: Metadata = {
  title: "My awesome blog",
  description: "Blog test project, build with NextJS",
};
/***/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
