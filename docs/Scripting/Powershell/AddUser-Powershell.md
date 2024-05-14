---
id: adduser-powershell
title: AddUser Powershell
custom_edit_url: null
---

#  Add-User Powershell

### Utilisation du script

Le script `AddUserWin.ps1` permet de créer les utilisateurs, l'ajout et création de groupe ainsi que la génération d'un mot de passe à 12 caractères (Maj, min, caractère et chiffre)

Pour lancer le script:

  1. Renseigner le chemin complet du fichier `.csv`
  2. Une sortie login_users.txt permet d'obtenir les credentials des utilisateurs créés

Il convient bien évidemment de mettre en place la modification forcé dès la première connexion.

:::danger 
Attention ce script permet l'ajout d'utilisateurs et de groupes sur un ordinateur en dehors d'un **Active Directory**
:::

Exemple de fichier `.csv`:

![csv-file](@site/src/components/csv-file.png)

### Script AddUserWin.ps1

```powershell
# Demande le chemin vers le fichier csv contenant les informations sur les utilisateurs
$csv_path = Read-Host "Entrez le chemin vers le fichier csv contenant les informations sur les utilisateurs (format : prenom,nom,groupe)"

# Charge le contenu du fichier csv dans une variable
$users = Import-Csv $csv_path

# Initialise une variable pour stocker les informations des utilisateurs
$users_info = @()

# Parcourt les utilisateurs pour les créer
foreach ($user in $users) {
    $username = ($user.prenom[0] + $user.nom).ToLower()
    $password = New-Object -TypeName Microsoft.PowerShell.Security.SecureString
    $rand = New-Object -TypeName System.Random
    $charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=[]{}|\:;<>,.?/~"
    $charset_length = $charset.Length
    1..12 | ForEach-Object {
        $password.AppendChar($charset[$rand.Next(0, $charset_length)])
    }
    $encrypted_password = $password | ConvertFrom-SecureString
    
    # Vérifie si le groupe existe, sinon le crée
    $group = Get-LocalGroup -Name $user.groupe -ErrorAction SilentlyContinue
    if ($group -eq $null) {
        New-LocalGroup -Name $user.groupe
    }
    
    # Crée l'utilisateur et ajoute au groupe correspondant
    New-LocalUser -Name $username -Password $password -FullName "$($user.prenom) $($user.nom)" -Description "Created by PowerShell script"
    Add-LocalGroupMember -Group $user.groupe -Member $username
    
    # Stocke les informations de l'utilisateur dans la variable $users_info
    $user_info = [PSCustomObject]@{
        username = $username
        password = [Runtime.InteropServices.Marshal]::PtrToStringAuto([Runtime.InteropServices.Marshal]::SecureStringToBSTR($password))
    }
    $users_info += $user_info
}

# Exporte les noms d'utilisateur et les mots de passe dans le fichier login_users.txt
$users_info | Out-File -FilePath "login_users.txt"
 
```
