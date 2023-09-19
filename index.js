const express = require('express');
const app = express();
const cors = require("cors");

let counter = 0;
let isOpen = false;
var compteur;

// Middleware pour gérer les demandes JSON
app.use(cors());
// Middleware pour gérer les demandes JSON
app.use(express.json());

// Endpoint pour obtenir l'état actuel du compteur
app.get('/', (req, res) => {
  res.json({ "test":"Bonjour" });
});
app.get('/counter', (req, res) => {
  res.json({ counter, isOpen });
});

// Endpoint pour incrémenter le compteur
app.post('/open', (req, res) => {
  if (!isOpen) {
    compteur = setInterval(()=>{counter++;},1000)
    isOpen = true;
  }
  res.json({ message: 'Compteur incrémenté' });
});

// Endpoint pour arrêter le compteur
app.post('/close', (req, res) => {
  if (isOpen) {
    isOpen = false;
    clearInterval(compteur)
  }
  res.json({ message: 'Compteur arrêté' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
