import React from 'react'

export default function NewsItem(props) {
  
  let {title,description,imgUrl,newsUrl,published,author,source} = props;
  return (
      <>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={imgUrl} className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
                
                
                <div className="card-body">
                  <div className="d-flex justify-content-center position-absolute"style={{padding:'0.5rem',right:'0',bottom:'0'}}>
                    <span className="badge bg-danger" style={{borderRadius:'0'}} >Source:{source}</span>                
                  </div>
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

