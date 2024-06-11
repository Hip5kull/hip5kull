---
id: Yubikey-Installation
title: Yubikey Installation
custom_edit_url: null
---

# Yubikey Installation

## Qu'est-ce qu'une Yubikey?

La YubiKey est un dispositif d'authentification électronique fabriqué par Yubico qui prend en charge les mots de passe à usage unique, le chiffrement et l'authentification par clé publique, ainsi que le protocole Universal Second Factor développé par l'alliance FIDO.

![Yubikey-Family](@site/src/components/YubiKey-5.png)

## Utiliser la Yubikey pour les commandes `sudo`

Que peut-on faire avec un Yubikey dans un environnement Linux ?

Tout d'abord, nous allons configurer le Yubikey pour qu'il soit utilisé comme authentificateur pour les commandes `sudo`.

### Installation des dépendances

```sh
sudo add-apt-repository ppa:yubico/stable && sudo apt update
sudo apt install libpam-u2f pamu2fcfg
```
Si vous constatez que la première commande ne permet pas d'obtenir la clé de signature, essayez de l'ajouter manuellement à l'aide de la commande :

```sh
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 32CBA1A9
```

### Associer la clé U2F à son compte
1. Ouvrir un terminal
2. Brancher la Yubikey
3. Exécuter les commandes suivantes:
```sh
mkdir -p ~/.config/Yubico
pamu2fcfg > ~/.config/Yubico/u2f_keys
```
Lorsque la Yubikey clignote, touchez la partie métallique.

### Configurer le système pour utiliser les clés U2F.

#### Section sans mot de passe

:::warning
Ceci est la section sans mot de passe. Cette dernière permet d'exécuter les commandes `sudo` avec ou sans Yubikey
:::

Editez le fichier `/etc/pam.d/common-auth`. Avant toutes instructions `auth`, insérez la ligne suivante:

```sh
auth sufficient pam_u2f.so
```

Sauvegardez et débranchez la Yubikey. We'll now check that the `sudo` command is working correctly.  
Ouvez un nouveau terminal et tapez la commande suivante:

```sh
sudo echo test
```
Lorsque vous y êtes invité, saisissez votre mot de passe et appuyez sur Entrée. La commande devrait maintenant s'exécuter correctement. Branchez maintenant le Yubikey et ouvrez un nouveau terminal. Reprenez la commande de test ci-dessus. La Yubikey doit commencer à clignoter.

#### Sécuriser les commandes sudo avec une 2FA
:::tip
Voici la section 2FA et plus sécuriser.
:::
  1. Ouvrir un Terminal.
  2. Insérer votre clé U2F.
```sh
mkdir -p ~/.config/Yubico
pamu2fcfg > ~/.config/Yubico/u2f_keys
```
Il est possible qu'un code PIN vous soit demandé lors de l'exécution de pamu2fcfg.  Lorsque votre appareil commence à clignoter, touchez le contact métallique pour confirmer l'association.  
Si vous disposez d'appareils de sauvegarde, suivez les étapes ci-dessous pour les associer à votre compte. Si vous ne disposez pas encore d'un appareil de sauvegarde, vous pourrez en ajouter un plus tard en suivant les étapes ci-dessous, à condition d'avoir toujours accès à votre compte.
:::warning
Il est fortement recommandé de disposer d'un dispositif de sauvegarde, de sorte qu'en cas de perte ou de bris de votre dispositif, vous ne serez pas bloqué hors de votre ordinateur.
:::
1. Ouvrir Terminal.
```sh
pamu2fcfg -n >> ~/.config/Yubico/u2f_keys
```
Lorsque votre appareil commence à clignoter, touchez le contact métallique pour confirmer l'association.
Si vous souhaitez ajouter une couche de sécurité supplémentaire, vous pouvez modifier la sortie du fichier `u2f_keys` dans une zone du système d'exploitation où vous aurez besoin de l'autorisation sudo pour éditer le fichier ( par exemple, /etc ). Après avoir créé un répertoire nommé Yubico ( par exemple /etc/Yubico ). Vous pouvez alors déplacer le fichier de `~/.config/Yubico` vers `/etc/Yubico` en exécutant la commande ( `sudo mv ~/.config/Yubico/u2f_keys /etc/Yubico/u2f_keys` ).  
Une fois le fichier `u2f_keys` déplacé vers un emplacement plus sûr, le fichier PAM devra être modifié afin que le module u2f PAM puisse trouver le fichier u2f_keys. Pour ce faire, ajoutez `authfile=/etc/Yubico/u2f_keys` à la fin de la ligne du fichier `pam_u2f.so` dans le fichier nécessaire à l'authentification. Ce fichier se trouve normalement dans le chemin `/usr/lib/x86_64-linux-gnu/security/pam_u2f.so`, mais il peut être différent selon la configuration.  

