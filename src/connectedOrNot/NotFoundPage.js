// NotFoundPage.js (mise à jour)
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Importez vos éléments visuels nécessaires

function NotFoundPage() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const navigate = useNavigate();

  useEffect(() => {
    const handleOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOnlineStatus);

    // Si la connexion est restaurée pendant que l'utilisateur est sur la page 404
    if (isOnline && window.location.pathname === '/404') {
      navigate('/home');
    }

    return () => {
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOnlineStatus);
    };
  }, [isOnline, navigate]);

  return (
    <div className="not-found-container">
      <h1>Page non trouvée</h1>
      <p>
        {isOnline
          ? "La page demandée n'existe pas."
          : "Vous semblez être hors ligne. Veuillez vérifier votre connexion Internet."}
      </p>
      {isOnline && (
        <button onClick={() => navigate('/home')}>Retour à l'accueil</button>
      )}
    </div>
  );
}

export default NotFoundPage;