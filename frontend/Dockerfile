# Utilisation de Node.js 16 comme base
FROM node:16

# Définition du répertoire de travail dans le conteneur
WORKDIR /app

# Copie des fichiers de dépendances
COPY package.json package-lock.json ./

# Installation des dépendances Node.js
RUN npm install

# Copie du code de l’application dans le conteneur
COPY . .

# Exposer le port de React
EXPOSE 3000

# Commande pour exécuter l’application React
CMD ["npm", "start"]

