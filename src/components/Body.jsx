import React from "react";
import hero from "../assets/homepage_hero_01.jpg";
import "./Body.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import grid1 from "../assets/hos/img1.jpeg";
import grid2 from "../assets/hos/img2.jpeg";
import grid3 from "../assets/hos/img3.jpeg";
import Image from "react-bootstrap/Image";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div style={{padding: '10px'}}>
      <div className="hero">
        <Image src={hero} fluid />
      </div>
      <div>
        <div className="new"><Link to="/vaccination">Vaccination</Link></div>
        <Container>
          <Row>
            <Col xs={12} md={4}>
              <Image className="patients" src={grid1} />
              <div>
                <h4>Contents for Child Health & Well Being</h4>
                <p>
                  Welcome to the Child Health and Well-being page at Child Care Clinic. We understand that your child's health is your top priority, and it's ours too. On this page, we're dedicated to providing you with valuable insights and resources to ensure your child's health, growth, and development
                </p>
                <div>
                  <div className="icons">
                    <Link to="/child">
                  <ArrowForwardIcon />
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <Image className="patients" src={grid2} />
              <h4>Contents for Sleeping and Settleing</h4>
              <p>
                At Child Care Clinic, we understand the importance of peaceful nights for both parents and children.  On our Sleeping and Settling page, we offer you valuable insights, tips, and guidance on creating a bedtime routine that ensures restful nights for your little one.
              </p>
              <div>
                  <div className="icons">
                  <Link to="/sleeping">
                  <ArrowForwardIcon />
                    </Link>                  
                    </div>
                </div>
            </Col>
            <Col xs={12} md={4}>
              <Image className="patients" src={grid3} />
              <h4>Parent Help Line</h4>
              <p>
                At Childcare Clinic, we understand that parenting can be both rewarding and challenging. That's why we've established a dedicated Parent Helpline to provide you with the support, guidance, and information you need to navigate the journey of parenthood confidently.
              </p>
              <div>
                  <div className="icons">
                  <Link to="/helpline">
                  <ArrowForwardIcon />
                    </Link>
                     </div>
                </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Body;
