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
    <div className="w-[50%] flex flex-col justify-start items-center pt-8 px-16">
        <p className="text-4xl font-sans">Ultimas Noticias</p>
        <div className="w-full">
          {articles.map((article) => (
            <Card key={article.id} article={article}/>
          ))}
        </div>

        <div className="bg-stone-950 text-white w-full p-4 text-center my-4 cursor-pointer hover:bg-stone-950/70" onClick={() => {setPageNumber(pageNumber+1)}}>
          Ver Mais Artigos
        </div>
    </div>
  )
}
