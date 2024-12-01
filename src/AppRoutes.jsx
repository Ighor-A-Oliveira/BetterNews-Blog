import { Route, Routes } from "react-router-dom"
import HomeLayout from "./Pages/HomeLayout"
import { useFetch } from "./Utils/useFetch"
import CategoryPage from "./Pages/CategoryPage"
import { useGeneral } from "./Contexts/GeneralContext";
import { useEffect } from "react";

function AppRoutes() {

  const { data: categories = [], } = useFetch("http://localhost:5000/categories");

  const { dispatch } = useGeneral();

  // Only dispatch after categories are fetched
  useEffect(() => {
    if (categories && categories.length > 0) {
      dispatch({ type: "LOAD_CATEGORY", payload: categories });
    }
  }, [categories, dispatch]);

  console.log(categories)
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        {categories.map((category) => (
          <Route
            key={category.id}
            path={category.name.toLowerCase()}
            element={<CategoryPage title={category.name} />}
          />
        ))}
        <Route path="*" element={<p>Pagina Não Encontrada</p>}></Route>
      </Route>
    </Routes>

  )
}

export default AppRoutes