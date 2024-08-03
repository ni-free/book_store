// Footer.js
import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        
        <FooterSection>
          <h3>Categories</h3>
          <ul>
            <li>Fiction</li>
            <li>Children</li>
            <li>Novels</li>
            <li>Translations</li>
            <li>Short story</li>
            <li>Educational</li>
            <li>Biography</li>
            <li>Poetry</li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Awards</li>
            <li>Branch Network</li>
            <li>Contact Us</li>
            <li>Sign Up/ Login</li>
            <li>My Account</li>
            <li>Wishlist</li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>Information</h3>
          <ul>
            <li>Shipping & Return Policy</li>
            <li>Privacy And Cookies Policy</li>
            <li>Terms & Conditions</li>
            <li>Payment Policy</li>
            <li>Coupon T&C</li>
            <li>FAQ</li>
          </ul>
        </FooterSection>

        <ContactDetailsSection>
          <h3>Contact Details</h3>
          <Address>
            No.30,
            Stanley Thilakarathne Mawatha,
            Nugegoda,
            Sri Lanka, 10250
          </Address>
          <p>+94 711304860</p>
          <p>webadmin@bookstore.lk</p>
        </ContactDetailsSection>
      </FooterContent>

      
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  background-color: #f8f8f8;
  height: 300px;
  position: relative;
  margin-top:-8%;

`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterSection = styled.div`
  flex: 1;
  max-width: 200px;
  margin: 20px;

  h3 {
    color: #333;
    margin-bottom: 10px;
  }

  p {
    color: #666;
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 8px;
      color: #555;
      cursor: pointer;

      &:hover {
        color: #007bff;
      }
    }
  }
`;




const ContactDetailsSection = styled(FooterSection)`
  address, p {
    color: #555;
  }
`;


const Address = styled.address`
  font-style: normal;
  margin-bottom: 10px;
  color: #555;
`;
