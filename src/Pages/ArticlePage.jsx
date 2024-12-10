/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useParams } from "react-router-dom";
import { useFetch } from "../Utils/useFetch";

export default function ArticlePage() {
  const { id } = useParams();
  const { data: articles = [], isLoading: isArticleLoading, error: articleError } = useFetch(`http://localhost:3001/articles/?id=${id}`);
  // Safely retrieve the article
  const article = articles.length > 0 ? articles[0] : null;

  const { data: author = [], isLoading: isAuthorLoading, error: authorError } = useFetch(
    article ? `http://localhost:3001/authors?id=${article.authorId}` : null
  );

  const authorData = author.length > 0 ? author[0] : {name: 'BetterNews'};


  /* unificando o loading state */
  const isLoading = isAuthorLoading || isArticleLoading

  // Handle loading state
  if (isLoading) {
    return <div className="flex flex-col text-center">Loading...</div>;
  }

  // Handle error state
  if (articleError || !article) {
    return <h1>Error: Article not found</h1>;
  }

  if (authorError || !author) {
    return <div>BetterNews</div>;
  }

  /* formatando a data */
  const dateString = article.date
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("pt-BR");

  return (
    <div className="w-full md:w-[80%] lg:w-[65%] flex flex-col font-sans py-4 px-4 md:px-0">
      <p className="text-4xl md:text-6xl">{article.title}</p>
      <p className="text-md text-left mt-4">por <span className="font-bold">{authorData.name}</span> em {formattedDate}</p>
      <p className="text-xl my-4">{article.content}</p>
      <img className="rounded-md w-full h-[250px] md:h-[300px] lg:h-[500px] my-4 object-cover bg-center" src={article.image} alt="" />
      <div className="mt-4 text-xl">
        {/* Place holder text for an article */}
        <article className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis repudiandae magni voluptatem corrupti aspernatur. Nihil dolorum sed amet, ducimus vel asperiores ipsa et natus id, ad laborum dicta! Nemo, laudantium.
          Iste corporis et adipisci omnis voluptates delectus modi aperiam nihil temporibus fugiat doloremque animi, ab similique soluta nemo voluptas quod debitis quasi nostrum porro doloribus eveniet? Illum minus pariatur laborum!
          Totam ipsa voluptates assumenda! Adipisci eos doloremque, repellendus harum delectus esse modi minus quo voluptatibus error laudantium voluptas tenetur ea eveniet perferendis fugit deleniti tempore quaerat a quis aliquam qui?
          Ut praesentium ratione reiciendis expedita. Hic aut dolorum porro? Nostrum perferendis eius saepe voluptatum ullam nihil neque! Modi odio omnis aut sint, rerum illo veritatis pariatur voluptatum, officiis a vitae!
          Fugiat autem laboriosam, beatae saepe quas in voluptatibus at blanditiis nisi aperiam corrupti cum, sit dignissimos praesentium? Laudantium, amet, porro deleniti necessitatibus tenetur eos repellendus, deserunt doloremque blanditiis error dolorum?
          Odit labore culpa quis dolore dicta odio iste velit voluptatibus. Modi blanditiis esse deleniti iusto minima corrupti, sint nobis voluptates officiis dolores voluptate architecto id aspernatur possimus facere. Vitae, soluta.
          Doloremque omnis, nobis modi minima sed expedita aperiam harum, eligendi porro quod amet at ducimus! Dicta eaque soluta, reprehenderit ex similique, iste vitae minus distinctio officia enim doloremque nobis harum!
          At alias eveniet vero facilis quisquam quam voluptatum animi est ad nesciunt adipisci omnis dolor totam voluptas saepe nihil tempore, explicabo molestias debitis. Dignissimos, maxime illum dolore numquam accusamus repudiandae!
          Placeat ratione explicabo doloribus maiores? Ipsa, nam iste maxime neque natus nulla magnam esse, quaerat a expedita architecto adipisci optio debitis eius! Eos molestiae ad earum autem consequuntur dolores quas!
          Ad deserunt itaque veniam tempore natus placeat necessitatibus, sequi libero velit autem esse alias asperiores reiciendis! Ex corrupti doloribus dolor officia labore inventore quam soluta necessitatibus nostrum sunt. Veniam, voluptate?
        </article>

        <article className="my-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolores excepturi, vel aut ad officiis quas iusto nostrum consequatur cupiditate neque odio aliquid magni suscipit rem commodi ratione voluptas assumenda?
          Deserunt beatae ipsa hic perspiciatis. Saepe incidunt excepturi ea recusandae quidem et, iusto error omnis repellendus dolorum exercitationem eos officia minima debitis similique perferendis provident non, nihil nemo unde repellat!
          Similique nihil excepturi accusamus magni blanditiis voluptas facere tempora! Tenetur est porro veniam ab, eum ipsa error recusandae architecto eligendi sed autem dolorum magnam excepturi pariatur nisi necessitatibus laudantium a.
          Libero consequuntur illo quos sequi explicabo hic in magnam quae eaque. Placeat in et, eveniet similique aut nisi facilis omnis reiciendis aliquam incidunt natus! Placeat aperiam sequi laborum? Exercitationem, beatae.
          Rem rerum voluptatum minima tempore aperiam eveniet modi, quis nihil facere eos. Dignissimos, modi cupiditate maiores temporibus placeat voluptatum tempora iste eligendi voluptas impedit, accusantium iusto cumque libero nostrum corporis?
        </article>

        <article className="my-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolores excepturi, vel aut ad officiis quas iusto nostrum consequatur cupiditate neque odio aliquid magni suscipit rem commodi ratione voluptas assumenda?
          Deserunt beatae ipsa hic perspiciatis. Saepe incidunt excepturi ea recusandae quidem et, iusto error omnis repellendus dolorum exercitationem eos officia minima debitis similique perferendis provident non, nihil nemo unde repellat!
          Similique nihil excepturi accusamus magni blanditiis voluptas facere tempora! Tenetur est porro veniam ab, eum ipsa error recusandae architecto eligendi sed autem dolorum magnam excepturi pariatur nisi necessitatibus laudantium a.
          Libero consequuntur illo quos sequi explicabo hic in magnam quae eaque. Placeat in et, eveniet similique aut nisi facilis omnis reiciendis aliquam incidunt natus! Placeat aperiam sequi laborum? Exercitationem, beatae.
          Rem rerum voluptatum minima tempore aperiam eveniet modi, quis nihil facere eos. Dignissimos, modi cupiditate maiores temporibus placeat voluptatum tempora iste eligendi voluptas impedit, accusantium iusto cumque libero nostrum corporis?
        </article>

        <article className="my-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolores excepturi, vel aut ad officiis quas iusto nostrum consequatur cupiditate neque odio aliquid magni suscipit rem commodi ratione voluptas assumenda?
          Deserunt beatae ipsa hic perspiciatis. Saepe incidunt excepturi ea recusandae quidem et, iusto error omnis repellendus dolorum exercitationem eos officia minima debitis similique perferendis provident non, nihil nemo unde repellat!
          Similique nihil excepturi accusamus magni blanditiis voluptas facere tempora! Tenetur est porro veniam ab, eum ipsa error recusandae architecto eligendi sed autem dolorum magnam excepturi pariatur nisi necessitatibus laudantium a.
          Libero consequuntur illo quos sequi explicabo hic in magnam quae eaque. Placeat in et, eveniet similique aut nisi facilis omnis reiciendis aliquam incidunt natus! Placeat aperiam sequi laborum? Exercitationem, beatae.
          Rem rerum voluptatum minima tempore aperiam eveniet modi, quis nihil facere eos. Dignissimos, modi cupiditate maiores temporibus placeat voluptatum tempora iste eligendi voluptas impedit, accusantium iusto cumque libero nostrum corporis?
        </article>
      </div>
      
    </div>
  );
}
