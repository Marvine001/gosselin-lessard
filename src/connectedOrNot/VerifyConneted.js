import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function VerifyConnected() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const navigate = useNavigate();

  useEffect(() => {
    const handleOnlineStatus = () => {
      setIsOnline(navigator.onLine);
      if (navigator.onLine) {
        getLocation();
      }
    };

    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOnlineStatus);

    // Fonction de géolocalisation (si nécessaire plus tard)
    const getLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Ici vous pourriez utiliser la position plus tard
          // Par exemple : console.log(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          console.error('Error fetching location:', error);
        }
      );
    };

    if (isOnline) {
      getLocation();
    }

    return () => {
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOnlineStatus);
    };
  }, [isOnline]); // Ajout de isOnline dans les dépendances

  useEffect(() => {
    if (isOnline === false) {
      navigate('/404');
    } else if (isOnline === true) {
      navigate('/home');
    }
  }, [isOnline, navigate]);

  return null;
}

export default VerifyConnected;