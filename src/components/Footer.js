import React from 'react'

export default function Footer() {
  
  return (
    <>
      <div className="footer-container">
          <footer className="py-5" >
              <div className="row">
                  <div className="col-6 col-md-2 mb-3">
                    <h5>Buisness</h5>
                    <ul className="nav flex-column">
                      <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">India vs Australia </a></li>
                      <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">India vs Australia </a></li>
                      <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">India vs Australia </a></li>
                      <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">India vs Australia </a></li>
                      <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">India vs Australia </a></li>
                    </ul>
                  </div>
                  <div className="col-6 col-md-2 mb-3">
                    <h5>ENTERTAINMENT</h5>
                    <ul className="nav flex-column">
                      <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Bollywood News</a></li>
                      <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Hollywood News</a></li>
                      <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Music Tamil Cinema</a></li>
                      <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Cinema TV Web Series</a></li>
                      <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Others</a></li>
                    </ul>
                  </div>
                  <div className="col-6 col-md-2 mb-3">
                    <h5>HEALTH</h5>
                    <ul className="nav flex-column">
                      <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Art and Culture </a></li>
                      <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Brunch Fashion Festivals</a></li>
                      <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Health</a></li>
                      <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Recipes</a></li>
                      <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Relationship</a></li>
                    </ul>
                  </div>
                  <div className="col-md-5 offset-md-1 mb-3">
                      <form>
                          <h5>Subscribe to our newsletter</h5>
                          <p>Monthly digest of what's new and exciting from us.</p>
                          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                              <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                              <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
                              <button className="btn btn-primary" type="button">Subscribe</button>
                          </div>
                      </form>
                  </div>
              </div>
              <hr/>
          </footer>
      </div>
    </>
  )
  
}



