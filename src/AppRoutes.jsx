/* eslint-disable no-unused-vars */
import { Route, Routes } from "react-router-dom";
import HomeLayout from "./Pages/HomeLayout";
import { useFetch } from "./Utils/useFetch";
import CategoryPage from "./Pages/CategoryPage";
import { useGeneral } from "./Contexts/GeneralContext";
import { useEffect, useState } from "react";
import HomePage from "./Pages/HomePage";
import ArticlesPage from "./Pages/ArticlesPage";

function AppRoutes() {
  const { data: categories = [] } = useFetch("http://localhost:3001/categories");
  const { data: articles = [] } = useFetch("http://localhost:3001/articles"); // Pega todos os artigos
  const [totalArticles, setTotalArticles] = useState(0);
  setTotalArticles(articles.length)

  const { state, dispatch } = useGeneral();

  
  const articlesPerPage = 10; // número de artigos por página

  // Carregar categorias no estado
  useEffect(() => {
    if (categories && categories.length > 0) {
      dispatch({ type: "LOAD_CATEGORY", payload: categories });
    }


    //console.log("Artigos:", articles); // Verificar o conteúdo dos artigos
  }, [categories, dispatch]);

  // Calculando o número total de páginas
  const totalPages = Math.ceil(totalArticles / articlesPerPage);

  console.log("Total de artigos:", totalArticles); // Verificando o total de artigos

  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<HomePage />} />

        {/* Roteamento das categorias */}
        {categories.map((category) => (
          <Route
            key={category.id}
            path={category.name.toLowerCase()}
            element={<CategoryPage title={category.name} />}
          />
        ))}

        {/* Roteamento das páginas de artigos com base no número total de artigos */}
        {Array.from({ length: totalPages }, (_, index) => (
          <Route
            key={index}
            path={`/artigo/pag/${index + 1}`}
            element={<ArticlesPage page={index + 1} />}
          />
        ))}

        {/* Rota de "Página Não Encontrada" */}
        <Route path="/*" element={<p>Pagina Não Encontrada</p>} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
