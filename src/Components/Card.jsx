/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

export default function Card({article}) {

  return (
    <div  className="relative z-10 w-[80%] mx-auto h-[350px] p-1 my-4 bg-cover bg-center rounded-lg transition-shadow duration-300 cursor-pointer"
    style={{ backgroundImage: `url(${article.image})` }}
    >
      <Link to={`artigo/${article.id}`}>
        <div className="absolute h-[50%] w-full z-20 bottom-0 left-0 bg-gradient-to-b from-black/0 to-black/80 hover:from-black/20 hover:to-black/100 p-1 transition-shadow duration-500">
          <p className="text-white text-4xl font-sans text-left absolute bottom-[25px] left-[25px] right-[25px] text-wrap z-30">{article.title}</p>
        </div>
      </Link>
    </div>
  )
}
