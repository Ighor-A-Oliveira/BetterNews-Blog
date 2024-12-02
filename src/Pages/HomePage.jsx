//import { useEffect } from "react";
//import { useGeneral } from "../Contexts/GeneralContext";
/* import { useFetch } from "../Utils/useFetch"; */


export default function HomePage() {


    //const { data: articles = [], } = useFetch("http://localhost:3001/articles");

    //const { state } = useGeneral();
  
    // Only dispatch after categories are fetched
    /* useEffect(() => {
      
    }, [articles, dispatch]); */

    //console.log(state)
  return (
    <div className="w-full flex flex-col justify-center pt-8 px-16">
        <p className="text-4xl font-sans">Ultimas Noticias</p>
    </div>
  )
}
