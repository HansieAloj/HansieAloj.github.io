import './Footer.css'
import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer, CDBBox } from 'cdbreact';
import logo from "../images/logo.jpg"


export const Footer = () => {
  return (
    <div class="Footer">
    <CDBFooter className="shadow">
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: '80%' }}
      >
        <CDBBox display="flex" alignItems="center">
          <a href="/" className="d-flex align-items-center p-0 text-dark">
            <img
              alt="logo"
              src={logo}
              width="100px"
            />
            <div class="space"/>
            <span className="ml-4 h5 mb-0 font-weight-bold text-primary">Virtual Tour</span>
          </a>
          <div class="space"/><div class="space"/>
          <div class="space"/><div class="space"/>
          <small className="ml-2">&copy; Hansie Aloj, 2022. All rights reserved.</small>
        </CDBBox>
        <CDBBox display="flex">
        <CDBBtn flat color="primary" className="p-2" onClick={() => {window.open("https://www.facebook.com/", "_blank");}}>
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="primary" className="mx-3 p-2" onClick={() => {window.open("https://twitter.com/", "_blank");}}>
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat color="primary" className="p-2" onClick={() => {window.open("https://www.instagram.com/", "_blank");}}>
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
    </div>
  );
};