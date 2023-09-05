import React from 'react';

class Timer extends React.Component {
  
  constructor(props) {
    super(props);
    const cout = props.coutchat;
    const solde = props.solde;

    // Je vais calculer le cout de la consultation en seconde
    const CoutMinutes = solde / cout;
    const CoutSecondes = CoutMinutes * 60;
    const CoutSeconde = CoutSecondes.toFixed(0);
    this.state = {
      remainingTime: CoutSeconde
    };
  }

  componentDidMount() {
    let interval;

    // Démarre le compte à rebours
    const startCountdown = () => {
      interval = setInterval(() => {
        this.setState(prevState => {
          if (prevState.remainingTime > 0) {
            return { remainingTime: prevState.remainingTime - 1 };
          } else {
            clearInterval(interval); // Arrête le compte à rebours lorsque le temps atteint 0
            return { remainingTime: 0 };
          }
        });
      }, 1000); // Mettre à jour le temps toutes les 1000 ms (1 seconde)
    };

    // Démarrer le compte à rebours quand le composant est monté
    startCountdown();

    // Arrêter le compte à rebours quand le composant est démonté
    this.interval = interval;
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // Convertir le temps en minutes et secondes pour l'affichage

  render() {
    const minutes = Math.floor(this.state.remainingTime / 60);
    const seconds = this.state.remainingTime % 60;

    return (
      // Afficher le temps restant, et le le temps = 0, afficher le message
      // "Temps écoulé"
      <div>
        {this.state.remainingTime === 0 ? (
          <p>Temps écoulé !</p>
        ) : (
          <p>
            Temps restant: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </p>
        )}
      </div>
    );
  }
}

export default Timer;