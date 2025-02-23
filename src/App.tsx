import { lazy, Suspense, useEffect } from "react";
import { scroller } from "react-scroll";
import { useLocation } from "react-router-dom";
import Header from "./components/Header";

// Lazy load components
const HeroSection = lazy(() => import("./components/HeroSection"));
const WhatWeOffer = lazy(() => import("./components/WhatWeOffer"));
const PhotoGallery = lazy(() => import("./components/PhotoGallery"));
const BrandCollaboration = lazy(() => import("./components/BrandCollaboration"));
const Reviews = lazy(() => import("./components/Reviews"));
const BookStay = lazy(() => import("./components/BookStay"));
const EnquiryForm = lazy(() => import("./components/EnquiryForm"));
const ReferFriend = lazy(() => import("./components/ReferFriend"));
const FAQ = lazy(() => import("./components/FAQ"));
const Footer = lazy(() => import("./components/Footer"));

// Loading Spinner Component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-4 border-red-500 border-t-transparent"></div>
  </div>
);

function App() {
  const location = useLocation();
  // const [isLoading, setIsLoading] = useState(true); // Track loading state

  // Scroll to the section if hash is present in URL
  useEffect(() => {
    // setIsLoading(true)
    if (location.hash) {
      scroller.scrollTo(location.hash.substring(1), {
        duration: 1000,
        delay: 1,
        smooth: "easeInOutQuart",
      });
    }
    // setTimeout(() => {
    //   setIsLoading(false)
    // }, 100)
  }, [location]);
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="min-h-screen" >
        <Header />
        <HeroSection />
        <WhatWeOffer />
        <PhotoGallery />
        <BrandCollaboration />
        <Reviews />
        <BookStay />
        <EnquiryForm />
        <ReferFriend />
        <FAQ />
        <Footer />
      </div >
    </Suspense>
  );
}

export default App;