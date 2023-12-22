import React, { Component } from 'react'
import NewsItem from './NewsItem';
import propTypes  from 'prop-types';


export default class News extends Component {
  articles = []


  static defaultProps ={
    country: 'in',
    pageSize: 10,
    category: 'general'
  }
  static propTypes ={
    country: propTypes.string,
    pageSize: propTypes.number,
    category: propTypes.string
  }

  capitalizeFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase()+ string.slice(1);
  }

  constructor(props){
    super(props);
    this.state={
      articles: this.articles,
      loading: false,
      page:1
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)}-News Hunter`;
  }

  async updateNews(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1014d987f9a5419ca103aef96084cf44&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      articles:parsedData.articles,
      totalResults: parsedData.totalResults,
      loading:false
    })
  }

  async componentDidMount(){
    this.updateNews();
  }

  handlePrevClick = async()=>{
    this.updateNews();
    this.setState({page: this.state.page -1})

  }

  handleNextClick = async()=>{
    this.updateNews();
    this.setState({page: this.state.page +1})
    
  }





  render() {
    return (
      <>
      <h2 className="d-flex justify-content-center my-5">DAILY NEWS Top Headlines From {this.capitalizeFirstLetter(this.props.category)}Categories</h2>
      {!this.state.loading && this.state.articles.map((element)=>{
        return <NewsItem key={element.url} title={element.title.slice(0,205)} description={element.description} imgUrl={element.urlToImage?element.urlToImage: "https://images.moneycontrol.com/static-mcnews/2023/12/BeFunky-collage-2023-12-10T120325.700-770x433.jpg"} newsUrl={element.url} author={element.author} published={element.publishedAt} source={element.source.name}/>
      })}
      {this.state.loading && <div className="d-flex justify-content-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden ">Loading...</span>
        </div>
      </div>}
      <div className="pagination d-flex justify-content-between my-5 mx-5">
        <button disabled={this.state.page<=1} type="button" className="btn btn-success" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button disabled={(this.state.page +1 >Math.ceil(this.state.totalResults/this.props.pageSize))} type="button" className="btn btn-success" onClick={this.handleNextClick}>Next &rarr;</button>
      </div>
      
      </>
    )
  }
}