:::warning
Veuillez noter qu'une fois que vous avez modifié le fichier `/etc/pam.d/sudo` pour exiger la YubiKey, si vous deviez perdre ou égarer la YubiKey, vous ne pourrez pas modifier ou changer le fichier pour supprimer l'exigence de la YubiKey.
:::
:::warning
En activant ce processus, si les fichiers ne sont pas lisibles par les utilisateurs, vous serez bloqué sur votre système. La cause la plus fréquente est le dossier /home/ chiffré, qui ne sera pas lisible par l'utilisateur root. Vous serez alors bloqué une fois que vous aurez réinitialisé la machine.
:::
 
#### Configurer le système pour utiliser les clés U2F

Cette section explique comment exiger la YubiKey lors de l'utilisation de la commande sudo, qui devrait être utilisée comme test afin de ne pas vous bloquer hors de votre ordinateur.
  1. Ouvrir un Terminal.
```sh
sudo nano /etc/pam.d/sudo
```
  2. Ajoutez la ligne ci-dessous la ligne “@include common-auth”.
```sh
auth       required   pam_u2f.so
``` 
:::note
Si vous avez déplacé le fichier u2f_keys dans /etc/Yubico/u2f_keys comme indiqué, vous devrez ajouter authfile et un chemin vers la configuration PAM, comme indiqué ci-dessous :
:::
```sh 
auth       required   pam_u2f.so authfile=/etc/Yubico/u2f_keys
```
  3. Appuyez sur Ctrl+O puis sur Entrée pour enregistrer le fichier. Veillez à ne pas fermer la fenêtre du terminal, sinon vous ne pourrez pas revenir sur les modifications.
  4. Retirez votre clé de l'ordinateur.
  5. Ouvrez un nouveau Terminal. 
    Dans le nouveau terminal, exécutez: `sudo echo test`. Lorsque vous y êtes invité, saisissez votre mot de passe et appuyez sur Entrée. 
    Même avec le bon mot de passe, l'authentification devrait échouer car la clé U2F n'est pas branchée. Si l'authentification réussit sans la clé U2F, cela indique que le module PAM U2F n'a pas été installé ou qu'il y a une erreur dans les modifications que vous avez apportées au fichier /etc/pam.d/sudo.
  6. Insérez votre clé.
  7. Ouvrez un nouveau Terminal, exécutez la commande de nouveau. Lorsque vous y êtes invité, saisissez votre mot de passe et appuyez sur Entrée. Ensuite, touchez le contact métallique de votre clé U2F lorsqu'il commence à clignoter.

Félicitations ! Si le mot de passe a été accepté cette fois-ci, vous avez configuré le système correctement et vous pouvez passer à la section suivante pour demander la clé U2F pour vous connecter.
remarque
:::note
Si vous ne souhaitez pas exiger la clé U2F pour exécuter la commande sudo, supprimez la ligne que vous avez ajoutée au fichier /etc/pam.d/sudo.
:::

![Yubikey-touch](@site/src/components/Yubikey-touch.jpg)


:::note
Il se peut que le Yubikey ne fonctionne pas la première fois. Redémarrez votre ordinateur ou votre serveur pour que les paramètres soient pris en compte, et réessayez.
:::

## Verrouillage automatique de la session

A partir de maintenant, votre Yubikey peut être utilisé pour authentifier les commandes `sudo`. Allons plus loin et faisons en sorte que la session se verrouille lorsque nous retirons la clé.

Commencez à créer le script de verrouillage `/usr/local/bin/lockscreen.sh`

```sh
#!/bin/bash

sleep 2

if ! ykman info >> /dev/null 2>&1
then
loginctl lock-sessions
fi
```

Ensuite, le script devient exécutable :

```sh
sudo chmod +x /usr/local/bin/lockscreen.sh
```
Ensuite, nous ajoutons une nouvelle règle **UDEV** dans `/etc/udev/rules.d/20-yubikey.rules`

```sh
ACTION=="remove", ENV{SUBSYSTEM}=="usb", ENV{PRODUCT}=="1050/407/536", RUN+="/usr/local/bin/lockscreen.sh"
```

Pour déterminer le `ENV{PRODUCT}`:

```sh
udevadm monitor --environment --udev
```
1. Insérez votre Yubikey
2. Retirez-la

Dans la sortie, repérez un bloc de lignes contenant la ligne ID_VENDOR=Yubico et les entrées ID_VENDOR_ID, ID_MODEL_ID et ID_REVISION. Concaténer ces 3 dernières valeurs, sans les 0 à gauche, séparées par /.   
Par exemple, avec les lignes suivantes, vous obtiendrez 1050/407/536 :

```sh
ID_VENDOR=Yubico
ID_VENDOR_ID=1050
ID_MODEL_ID=0407
ID_REVISION=0536
```
Rechargez la configuration:

```sh
sudo udevadm control --reload-rules
```

