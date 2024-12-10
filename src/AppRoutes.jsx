/* eslint-disable no-unused-vars */
import { Route, Routes } from "react-router-dom";
import HomeLayout from "./Pages/HomeLayout";
import { useFetch } from "./Utils/useFetch";
import CategoryPage from "./Pages/CategoryPage";
import { useGeneral } from "./Contexts/GeneralContext";
import { useEffect, useState } from "react";
import HomePage from "./Pages/HomePage";
import ArticlePage from "./Pages/ArticlePage";

function AppRoutes() {
  const { data: categories = [] } = useFetch("http://localhost:3001/categories");
  const { state, dispatch } = useGeneral();
  console.log(state)

  

  // Carregar categorias no estado
  useEffect(() => {
    if (categories && categories.length > 0) {
      dispatch({ type: "LOAD_CATEGORY", payload: categories });
    }
  }, [categories, dispatch]);

  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<HomePage />} />

        {/* Roteamento das categorias */}
        {categories.map((category, index) => (
          <>
          <Route
            key={category.id}
            path={category.name.toLowerCase()}
            element={<CategoryPage title={category.name} />}
            
          />
          <Route
            key={index}
            path={`${category.name.toLowerCase()}/artigo/:id`}
            element={<ArticlePage />}
          />
          </>
        ))}

          <Route
            path={`/artigo/:id`}
            element={<ArticlePage />}
          />

          

        {/* Rota de "Página Não Encontrada" */}
        <Route path="/*" element={<p>Pagina Não Encontrada</p>} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
