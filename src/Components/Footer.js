import React from 'react';

const Footer = () => {
    return (
        <footer className="page-footer grey lighten-5">
          <div className="container">
            <div className="row">
              <div className="col l5 s12">
                <h4 className="black-text">Contact Details:</h4>
                <p className="black-text text-lighten-3 flow-text">Do you like my work? Are you looking for someone to hire or to invite into collaboration with your project? Feel free to email or call me.</p>
              </div>
              <div className="col l6 offset-l1 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><h5 className="black-text text-lighten-3 flow-text" >tel: +487523238855</h5></li>
                  <li><h5 className="black-text text-lighten-3 flow-text" >email: marcinkondol@gmail.com</h5></li>
                  <li><h5><a className="orange-text text-lighten-1 flow-text" href="https://github.com/kawalDziada" target="_blank" rel="noopener noreferrer"><span className="black-text">github:</span> https://github.com/kawalDziada</a></h5></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="black-text container">
            © 2019 L&M Corporation
            </div>
          </div>
        </footer>
    )
}


export default Footer