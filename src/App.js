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

const Residentiel = lazy(() => import('./views/pages/properties/residentiel/Residentiel'));
const ForResidentiel = lazy(() => import('./views/pages/properties/residentiel/ForResidentiel'));

const Commercial = lazy(() => import('./views/pages/properties/commercial/Commercial'));
const ForCommercial = lazy(() => import('./views/pages/properties/commercial/ForCommercial'));

const Industriel = lazy(() => import('./views/pages/properties/industriel/Industriel'));
const ForIndustriel = lazy(() => import('./views/pages/properties/industriel/ForIndustriel'));

const Terrain = lazy(() => import('./views/pages/properties/terrain/Terrain'));
const ForTerrain = lazy(() => import('./views/pages/properties/terrain/ForTerrain'));

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
        <ScrollToTop /> {/* Déplacé à l'intérieur du Router */}
        <Routes>
          <Route path="/" element={<VerifyConnected />} />
          
          {/* Wrap all lazy-loaded components with Suspense */}
          <Route path="/404" element={
            <Suspense fallback={<LoadingSpinner />}>
              <NotFoundPage />
            </Suspense>
          } />
          
          <Route path="/home" element={
            <Suspense fallback={<LoadingSpinner />}>
              <Home />
            </Suspense>
          } />
          
          {/* Regroupement de routes similaires */}
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
          
          {/* Routes pour les propriétés immobilières */}
          <Route path="/residential" element={
            <Suspense fallback={<LoadingSpinner />}>
              <Residentiel />
            </Suspense>
          } />
          
          <Route path="/ForResidential/:propertyId" element={
            <Suspense fallback={<LoadingSpinner />}>
              <ForResidentiel />
            </Suspense>
          } />
          
          <Route path="/commercial" element={
            <Suspense fallback={<LoadingSpinner />}>
              <Commercial />
            </Suspense>
          } />
          
          <Route path="/ForCommercial/:propertyId" element={
            <Suspense fallback={<LoadingSpinner />}>
              <ForCommercial />
            </Suspense>
          } />
          
          <Route path="/industrial" element={
            <Suspense fallback={<LoadingSpinner />}>
              <Industriel />
            </Suspense>
          } />
          
          <Route path="/ForIndustrial/:propertyId" element={
            <Suspense fallback={<LoadingSpinner />}>
              <ForIndustriel />
            </Suspense>
          } />
          
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
          
          {/* Routes Promenade unifiées avec paramètres dynamiques */}
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