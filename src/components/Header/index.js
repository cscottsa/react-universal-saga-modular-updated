import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';

import { IconSearch, IconCaretDown } from 'components';

class Header extends Component {

  componentDidMount() {
    /* eslint-disable */
    $('[data-toggle]').each(function(){
      let $toggle = $(this);

      let toggleSpeed = '',
        toggleAnimate = '';

      toggleSpeed = $toggle.data('toggle-speed');
      toggleAnimate = $toggle.data('toggle-animate');

      // defaults if not specified
      if(toggleSpeed === '') {toggleSpeed = 350;}
      if(toggleAnimate === '') {toggleAnimate = false;}

      let $tar = $( $toggle.data('toggle') );
      $tar.hide();

      $toggle.click(function(e){
        e.preventDefault();
        $toggle.toggleClass('is-active');

        // special mobile nav case
        if($toggle.data('toggle') === '#mobile-nav') {
          $('html').toggleClass('mobile-nav-active');
        }

        if(toggleAnimate){
          $tar.slideToggle( toggleSpeed, function() {
            $tar.toggleClass('is-open');
          });
        } else {
          $tar.toggle();
          $tar.toggleClass('is-open');
        }

      });
    })
    /* eslint-enable */
  }

  render() {
    const urlOldMutual = require('../../theme/images/svg/old-mutual.svg');
    const urlMoneyversity = require('../../theme/images/svg/Moneyversity.svg');

    return (
      <div className="sticky-header">
        <div className="sticky-header__inner">

          <header className="header cf">

            <div className="container-fluid-outer">

              <div className="header__left">
                <img src={urlOldMutual} alt="Old Mutual" />
              </div>

              <a href="#placeholderHref" className="logo">
                <img src={urlMoneyversity} alt="MoneyVersity" />
              </a>

              <nav className="header__right">

                {/* <!-- add .is-active className on toggle --> */}
                <button type="button" className="navbar-toggle" data-toggle="#mobile-nav" data-toggle-speed="350" data-toggle-animate="true">
                  <span className="navbar-toggle__bar" />
                  <span className="navbar-toggle__bar" />
                  <span className="navbar-toggle__bar" />
                </button>

                <ul className="header__nav">
                  <li className="search">
                    <a href="#placeholderHref" data-toggle="#site-search" data-toggle-speed="200" data-toggle-animate="true">
                      <i className="icon">
                        <IconSearch />
                      </i>
                    </a>
                  </li>
                  {/* <!-- apply .is-open className to .dropdown on hover/focus --> */}
                  <li className="dropdown">
                    <a href="#placeholderHref">Courses
                      <span className="caret">
                        <i className="icon">
                          <IconCaretDown />
                        </i>
                      </span>
                    </a>
                    <div className="dropdown__menu courses-menu">

                      <p className="courses-menu__title">Financial Planning</p>
                      <ul className="courses-menu__list">
                        <li>
                          <a href="#placeholderHref">Financial tips
                            <i className="icon icon--course">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                <path fill="#BEC0C2" fillRule="evenodd" d="M10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 Z M10,19 C14.9705627,19 19,14.9705627 19,10 C19,5.02943725 14.9705627,1 10,1 C5.02943725,1 1,5.02943725 1,10 C1,14.9705627 5.02943725,19 10,19 Z" />
                              </svg>
                            </i>
                          </a>
                        </li>
                        <li>
                          <a href="#placeholderHref">Financial planning
                            <i className="icon icon--course">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                <path fill="#BEC0C2" fillRule="evenodd" d="M10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 Z M10,19 C14.9705627,19 19,14.9705627 19,10 C19,5.02943725 14.9705627,1 10,1 C5.02943725,1 1,5.02943725 1,10 C1,14.9705627 5.02943725,19 10,19 Z" />
                              </svg>
                            </i>
                          </a>
                        </li>
                        <li>
                          <a href="#placeholderHref">Wants vs needs
                            <i className="icon icon--course">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                <path fill="#BEC0C2" fillRule="evenodd" d="M10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 Z M10,19 C14.9705627,19 19,14.9705627 19,10 C19,5.02943725 14.9705627,1 10,1 C5.02943725,1 1,5.02943725 1,10 C1,14.9705627 5.02943725,19 10,19 Z" />
                              </svg>
                            </i>
                          </a>
                        </li>
                        <li>
                          <a href="#placeholderHref">Budgeting 101
                            <i className="icon icon--course">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                <g fill="none" fillRule="evenodd">
                                  <circle cx="10" cy="10" r="10" fill="#78B928" />
                                  <path fill="#FFF" d="M6.75926856,9.3492092 C6.39984244,8.92988677 5.768542,8.88133121 5.34921956,9.24075734 C4.92989712,9.60018346 4.88134157,10.2314839 5.24076769,10.6508063 L7.81224557,13.6508063 C8.20431861,14.1082161 8.90884567,14.1176572 9.31303482,13.6709177 L14.7415569,7.67091774 C15.1120903,7.26137717 15.0804687,6.62900231 14.6709281,6.25846896 C14.2613875,5.88793561 13.6290127,5.91955722 13.2584793,6.3290978 L8.59176999,11.4870865 L6.75926856,9.3492092 Z" />
                                </g>
                              </svg>
                            </i>
                          </a>
                        </li>
                        <li>
                          <a href="#placeholderHref">Tax &amp; you
                            <i className="icon icon--course">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                <path fill="#BEC0C2" fillRule="evenodd" d="M10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 Z M10,19 C14.9705627,19 19,14.9705627 19,10 C19,5.02943725 14.9705627,1 10,1 C5.02943725,1 1,5.02943725 1,10 C1,14.9705627 5.02943725,19 10,19 Z" />
                              </svg>
                            </i>
                          </a>
                        </li>
                        <li>
                          <a href="#placeholderHref">Fighting financial crime
                            <i className="icon icon--course">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                <path fill="#BEC0C2" fillRule="evenodd" d="M10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 Z M10,19 C14.9705627,19 19,14.9705627 19,10 C19,5.02943725 14.9705627,1 10,1 C5.02943725,1 1,5.02943725 1,10 C1,14.9705627 5.02943725,19 10,19 Z" />
                              </svg>
                            </i>
                          </a>
                        </li>
                      </ul>

                      <p className="courses-menu__title">Saving &amp; Investing</p>
                      <ul className="courses-menu__list">
                        <li>
                          <a href="#placeholderHref">Saving &amp; investing
                            <i className="icon icon--course">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                <path fill="#BEC0C2" fillRule="evenodd" d="M10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 Z M10,19 C14.9705627,19 19,14.9705627 19,10 C19,5.02943725 14.9705627,1 10,1 C5.02943725,1 1,5.02943725 1,10 C1,14.9705627 5.02943725,19 10,19 Z" />
                              </svg>
                            </i>
                          </a>
                        </li>
                      </ul>

                      <p className="courses-menu__title">Retirement</p>
                      <ul className="courses-menu__list">
                        <li>
                          <a href="#placeholderHref">Retirement
                            <i className="icon icon--course">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                <path fill="#BEC0C2" fillRule="evenodd" d="M10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 Z M10,19 C14.9705627,19 19,14.9705627 19,10 C19,5.02943725 14.9705627,1 10,1 C5.02943725,1 1,5.02943725 1,10 C1,14.9705627 5.02943725,19 10,19 Z" />
                              </svg>
                            </i>
                          </a>
                        </li>
                      </ul>

                      <p className="courses-menu__title">Credit &amp; Debt</p>
                      <ul className="courses-menu__list">
                        <li>
                          <a href="#placeholderHref">Credit &amp; debt
                            <i className="icon icon--course">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                <path fill="#BEC0C2" fillRule="evenodd" d="M10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 Z M10,19 C14.9705627,19 19,14.9705627 19,10 C19,5.02943725 14.9705627,1 10,1 C5.02943725,1 1,5.02943725 1,10 C1,14.9705627 5.02943725,19 10,19 Z" />
                              </svg>
                            </i>
                          </a>
                        </li>
                      </ul>

                      <p className="courses-menu__title">Financing Higher Education</p>
                      <ul className="courses-menu__list">
                        <li>
                          <a href="#placeholderHref">Financing higher education
                            <i className="icon icon--course">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                <g fill="none" fillRule="evenodd">
                                  <circle cx="10" cy="10" r="10" fill="#78B928" />
                                  <path fill="#FFF" d="M6.75926856,9.3492092 C6.39984244,8.92988677 5.768542,8.88133121 5.34921956,9.24075734 C4.92989712,9.60018346 4.88134157,10.2314839 5.24076769,10.6508063 L7.81224557,13.6508063 C8.20431861,14.1082161 8.90884567,14.1176572 9.31303482,13.6709177 L14.7415569,7.67091774 C15.1120903,7.26137717 15.0804687,6.62900231 14.6709281,6.25846896 C14.2613875,5.88793561 13.6290127,5.91955722 13.2584793,6.3290978 L8.59176999,11.4870865 L6.75926856,9.3492092 Z" />
                                </g>
                              </svg>
                            </i>
                          </a>
                        </li>
                      </ul>

                      <p className="courses-menu__title">Property</p>
                      <ul className="courses-menu__list">
                        <li>
                          <a href="#placeholderHref">Bonds &amp; home ownership
                            <i className="icon icon--course">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                <path fill="#BEC0C2" fillRule="evenodd" d="M10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 Z M10,19 C14.9705627,19 19,14.9705627 19,10 C19,5.02943725 14.9705627,1 10,1 C5.02943725,1 1,5.02943725 1,10 C1,14.9705627 5.02943725,19 10,19 Z" />
                              </svg>
                            </i>
                          </a>
                        </li>
                      </ul>

                    </div>


                  </li>
                  <li><a href="#placeholderHref">Login</a></li>
                </ul>
                <div className="header__signup">
                  <a href="#placeholderHref" className="btn btn--md btn--tertiary">Sign Up</a>
                </div>

              </nav>


            </div>

          </header>

          <div className="mobile-nav-wrap">
            {/* <!-- add .is-open className on mobile nav toggle --> */}
            <nav className="mobile-nav shadow-std shadow-std--no-hover" id="mobile-nav">
              <div className="container-outer">

                <div className="mobile-nav__btns cf">
                  <div className="mobile-nav__btns-col">
                    <a href="#placeholderHref" className="btn btn--block btn--md btn--secondary">Login</a>
                  </div>
                  <div className="mobile-nav__btns-col">
                    <a href="#placeholderHref" className="btn btn--block btn--md btn--tertiary">Sign Up</a>
                  </div>
                </div>

                <form action="" className="mobile-nav__search">
                  <input type="text" placeholder="Search" className="form-control" />
                  <button type="submit" className="mobile-nav__search-btn">
                    <i className="icon">
                      <IconSearch />
                    </i>
                  </button>
                </form>

                <div className="mobile-nav__courses courses-menu">

                  <h5>Courses</h5>

                  <p className="courses-menu__title">Financial Planning</p>
                  <ul className="courses-menu__list">
                    <li>
                      <a href="#placeholderHref">Financial tips
                        <i className="icon icon--course">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <path fill="#BEC0C2" fillRule="evenodd" d="M10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 Z M10,19 C14.9705627,19 19,14.9705627 19,10 C19,5.02943725 14.9705627,1 10,1 C5.02943725,1 1,5.02943725 1,10 C1,14.9705627 5.02943725,19 10,19 Z" />
                          </svg>
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="#placeholderHref">Financial planning
                        <i className="icon icon--course">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <path fill="#BEC0C2" fillRule="evenodd" d="M10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 Z M10,19 C14.9705627,19 19,14.9705627 19,10 C19,5.02943725 14.9705627,1 10,1 C5.02943725,1 1,5.02943725 1,10 C1,14.9705627 5.02943725,19 10,19 Z" />
                          </svg>
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="#placeholderHref">Wants vs needs
                        <i className="icon icon--course">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <path fill="#BEC0C2" fillRule="evenodd" d="M10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 Z M10,19 C14.9705627,19 19,14.9705627 19,10 C19,5.02943725 14.9705627,1 10,1 C5.02943725,1 1,5.02943725 1,10 C1,14.9705627 5.02943725,19 10,19 Z" />
                          </svg>
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="#placeholderHref">Budgeting 101
                        <i className="icon icon--course">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <g fill="none" fillRule="evenodd">
                              <circle cx="10" cy="10" r="10" fill="#78B928" />
                              <path fill="#FFF" d="M6.75926856,9.3492092 C6.39984244,8.92988677 5.768542,8.88133121 5.34921956,9.24075734 C4.92989712,9.60018346 4.88134157,10.2314839 5.24076769,10.6508063 L7.81224557,13.6508063 C8.20431861,14.1082161 8.90884567,14.1176572 9.31303482,13.6709177 L14.7415569,7.67091774 C15.1120903,7.26137717 15.0804687,6.62900231 14.6709281,6.25846896 C14.2613875,5.88793561 13.6290127,5.91955722 13.2584793,6.3290978 L8.59176999,11.4870865 L6.75926856,9.3492092 Z" />
                            </g>
                          </svg>
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="#placeholderHref">Tax &amp; you
                        <i className="icon icon--course">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <path fill="#BEC0C2" fillRule="evenodd" d="M10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 Z M10,19 C14.9705627,19 19,14.9705627 19,10 C19,5.02943725 14.9705627,1 10,1 C5.02943725,1 1,5.02943725 1,10 C1,14.9705627 5.02943725,19 10,19 Z" />
                          </svg>
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="#placeholderHref">Fighting financial crime
                        <i className="icon icon--course">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <path fill="#BEC0C2" fillRule="evenodd" d="M10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 Z M10,19 C14.9705627,19 19,14.9705627 19,10 C19,5.02943725 14.9705627,1 10,1 C5.02943725,1 1,5.02943725 1,10 C1,14.9705627 5.02943725,19 10,19 Z" />
                          </svg>
                        </i>
                      </a>
                    </li>
                  </ul>

                  <p className="courses-menu__title">Saving &amp; Investing</p>
                  <ul className="courses-menu__list">
                    <li>
                      <a href="#placeholderHref">Saving &amp; investing
                        <i className="icon icon--course">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <path fill="#BEC0C2" fillRule="evenodd" d="M10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 Z M10,19 C14.9705627,19 19,14.9705627 19,10 C19,5.02943725 14.9705627,1 10,1 C5.02943725,1 1,5.02943725 1,10 C1,14.9705627 5.02943725,19 10,19 Z" />
                          </svg>
                        </i>
                      </a>
                    </li>
                  </ul>

                  <p className="courses-menu__title">Retirement</p>
                  <ul className="courses-menu__list">
                    <li>
                      <a href="#placeholderHref">Retirement
                        <i className="icon icon--course">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <path fill="#BEC0C2" fillRule="evenodd" d="M10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 Z M10,19 C14.9705627,19 19,14.9705627 19,10 C19,5.02943725 14.9705627,1 10,1 C5.02943725,1 1,5.02943725 1,10 C1,14.9705627 5.02943725,19 10,19 Z" />
                          </svg>
                        </i>
                      </a>
                    </li>
                  </ul>

                  <p className="courses-menu__title">Credit &amp; Debt</p>
                  <ul className="courses-menu__list">
                    <li>
                      <a href="#placeholderHref">Credit &amp; debt
                        <i className="icon icon--course">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <path fill="#BEC0C2" fillRule="evenodd" d="M10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 Z M10,19 C14.9705627,19 19,14.9705627 19,10 C19,5.02943725 14.9705627,1 10,1 C5.02943725,1 1,5.02943725 1,10 C1,14.9705627 5.02943725,19 10,19 Z" />
                          </svg>
                        </i>
                      </a>
                    </li>
                  </ul>

                  <p className="courses-menu__title">Financing Higher Education</p>
                  <ul className="courses-menu__list">
                    <li>
                      <a href="#placeholderHref">Financing higher education
                        <i className="icon icon--course">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <g fill="none" fillRule="evenodd">
                              <circle cx="10" cy="10" r="10" fill="#78B928" />
                              <path fill="#FFF" d="M6.75926856,9.3492092 C6.39984244,8.92988677 5.768542,8.88133121 5.34921956,9.24075734 C4.92989712,9.60018346 4.88134157,10.2314839 5.24076769,10.6508063 L7.81224557,13.6508063 C8.20431861,14.1082161 8.90884567,14.1176572 9.31303482,13.6709177 L14.7415569,7.67091774 C15.1120903,7.26137717 15.0804687,6.62900231 14.6709281,6.25846896 C14.2613875,5.88793561 13.6290127,5.91955722 13.2584793,6.3290978 L8.59176999,11.4870865 L6.75926856,9.3492092 Z" />
                            </g>
                          </svg>
                        </i>
                      </a>
                    </li>
                  </ul>

                  <p className="courses-menu__title">Property</p>
                  <ul className="courses-menu__list">
                    <li>
                      <a href="#placeholderHref">Bonds &amp; home ownership
                        <i className="icon icon--course">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <path fill="#BEC0C2" fillRule="evenodd" d="M10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 Z M10,19 C14.9705627,19 19,14.9705627 19,10 C19,5.02943725 14.9705627,1 10,1 C5.02943725,1 1,5.02943725 1,10 C1,14.9705627 5.02943725,19 10,19 Z" />
                          </svg>
                        </i>
                      </a>
                    </li>
                  </ul>


                </div>

              </div>
            </nav>
          </div>

          <div className="site-search-wrap">
            <div className="site-search" id="site-search">
              <div className="container-outer">
                <div className="site-search__contents">
                  <div className="site-search__input">
                    <input type="search" placeholder="Search" className="form-control" />
                  </div>
                  <div className="site-search__btn">
                    <button type="submit" className="btn btn--block btn--lg btn--primary">GO</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    property: state.property
  };
}

export default connect(mapStateToProps, {})(Header);
