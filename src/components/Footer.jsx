import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer id="footer" class="page__footer">
        <div class="block block--basic block--dukefooter">
          <div class="basic__body">
            <div class="container" id="footer-wrapper">
              <nav class="footer-holder no-gutters row">
                <div
                  class="col-lg-3 connect-footer"
                  itemscope=""
                  itemtype="http://schema.org/Organization"
                >
                  <div class="row">
                    <div class="col-12 col-lg-12 col-md-6">
                      <a class="footer-logo" href="/" itemprop="url">
                        <span class="sr-only">Childrean Health Home Page</span>
                      </a>
                      <ul class="social-share list-inline">
                        <li class="fb list-inline-item">
                          <a
                            class="social-share-link"
                            href="http://www.facebook.com/dukehealth"
                            itemprop="sameAs"
                            target="_blank"
                          >
                            <span class="sr-only">Facebook</span>
                            <i
                              class="fab fa-facebook-square"
                              aria-hidden="true"
                            >
                              <span class="sr-only">Facebook</span>
                            </i>
                          </a>
                        </li>
                        <li class="tw list-inline-item">
                          <a
                            class="social-share-link"
                            href="http://twitter.com/DukeHealth"
                            itemprop="sameAs"
                            target="_blank"
                          >
                            <span class="sr-only">Twitter</span>
                            <i class="fab fa-twitter-square" aria-hidden="true">
                              <span class="sr-only">Twitter</span>
                            </i>
                          </a>
                        </li>
                        <li class="yt list-inline-item">
                          <a
                            class="social-share-link"
                            href="http://youtube.com/user/"
                            itemprop="sameAs"
                            target="_blank"
                          >
                            <span class="sr-only">YouTube</span>
                            <i class="fab fa-youtube-square" aria-hidden="true">
                              <span class="sr-only">YouTube</span>
                            </i>
                          </a>
                        </li>
                        <li class="ig list-inline-item">
                          <a
                            class="social-share-link"
                            href="https://www.instagram.com/"
                            itemprop="sameAs"
                            target="_blank"
                          >
                            <span class="sr-only">Instagram</span>
                            <i class="fab fa-instagram" aria-hidden="true">
                              <span class="sr-only">Instagram</span>
                            </i>
                          </a>
                        </li>
                        <li class="linkedin-in list-inline-item">
                          <a
                            class="social-share-link"
                            href="https://www.linkedin.com/"
                            itemprop="sameAs"
                            target="_blank"
                          >
                            <span class="sr-only">LinkedIn</span>
                            <i class="fab fa-linkedin-in" aria-hidden="true">
                              <span class="sr-only">LinkedIn</span>
                            </i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-12 col-lg-12 col-md-6 text-md-end text-lg-start"></div>
                  </div>
                </div>
                <div class="col-lg-9">
                  <div class="row">
                    <div class="{{ col-md-4 }}">
                      <ul class="list-unstyled py-0">
                        <li>
                          <a href="">
                            
                          </a>
                        </li>
                        <li>
                          <a href="/notice-of-nondiscrimination">
                            Notice of Nondiscrimination
                          </a>
                        </li>
                        <li>
                          <a href="https://www.dukehealth.org/privacy">
                            Notice of Privacy Practices
                          </a>
                        </li>
                        <li>
                          <a
                            aria-label="Terms and Conditions"
                            href="/terms-and-conditions-of-use"
                          >
                            Terms and Conditions
                          </a>
                        </li>
                        <li>
                          <a href="/privacy/website-privacy-policy">
                            Website Privacy Policy
                          </a>
                        </li>
                      </ul>
                    </div>
                   
                    <div class="{{ col-md-4 }}">
                      <ul class="list-unstyled py-0">
                        <li>
                          <a href="/about-duke-health">About Health</a>
                        </li>
                        <li>
                          <a href="https://careers.dukehealth.org/">Careers</a>
                        </li>
                        <li>
                          <a href="/contact-us/compliments-suggestions-and-complaints">
                            Contact Us
                          </a>
                        </li>
                        <li>
                          <a href="/keep-date-duke-health">Email Sign Up</a>
                        </li>
                        <li>
                          <a href="https://giving.dukehealth.org/">Giving</a>
                        </li>
                        <li>
                          <a href="https://corporate.dukehealth.org/newsmedia">
                            Newsroom
                          </a>
                        </li>
                        <li>
                          <a href="https://physicians.dukehealth.org/">
                            Referring Physicians
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-12">
              
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
