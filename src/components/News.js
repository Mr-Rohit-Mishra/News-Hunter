import React,{useEffect,useState} from 'react'
import NewsItem from './NewsItem';
import propTypes  from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function News (props) {
 
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  // document.title = `${capitalizeFirstLetter(props.category)}-News Hunter`;


  const capitalizeFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase()+ string.slice(1);
  }


  const updateNews = async()=>{
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${process.env.REACT_APP_NEWS_API}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json()
    props.setProgress(70);

    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)

    props.setProgress(100);
  }

  
  useEffect(() => {
    updateNews();
  }, [])
  

  // const handlePrevClick = async()=>{
  //   setPage(page-1)
  //   updateNews();
  // }

  // const handleNextClick = async()=>{
  //   setPage(page+1)
  //   updateNews();
    
  // }
  
  const fetchMoreData = async() =>{
    setPage(page+1)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${process.env.REACT_APP_NEWS_API}&page=${page}&pageSize=${props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json()

    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)

  };

  
  return (
    <>
    
      <h2 className="d-flex justify-content-center my-5">DAILY NEWS Top Headlines From {capitalizeFirstLetter(props.category)}Categories</h2>
      {loading && <div className="d-flex justify-content-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden ">Loading...</span>
        </div>
      </div>}
      
      <InfiniteScroll 
        dataLength={articles.length} 
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={
          <div className="d-flex justify-content-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden ">Loading...</span>
            </div>
          </div>
        }
        
      >
      {articles.map((element)=>{
        return <NewsItem key={element.url} title={element.title.slice(0,205)} description={element.description} imgUrl={element.urlToImage?element.urlToImage: "https://images.moneycontrol.com/static-mcnews/2023/12/BeFunky-collage-2023-12-10T120325.700-770x433.jpg"} newsUrl={element.url} author={element.author} published={element.publishedAt} source={element.source.name}/>
      })}

        {/* <div className="pagination d-flex justify-content-between my-5 mx-5">
          <button disabled={this.state.page<=1} type="button" className="btn btn-success" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={(this.state.page +1 >Math.ceil(this.state.totalResults/props.pageSize))} type="button" className="btn btn-success" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}
      </InfiniteScroll>
      
    </>
  )

}

News.defaultProps = {
  country: 'in',
  pageSize: 10,
  category: 'general',
}

News.propTypes = {
  country: propTypes.string,
  pageSize: propTypes.number,
  category: propTypes.string,
}