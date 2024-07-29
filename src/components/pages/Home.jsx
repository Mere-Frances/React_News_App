import {useState, useEffect} from 'react'
import axios from 'axios';
import { useArticlesContext } from '../hooks/useArticlesContext';

// API key
const apiKey = import.meta.env.VITE_NEWS_API_KEY

const Home = () => {
  // we need to create state for selects
  // [variable + method to set the variable]
  const [country, setCountry] = useState('');
  const [category, setCategory] = useState('');

  // // state for articles
  // const [articles, setArticles] = useState(null);

  // state for loading
  const [loading, setLoading] = useState(true)

  // bring in state and dispatch function
  const {articles, dispatch} = useArticlesContext()

  useEffect(() => {
    // set loading to true
    setLoading(true)
    // fetch function
    const fetchArticles = async () => {
      await axios.get(`https://newsapi.org/v2/top-headlines?language=en&country=${country}&category=${category}&apiKey=${apiKey}`)
        .then(response => {
          console.log(response.data.articles)
          // setArticles(response.data.articles)
          dispatch({type:"GET_ARTICLES",payload: response.data.articles})
          setLoading(false)
        })
        .catch(error => {
          console.log(error)
          setLoading(true)
        })
    }
    fetchArticles()
    // console.log("country state is now " + country)
    // console.log("category state is now " + category)
  }, [country, category])

  // function to handle country change
  const handleCountryChange = (event) => {
    let newCountry = event.target.value
    // console.log(newCountry);
    setCountry(newCountry);
    // console.log("state is now: " + newCountry);

  }

  // function to handle category change
  const handleCategoryChange = (event) => {
    let newCategory = event.target.value
    // console.log(newCategory);
    setCategory(newCategory);
  }

  // mapped articles component
  const Articles = ({articles}) => {
    const mappedArticles = articles.map((article, index) => {
      // map return
      return (
        // maps need an index key
        <div key={index} className="article">
          <h2>{article.title}</h2>
          <h4>{article.author}</h4>
          <p>{article.content}</p>
          {/* THIS IS HOW YOU GO STRAIGHT TO THE LINK */}
          {/* <a href={article.url}>Read more</a> */}
        </div>
      )
    })
    // articles component return
    return (
      <>
        {mappedArticles}
      </>
    )
  }

  return (
    <div className="home-container">
      <div className="filter-container">
        {/* country filter */}
        <div className="filter-flex-container">
        <label htmlFor="country-select">Country:</label>
          <select name="country-select" id="country-select" onChange={handleCountryChange}>
            <option value="">Any</option>
            <option value="us">USA</option>
            <option value="gb">Britian</option>
            <option value="au">Australia</option>
            <option value="nz">NZ</option>
            <option value="cn">China</option>
            <option value="fr">France</option>
          </select>
        </div>

        {/* category filter */}
        <div className="filter-flex-container">
          <label htmlFor="category-select">Category:</label>
          <select name="category-select" id="category-select" onChange={handleCategoryChange}>
            <option value="">Any</option>
            <option value="business">Business</option>
            <option value="entertainment">Entertainment</option>
            <option value="health">Health</option>
            <option value="science">Science</option>
            <option value="sport">Sport</option>
            <option value="technology">Technology</option>
          </select>
        </div>
      </div>
      {/* end of filters */}

      <div className="article-container">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <Articles articles={articles}/>
        )}
      </div>

    </div>
  )
}

export default Home
