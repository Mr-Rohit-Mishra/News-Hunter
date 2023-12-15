import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,description,imgUrl,newsUrl,published,author} = this.props;
    return (
        <>
          <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={imgUrl} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{title}</h5>
                      <p className="card-text">{description}</p>

                      <div className="d-flex justify-content-between">
                        <p className="card-text">{published}</p>
                        <p className="card-text">{author}</p>
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
