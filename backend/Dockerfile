# Utilisation de Python 3.9 comme base
FROM python:3.9

# Définition du répertoire de travail dans le conteneur
WORKDIR /app

# Copie des fichiers de dépendances
COPY requirements.txt requirements.txt

# Installation des dépendances Python
RUN pip install -r requirements.txt

# Copie du code de l’application dans le conteneur
COPY . .

# Exposer le port de Flask
EXPOSE 5003

# Commande pour exécuter l’application
CMD ["python", "app.py"]

