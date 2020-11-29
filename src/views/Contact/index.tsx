import React from 'react';
import './Contact.module.css';
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa';

export const Contact = () => {
  return (
    <div className="bg-white mt-n10 mt-md-n13 pt-5 pt-lg-7 px-3 px-md-5 pl-xl-10 pr-xl-3">
      <div className="ml-xl-4">
        <div className="mb-4 mb-lg-7">
          <h6 className="font-weight medium font-size-10 mb-4 mb-lg-7">Contact Information</h6>
          <p className="font-weight-medium font-italic">We will answer any questions you may have about our online
            sales, rights or partnership service right here.
          </p>
        </div>
        <div className="mb-4 mb-lg-8">
          <div className="row">
            <div className="col-md-6">
              <h6 className="font-weight-medium font-size-4 mb-4">New York Office</h6>
              <address className="font-size-2 mb-5">
                <span className="mb-2 font-weight-normal text-dark">
                  1418 River Drive, Suite 35 Cottonhall, CA 9622 <br /> United States
                </span>
              </address>
              <div>
                <a href="mailto:sale@bookworm.com"
                   className="font-size-2 d-block link-black-100 mb-1">sale@bookworm.com</a>
                <a href="tel:+1246-345-0695" className="font-size-2 d-block link-black-100">+1 246-345-0695</a>
              </div>
            </div>
            <div className="col-md-6">
              <h6 className="font-weight-medium font-size-4 mb-4">London Office</h6>
              <address className="font-size-2 mb-5">
                <span className="mb-2 font-weight-normal text-dark">
                  1418 River Drive, Suite 35 Cottonhall, CA 9622 <br /> United States
                </span>
              </address>
              <div>
                <a href="mailto:sale@bookworm.com"
                   className="font-size-2 d-block link-black-100 mb-1">sale@bookworm.com</a>
                <a href="tel:+1246-345-0695" className="font-size-2 d-block link-black-100">+1 246-345-0695</a>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-5 mb-xl-9 pb-xl-1">
          <h6 className="font-size-4 font-weight-medium">Social Media</h6>
          <ul className="list-unstyled mb-0 d-flex">
            <li className="btn pl-0">
              <a className="link-black-100" href="#">
                <FaInstagram />
              </a>
            </li>
            <li className="btn">
              <a className="link-black-100" href="#">
                <FaFacebook />
              </a>
            </li>
            <li className="btn">
              <a className="link-black-100" href="#">
                <FaYoutube />
              </a>
            </li>
            <li className="btn">
              <a className="link-black-100" href="#">
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-weight-medium font-size-10 mb-3 pb-xl-1">Get In Touch</h6>
          <form className="js-validate">
            <div className="row">

              <div className="col-sm-6 mb-5">
                <div className="js-form-message">
                  <label htmlFor="exampleFormControlInput1">Name</label>
                  <input id="exampleFormControlInput1" type="text" className="form-control rounded-0" name="name"
                         aria-label="Jack Wayley" required data-error-class="u-has-error"
                         data-msg="Please enter your name." data-success-class="u-has-success" />
                </div>
              </div>


              <div className="col-sm-6 mb-5">
                <div className="js-form-message">
                  <label htmlFor="exampleFormControlInput2">Email</label>
                  <input id="exampleFormControlInput2" type="email" className="form-control rounded-0" name="email"
                         aria-label="jackwayley@gmail.com" required data-msg="Please enter a valid email address."
                         data-error-class="u-has-error" data-success-class="u-has-success" />
                </div>
              </div>

              <div className="col-sm-12 mb-5">
                <div className="js-form-message">
                  <label htmlFor="exampleFormControlInput3">Subject</label>
                  <input id="exampleFormControlInput3" type="email" className="form-control rounded-0" name="email"
                         aria-label="jackwayley@gmail.com" required data-msg="Please enter a valid email address."
                         data-error-class="u-has-error" data-success-class="u-has-success" />
                </div>
              </div>
              <div className="col-sm-12 mb-5">
                <div className="js-form-message">
                  <div className="input-group flex-column">
                    <label htmlFor="exampleFormControlInput4">Details please! Your review helps other shoppers.</label>
                    <textarea id="exampleFormControlInput4"
                              className="form-control rounded-0 pl-3 font-size-2 placeholder-color-3" rows={6} cols={77}
                              name="text"
                              placeholder="What did you like or dislike? What should other shoppers know before buying?"
                              aria-label="Hi there, I would like to ..." required data-msg="Please enter a reason."
                              data-error-class="u-has-error" data-success-class="u-has-success" />
                  </div>
                </div>
              </div>

              <div className="col d-flex justify-content-lg-start">
                <button type="submit"
                        className="btn btn-wide btn-dark text-white rounded-0 transition-3d-hover height-60">Sumbit
                  Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
