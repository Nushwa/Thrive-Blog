import React from 'react'

export default function Footer() {
  return (
    <div className="footer">
      
 {/* <!-- Site footer --> */}
  <footer className="site-footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <h6>About</h6>
          <p className="text-justify">ThriveBlog.com <i>Stories that will make you thrive </i> is an initiative  to help the upcoming writers with the platform.
            Genki is a carefully crafted magazine Ghost theme with a unique and modern design. 
            The theme contains collection of post layouts so you can share inspiring stories from all disciplines.</p>
        </div>

        <div className="col-xs-6 col-md-3">
          <h6>Categories</h6>
          <ul className="footer-links">
            <li><a href="/">Personal blogs</a></li>
            <li><a href="/">Fashion blogs</a></li>
            <li><a href="/">Lifestyle blogs</a></li>
            <li><a href="/">Travel blogs</a></li>
            <li><a href="/">Food Blogs</a></li>
            <li><a href="/">Templates</a></li>
          </ul>
        </div>

        <div className="col-xs-6 col-md-3">
          <h6>Quick Links</h6>
          <ul className="footer-links">
            <li><a href="/">About Us</a></li>
            <li><a href="/">Contact Us</a></li>
            <li><a href="/">Contribute</a></li>
            <li><a href="/">Privacy Policy</a></li>
            <li><a href="/">Sitemap</a></li>
          </ul>
        </div>
      </div>
      <hr />

      <button className="go-top-btn">
       <a className="an-top" href="#top">Top</a> 
      </button>

    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-sm-6 col-xs-12">
          <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
       <a href="/">ThriveBlog</a>.
          </p>
        </div>

      </div>
    </div>
</footer>

    </div>
  )
}
