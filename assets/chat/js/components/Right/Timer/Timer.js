import React, { useState, useEffect } from 'react';

const Timer = () => {
  const initialTime =  1 * 60; // 10 minutes en secondes
  const [remainingTime, setRemainingTime] = useState(initialTime);

  useEffect(() => {
    let interval;

    // Démarre le compte à rebours
    const startCountdown = () => {
      interval = setInterval(() => {
        setRemainingTime(prevRemainingTime => {
          if (prevRemainingTime > 0) {
            return prevRemainingTime - 1;
          } else {
            clearInterval(interval); // Arrête le compte à rebours lorsque le temps atteint 0
            return 0;
          }
        });
      }, 1000); // Mettre à jour le temps toutes les 1000 ms (1 seconde)
    };

    // Démarrer le compte à rebours quand le composant est monté
    startCountdown();

    // Arrêter le compte à rebours quand le composant est démonté
    return () => clearInterval(interval);
  }, []);

  // Convertir le temps en minutes et secondes pour l'affichage
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  return (
    // Afficher le temps restant, et le le temps = 0, afficher le message
    // "Temps écoulé"
    <div>
      {remainingTime === 0 ? (
        <p>Temps écoulé !</p>
      ) : (
        <p>Temps restant: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</p>
      )}
    </div>
  );
};

export default Timer;
