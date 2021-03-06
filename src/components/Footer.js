import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <footer id="footer">
          <section>
            <h2>Aliquam sed mauris</h2>
            <p>Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae tincidunt odio.</p>
            <ul className="actions">
              <li><a href="generic.html" className="button">Learn More</a></li>
            </ul>
          </section>
          <section>
            <h2>Etiam feugiat</h2>
            <dl className="alt">
              <dt>Address</dt>
              <dd>1234 Somewhere Road • Nashville, TN 00000 • USA</dd>
              <dt>Phone</dt>
              <dd>(000) 000-0000 x 0000</dd>
              <dt>Email</dt>
              <dd><a href="#">information@untitled.tld</a></dd>
            </dl>
            <ul className="icons">
              <li><a href="#" className="icon brands fa-twitter alt"><span className="label">Twitter</span></a></li>
              <li><a href="#" className="icon brands fa-facebook-f alt"><span className="label">Facebook</span></a></li>
              <li><a href="#" className="icon brands fa-instagram alt"><span className="label">Instagram</span></a></li>
              <li><a href="#" className="icon brands fa-github alt"><span className="label">GitHub</span></a></li>
              <li><a href="#" className="icon brands fa-dribbble alt"><span className="label">Dribbble</span></a></li>
            </ul>
          </section>
          <p className="copyright">© Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
        </footer>
    );
  };
};
