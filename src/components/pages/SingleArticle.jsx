import { useParams } from "react-router-dom"
import { useArticlesContext } from "../hooks/useArticlesContext"
import { format } from "date-fns"

const SingleArticle = () => {
  const {id} = useParams()
  // bring in the context (global state)
  const {articles} = useArticlesContext()

  const article = articles[id];
  const formattedDate = format(new Date(article.publishedAt), "h:mm a dd MMMM yyyy");

  return (
    <div>
      <img src={article.urlToImage} alt={article.title + " Image"} />
      <h2>{article.title}</h2>
      <h3>{formattedDate}</h3>
      <h3>{article.author}</h3>
      <p>{article.content}</p>
      <a href={article.url} target="_blank">See Full Article</a>
    </div>
  )
}

export default SingleArticle
