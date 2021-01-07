import React, { Component } from 'react'
import Link from 'next/link'

class Footer extends Component {
  render() {
    let currentYear = new Date().getFullYear()
    return (
      <footer className='footer-area'>
        <div className='divider'></div>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-footer-widget'>
                <div className='navbar-brand text-white'>Make My App</div>
                <p>
                  In 2019 we launched this place with the aim to build scalable intelligent mobile
                  applications that simplify people's lives. We saw a great demand to create mobile
                  apps, that lead to digital transformation. We made our main Concern to have a mix
                  of Quality, value for money, and speed.
                </p>
              </div>
            </div>

            <div className='col-lg-2 col-md-6 col-sm-6'>
              <div className='single-footer-widget'>
                <h3>Company</h3>

                <ul className='services-list'>
                  <li>
                    <Link href='/about'>
                      <a>About Us</a>
                    </Link>
                  </li>
                  {/* <li>
                                        <Link href="/services">
                                            <a>Services</a>
                                        </Link>
                                    </li> */}
                  {/* <li>
                                        <Link href="/features">
                                            <a>Features</a>
                                        </Link>
                                    </li> */}
                  <li>
                    <Link href='/pricing'>
                      <a>Our Pricing</a>
                    </Link>
                  </li>
                  {/* <li>
                                        <Link href="/blog">
                                            <a>Latest News</a>
                                        </Link>
                                    </li> */}
                </ul>
              </div>
            </div>

            <div className='col-lg-2 col-md-6 col-sm-6'>
              <div className='single-footer-widget'>
                <h3>Support</h3>

                <ul className='support-list'>
                  <li>
                    <Link href='/faq'>
                      <a>FAQ's</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/privacy-policy'>
                      <a>Privacy Policy</a>
                    </Link>
                  </li>

                  <li>
                    <Link href='/contact'>
                      <a>Contact Us</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-footer-widget'>
                <h3>Contact Info</h3>

                <ul className='footer-contact-info'>
                  <li>
                    Location: <span>Nasr City, Cairo, Egypt.</span>
                  </li>
                  <li>
                    Email: <span>contact-us@make-your-app.com</span>
                  </li>
                  {/* <li>
                    Phone: <span>+0 (321) 984 754</span>
                  </li> */}
                </ul>
                {/* <ul className='social'>
                  <li>
                    <Link href='#'>
                      <a target='_blank'>
                        <i className='bx bxl-facebook'></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='#'>
                      <a target='_blank'>
                        <i className='bx bxl-twitter'></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='#'>
                      <a target='_blank'>
                        <i className='bx bxl-linkedin'></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='#'>
                      <a target='_blank'>
                        <i className='bx bxl-instagram'></i>
                      </a>
                    </Link>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>

          <div className='copyright-area'>
            <p>
              Copyright @{currentYear} Make-My-App.
            </p>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
