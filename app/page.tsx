import React from "react";

export default function Page() {
    return <>
    
    <body>

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    <div className="container py-4">
        <div className="row">

            <div className="col-12 mb-4">
                <h1>Elevate Your Coffee Experience</h1>
                <p className="small m-0">
                    Dive into the world of artisanal coffee roasting
                </p>
            </div>

            <div className="col-3">
                <div className="list-group">
                    <a href="home.html" className="list-group-item list-group-item-action">
                        Home
                    </a>
                    <a href="about.html" className="list-group-item list-group-item-action">
                        About Us
                    </a>
                    <a href="contact.html" className="list-group-item list-group-item-action">
                        Contact Us
                    </a>
                </div>
                <p className="small text-danger text-center mt-3 text-warning">
                    Coffee: the magic potion that turns morning mayhem into midday clarity.
                </p>
            </div>

            <div className="col-9">
                <img className="d-block w-100 mb-3" src="https://fastly.picsum.photos/id/251/1280/720.jpg?hmac=YDyCcHsQDDzvzCfZ-MLi2fr2pFqpoH9OqSqmJFBwV7w" />
                <h1>Welcome</h1>
                <p>
                    Explore our meticulously sourced beans, learn about our roasting process, and discover unique flavor profiles. Join us on a journey from farm to cup, and experience the true essence of coffee like never before!
                </p>
            </div>

        </div>
    </div>

</body>
    
    
    
    
    </>
  }

