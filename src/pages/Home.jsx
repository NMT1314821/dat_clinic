import React from 'react'
import ThemeProvider from "react-bootstrap/ThemeProvider";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Body from "../components/Body";

const Home = () => {
    return (
        <ThemeProvider
            breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
            minBreakpoint="xxs"
        >
            <Header />
            <Body />
            <Footer />
        </ThemeProvider>
    )
}

export default Home