// @ts-nocheck
import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useMediaQuery } from 'react-responsive';

// layouts and pages
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import HasSubmitted from './components/HasSubmitted';
import MobileContact from './pages/MobileContact';
import MobileLayout from './layouts/Mobile';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="success" element={<HasSubmitted />} />
        <Route path="error" element={<div>Error</div>} />
      </Route>
    </>
  )
);

function App() {
  const isMobile = useMediaQuery({ maxWidth: 767 }); // Adjust the maxWidth as needed

  return (
    <>
      {isMobile ? (
        <>
          {/* <div</div> */}
          <MobileLayout/>
          <Swiper className='mySwiper'>
            <SwiperSlide><Home /></SwiperSlide>
            <SwiperSlide><Projects /></SwiperSlide>
            <SwiperSlide><About /></SwiperSlide>
            <SwiperSlide><MobileContact /></SwiperSlide>
          </Swiper>
        </>

      ) : (
        <RouterProvider router={router}>
          <RootLayout>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
            <Route path="success" element={<HasSubmitted />} />
            <Route path="error" element={<div>Error</div>} />
          </RootLayout>
        </RouterProvider>
      )}
    </>
  );
}

export default App;
