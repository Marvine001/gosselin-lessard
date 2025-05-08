import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function VerifyConnected() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [location, setLocation] = useState(null);
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

    if (isOnline) {
      getLocation();
    }

    return () => {
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOnlineStatus);
    };
  }, []);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        console.error('Error fetching location:', error);
      }
    );
  };

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