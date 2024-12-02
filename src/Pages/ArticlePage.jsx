/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


export default function ArticlePage({data, category}) {
    const id = data.id;
    const title = data.title;
    const content = data.content;
    const cat = category;
    const author = 0;
    const date = data.date;
    const imageUrl = data.image;

    
  return (
    <div>{title}</div>
  )
}
