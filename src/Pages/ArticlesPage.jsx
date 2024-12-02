import { Link } from "react-router-dom";
import { useFetch } from "../Utils/useFetch";

/* eslint-disable react/prop-types */
export default function ArticlesPage({ page }) {
    const { data: articles = [] } = useFetch(`http://localhost:3001/articles?_limit=10&_page=${page}`);
  
    return (
      <div>
        <h2>Artigos - Página {page}</h2>
        <ul>
          {articles.map((article) => (
            <li key={article.id}>
              <Link to={`/artigo/${article.id}`}>{article.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }