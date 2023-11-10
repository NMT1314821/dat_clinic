import React from 'react'
import './Founder.css'
import about from '../assets/hos/about.jpg'
import { Image } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Header from '../components/Header';

const About = () => {
    return (
        <>
            <Header />
            <Container>
                <div className='doctor_row'>
                    <div style={{ padding: '10px' }}>
                        <h2>About Us</h2>
                        <div>
                            <p>At Childcare Clinic, our unwavering dedication is to the health and well-being of your most precious treasures—your children. With a profound understanding of the unique healthcare needs of children, we have proudly established a trusted and specialized pediatric healthcare center where your child's health takes center stage.</p>
                            <p>Our exceptional team of pediatric specialists and caregivers is not merely trained; they are driven by an unshakable belief that every child deserves the highest standard of care. At Childcare Clinic, we offer a comprehensive array of healthcare services, ranging from routine check-ups, immunizations, and wellness programs to the most specialized and compassionate care for acute illnesses and pediatric conditions. We fully grasp that a child's health today sets the stage for a happier and more promising tomorrow.</p>
                            <p>Within our clinic, you'll discover an environment specially designed to be child-friendly, complete with state-of-the-art medical equipment and facilities. Our goal is to create a space that is both reassuring for children and comforting for parents. We understand that maintaining your child's health is a critical journey, one that we embark upon together. At Childcare Clinic, we become your trusted partners, standing beside you as we safeguard your child's health and happiness. Our mission is simple yet profound: to provide your child with the best possible healthcare, facilitating their growth, development, and the promise of a healthy and vibrant future.</p>
                        </div>
                    </div>
                    <div style={{ paddingLeft: '30px',paddingTop: '30px' }}>
                        <Image style={{height: '500px', width: '400px'}} src={about} />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default About