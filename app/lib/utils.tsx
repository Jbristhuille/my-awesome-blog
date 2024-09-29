/******************************************************************************
 * @Author                : Jbristhuille<jbristhuille@gmail.com>              *
 * @CreatedDate           : Invalid Date                                      *
 * @LastEditors           : Jbristhuille<jbristhuille@gmail.com>              *
 * @LastEditDate          : 2024-09-29 19:23:26                               *
 *****************************************************************************/

/* SUMMARY
  * Format date to french zone
*/

/**
* Format date in french
* @param date - Date to format
* @return - Formated date 
*/
const formatDate = (date: Date) => {
  const yyyy = date.getFullYear();
  const dd = date.getDate();
  const mm = date.getMonth()+1;

  return `${String(dd).padStart(2, "0")}/${String(mm).padStart(2, "0")}/${yyyy}`;
}
/***/

export {
  formatDate
};
