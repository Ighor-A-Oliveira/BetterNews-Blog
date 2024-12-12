import PropTypes from 'prop-types'; // Importa a biblioteca PropTypes
import Card from "../Components/Card";
import { useGeneral } from "../Contexts/GeneralContext";
import { useFetch } from "../Utils/useFetch";

export default function CategoryPage({ title }) {
  const { state } = useGeneral();

  
  // Get category data based on the title
  const categoryId = state.categories.filter((category) => category.name === title);
  const categoryData = categoryId[0]; // Assuming categoryId[0] exists and is valid

  // Check if categoryData is valid before making the API call
  if (!categoryData) {
    return <p>Page not found</p>; // Display a message if no category is found
  }
  

  console.log(categoryData);

  // Fetch articles based on category ID
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: articles = [], loading: isLoadingArticles, errorArticles } = useFetch(
    `http://localhost:3001/articles?categoryId=${categoryData.id}`
  );
  
  console.log(articles);

  return (
    <div className="w-full md:w-[80%] lg:w-[60%] flex flex-col justify-start items-center pt-20 lg:pt-4">
      <p className='text-4xl font-sans text-center mb-4'>{categoryData.name}</p>
      <div className="w-full flex flex-row flex-wrap">
        
        {
        isLoadingArticles ? (
          <p>Loading...</p> // Add loading state  
        ) : errorArticles ? (
          <p>Error loading articles</p> // Error handling
        ) : (
          articles.map((article) => {
            return <Card key={article.id} article={article}/> // Return the article title
          })
        )}
      </div>
    </div>
    
  );
}

// Define the expected prop types
CategoryPage.propTypes = {
  title: PropTypes.string.isRequired, // title deve ser uma string e é obrigatório
};
