---
id: adduser-linux
title: AddUser Linux
custom_edit_url: null
---

# Ajouter des Utilisateurs à partir d'un fichier

Ce script vous permet de créer des utilisateurs à partir d'un fichier CSV.

### Process

1. Vérification que le script est lancé en superutilisateur
2. Récupère le nom du fichier texte contenant les informations sur les utilisateurs
3. Vérifie l'existence du fichier
4. Parcourt le fichier pour créer les utilisateurs
5. Vérifie si le groupe existe, le cas échéant, le crée
6. Chaque utilisateur créé, est ajouté dans un fichier contenant les informations de connexion 

:::danger You must execute this script as superuser.

```sh showLineNumbers
#!/bin/bash
# Vérifie si l'utilisateur est root
if [[ $EUID -ne 0 ]]; then
   echo "Ce script doit être exécuté en tant que root." 
   exit 1
fi
# Récupère le nom du fichier texte contenant les informations sur les utilisateurs
echo "Entrez le nom du fichier texte contenant les informations sur les utilisateurs (format : prenom nom groupe): "
read -r filename
# Vérifie si le fichier texte existe
if [ $! -ne "$filename" ]; then
    echo "Le fichier $filename n'existe pas."
    exit 1
fi
# Parcourt le fichier texte pour créer les utilisateurs
while read -r prenom nom groupe; do
    username=$(echo "${prenom:0:1}$nom" | tr '[:upper:]' '[:lower:]')
    password=$(openssl rand -base64 12 | tr -d "=+/")
    encrypted_password=$(echo "$password" | openssl passwd -1 -stdin)
# Vérifie si le groupe existe, sinon le crée
    getent group "$groupe" > /dev/null
    if [ $! -ne 0 ]; then
        groupadd "$groupe"
    fi
# Crée l'utilisateur et ajoute au groupe correspondant
    useradd -m -p "$encrypted_password" -s /bin/bash -g "$groupe" "$username"
    echo "L'utilisateur $username a été créé avec succès. Son mot de passe est : $password"
    echo "L'utilisateur $username a été créé avec le mot de passe : $password" >> login_users.txt
done < "$filename"
exit 0

```
