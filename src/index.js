import React from 'react';
import "@fortawesome/fontawesome-free/css/all.css";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Main from './Containers/main';
import Header from './Components/header';
import ScrollToTop from './Components/scrollToTop';
import Footer from './Components/footer';
import './index.css';

render((
    <BrowserRouter>
        <div>
            <ScrollToTop />
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </div>
    </BrowserRouter>
), document.getElementById('root'));