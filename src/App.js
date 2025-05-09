// import logo from './logo.svg';
import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ScrollToTop from './scrollToTop/ScrollToTop'
// Importez uniquement VerifyConnected de manière eager car c'est votre route principale
import VerifyConnected from './connectedOrNot/VerifyConneted';

// Lazy loading pour tous les autres composants
const NotFoundPage = lazy(() => import('./connectedOrNot/NotFoundPage'));

const Home = lazy(() => import('./views/pages/home/Home'));
const About = lazy(() => import('./views/pages/about us/About'));
const Join = lazy(() => import('./views/pages/join us/Join'));

const Properties = lazy(() => import('./views/pages/properties/Properties'));
const PropertyDetails = lazy(() => import('./views/pages/properties/PropertyDetails'));

const Terrain = lazy(() => import('./views/pages/terrain/Terrain'));
const ForTerrain = lazy(() => import('./views/pages/terrain/ForTerrain'));

const PromenadeProperties = lazy(() => import('./views/pages/promenade/PromenadeProperties'));
const PromenadePropertyDetails = lazy(() => import('./views/pages/promenade/PromenadePropertyDetails'));

const Rent = lazy(()  => import('./views/pages/rent/Rent'));
const ForRent = lazy(()  => import('./views/pages/rent/ForRent'));


const LoadingSpinner = () => (
  <div className="loading-spinner">
    <div className="spinner"></div>
  </div>
);


function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop /> 
        <Routes>
          <Route path="/" element={<VerifyConnected />} />
          
          {/* Route 404 */}
          <Route path="/404" element={
            <Suspense fallback={<LoadingSpinner />}>
              <NotFoundPage />
            </Suspense>
          } />
          
          {/* Pages principales */}
          <Route path="/home" element={
            <Suspense fallback={<LoadingSpinner />}>
              <Home />
            </Suspense>
          } />
          
          <Route path="/about_us" element={
            <Suspense fallback={<LoadingSpinner />}>
              <About />
            </Suspense>
          } />
          
          <Route path="/join_us" element={
            <Suspense fallback={<LoadingSpinner />}>
              <Join />
            </Suspense>
          } />
          
         {/* Routes unifiées pour les propriétés */}
         <Route path="/properties/:type" element={
            <Suspense fallback={<LoadingSpinner />}>
              <Properties />
            </Suspense>
          } />
          
          <Route path="/property/:type/:propertyId" element={
            <Suspense fallback={<LoadingSpinner />}>
              <PropertyDetails />
            </Suspense>
          } />
          
          {/* Routes pour terrains (structure différente) */}
          <Route path="/land" element={
            <Suspense fallback={<LoadingSpinner />}>
              <Terrain />
            </Suspense>
          } />
          
          <Route path="/ForLand" element={
            <Suspense fallback={<LoadingSpinner />}>
              <ForTerrain />
            </Suspense>
          } />
          
          {/* Routes Promenade unifiées */}
          <Route path="/promenade/:type" element={
            <Suspense fallback={<LoadingSpinner />}>
              <PromenadeProperties />
            </Suspense>
          } />
          
          <Route path="/ForPromenade/:type/:propertyId" element={
            <Suspense fallback={<LoadingSpinner />}>
              <PromenadePropertyDetails />
            </Suspense>
          } />

          {/* Routes pour location: A louer */}
          <Route path="/rent" element={
            <Suspense fallback={<LoadingSpinner />}>
              <Rent />
            </Suspense>
          } />
          
          <Route path="/ForRent/:category/:propertyId" element={
            <Suspense fallback={<LoadingSpinner />}>
              <ForRent />
            </Suspense>
          } />
          
          {/* Route de secours pour les chemins non définis */}
          <Route path="*" element={
            <Suspense fallback={<LoadingSpinner />}>
              <NotFoundPage />
            </Suspense>
          } />
        </Routes>
      </Router>
    </>
  );
}

export default App;