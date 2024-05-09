# Add Users on Debian from file

This script lets you add users from a text file.

### Process

1. Verify superuser privilege to execute
2. Retrieves the name of the file containing user information to be added
3. Check if the file exists
4. Browse the file to create each user
5. Check the group, if it doesn't exist, the script creates it
6. Each user is created and a file is generated for each identifier

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

read filename



# Vérifie si le fichier texte existe

if [ ! -f $filename ]; then

    echo "Le fichier $filename n'existe pas."

    exit 1

fi

# Parcourt le fichier texte pour créer les utilisateurs

while read -r prenom nom groupe; do

    username=$(echo "${prenom:0:1}$nom" | tr '[:upper:]' '[:lower:]')

    password=$(openssl rand -base64 12 | tr -d "=+/")

    encrypted_password=$(echo "$password" | openssl passwd -1 -stdin)


# Vérifie si le groupe existe, sinon le crée

    getent group $groupe > /dev/null

    if [ $? -ne 0 ]; then

        groupadd $groupe

    fi

# Crée l'utilisateur et ajoute au groupe correspondant

    useradd -m -p $encrypted_password -s /bin/bash -g $groupe $username

    echo "L'utilisateur $username a été créé avec succès. Son mot de passe est : $password"

    echo "L'utilisateur $username a été créé avec le mot de passe : $password" >> login_users.txt

done < "$filename"

exit 0
```
