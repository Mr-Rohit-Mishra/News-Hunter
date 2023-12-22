import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,description,imgUrl,newsUrl,published,author,source} = this.props;
    return (
        <>
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={imgUrl} className="img-fluid rounded-start" alt="..."/>
              </div>
              <div className="col-md-8">
                  <div className="card-body">
                    <span className="position-absolute   translate-middle badge rounded-pill bg-danger" style={{bottom:'0%', left:'90%', height: '10%'}}>Source:{source}</span>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <div className="d-flex justify-content-between">
                      <p className="card-text"><small>Date-Time:{new Date(published).toGMTString()}</small></p>
                      <p className="card-text"><small>By: {!author?"Unknown":author}</small></p>
                    </div>
                    <a href ={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">Read More</a>
                  </div>
              </div>
            </div>
          </div>
      </>
    )
  }
}
