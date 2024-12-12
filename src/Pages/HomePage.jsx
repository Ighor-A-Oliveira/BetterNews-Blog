/* eslint-disable no-unused-vars */
import { useFetch } from "../Utils/useFetch";
import Card from '../Components/Card.jsx'
import { useState } from "react";



export default function HomePage() {

  const [pageNumber, setPageNumber] = useState(1) 
  const { data: articles = [], loading: isLoadingArticles, errorArticles } = useFetch(
    `http://localhost:3001/articles?_page=${pageNumber}&_limit=${pageNumber*5}`
  );
  console.log(articles)

  if (!articles) {
    return <p>Page not found</p>; // Display a message if no category is found
  }
    
  return (
    <div className="w-full md:w-[80%] lg:w-[60%] flex flex-col justify-start items-center pt-20 lg:pt-4">
        <p className="text-4xl font-sans">Ultimas Noticias</p>
        <div className="w-full flex flex-row flex-wrap">
          {articles.map((article) => (
            <Card key={article.id} article={article}/>
          ))}
        </div>

        <div className="bg-stone-950 text-white w-[80%] lg:w-[95%] p-4 text-center my-4 cursor-pointer hover:bg-stone-950/70" onClick={() => {setPageNumber(pageNumber+1)}}>
          Ver Mais Artigos
        </div>
    </div>
  )
}
