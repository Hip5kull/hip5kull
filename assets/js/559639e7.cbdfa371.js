"use strict";(self.webpackChunkgithub_page=self.webpackChunkgithub_page||[]).push([[268],{1492:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var i=n(4848),r=n(8453);const l={id:"Yubikey-Installation",title:"Yubikey Installation",custom_edit_url:null},o="Yubikey Installation",u={id:"S\xe9curit\xe9/Yubikey-Installation",title:"Yubikey Installation",description:"Qu'est-ce qu'une Yubikey?",source:"@site/docs/S\xe9curit\xe9/Yubikey-Installation.md",sourceDirName:"S\xe9curit\xe9",slug:"/S\xe9curit\xe9/Yubikey-Installation",permalink:"/hip5kull/docs/S\xe9curit\xe9/Yubikey-Installation",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"Yubikey-Installation",title:"Yubikey Installation",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"AddUser Powershell",permalink:"/hip5kull/docs/Scripting/Powershell/adduser-powershell"}},a={},c=[{value:"Qu&#39;est-ce qu&#39;une Yubikey?",id:"quest-ce-quune-yubikey",level:2},{value:"Utiliser la Yubikey pour les commandes <code>sudo</code>",id:"utiliser-la-yubikey-pour-les-commandes-sudo",level:2},{value:"Installation des d\xe9pendances",id:"installation-des-d\xe9pendances",level:3},{value:"Associer la cl\xe9 U2F \xe0 son compte",id:"associer-la-cl\xe9-u2f-\xe0-son-compte",level:3},{value:"Configurer le syst\xe8me pour utiliser les cl\xe9s U2F.",id:"configurer-le-syst\xe8me-pour-utiliser-les-cl\xe9s-u2f",level:3},{value:"Section sans mot de passe",id:"section-sans-mot-de-passe",level:4},{value:"S\xe9curiser les commandes sudo avec une 2FA",id:"s\xe9curiser-les-commandes-sudo-avec-une-2fa",level:4},{value:"Configurer le syst\xe8me pour utiliser les cl\xe9s U2F",id:"configurer-le-syst\xe8me-pour-utiliser-les-cl\xe9s-u2f-1",level:4},{value:"Verrouillage automatique de la session",id:"verrouillage-automatique-de-la-session",level:2}];function t(e){const s={admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"yubikey-installation",children:"Yubikey Installation"}),"\n",(0,i.jsx)(s.h2,{id:"quest-ce-quune-yubikey",children:"Qu'est-ce qu'une Yubikey?"}),"\n",(0,i.jsx)(s.p,{children:"La YubiKey est un dispositif d'authentification \xe9lectronique fabriqu\xe9 par Yubico qui prend en charge les mots de passe \xe0 usage unique, le chiffrement et l'authentification par cl\xe9 publique, ainsi que le protocole Universal Second Factor d\xe9velopp\xe9 par l'alliance FIDO."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Yubikey-Family",src:n(3225).A+"",width:"800",height:"700"})}),"\n",(0,i.jsxs)(s.h2,{id:"utiliser-la-yubikey-pour-les-commandes-sudo",children:["Utiliser la Yubikey pour les commandes ",(0,i.jsx)(s.code,{children:"sudo"})]}),"\n",(0,i.jsx)(s.p,{children:"Que peut-on faire avec un Yubikey dans un environnement Linux ?"}),"\n",(0,i.jsxs)(s.p,{children:["Tout d'abord, nous allons configurer le Yubikey pour qu'il soit utilis\xe9 comme authentificateur pour les commandes ",(0,i.jsx)(s.code,{children:"sudo"}),"."]}),"\n",(0,i.jsx)(s.h3,{id:"installation-des-d\xe9pendances",children:"Installation des d\xe9pendances"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"sudo add-apt-repository ppa:yubico/stable && sudo apt update\nsudo apt install libpam-u2f pamu2fcfg\n"})}),"\n",(0,i.jsx)(s.p,{children:"Si vous constatez que la premi\xe8re commande ne permet pas d'obtenir la cl\xe9 de signature, essayez de l'ajouter manuellement \xe0 l'aide de la commande :"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 32CBA1A9\n"})}),"\n",(0,i.jsx)(s.h3,{id:"associer-la-cl\xe9-u2f-\xe0-son-compte",children:"Associer la cl\xe9 U2F \xe0 son compte"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsx)(s.li,{children:"Ouvrir un terminal"}),"\n",(0,i.jsx)(s.li,{children:"Brancher la Yubikey"}),"\n",(0,i.jsx)(s.li,{children:"Ex\xe9cuter les commandes suivantes:"}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"mkdir -p ~/.config/Yubico\npamu2fcfg > ~/.config/Yubico/u2f_keys\n"})}),"\n",(0,i.jsx)(s.p,{children:"Lorsque la Yubikey clignote, touchez la partie m\xe9tallique."}),"\n",(0,i.jsx)(s.h3,{id:"configurer-le-syst\xe8me-pour-utiliser-les-cl\xe9s-u2f",children:"Configurer le syst\xe8me pour utiliser les cl\xe9s U2F."}),"\n",(0,i.jsx)(s.h4,{id:"section-sans-mot-de-passe",children:"Section sans mot de passe"}),"\n",(0,i.jsx)(s.admonition,{type:"warning",children:(0,i.jsxs)(s.p,{children:["Ceci est la section sans mot de passe. Cette derni\xe8re permet d'ex\xe9cuter les commandes ",(0,i.jsx)(s.code,{children:"sudo"})," avec ou sans Yubikey"]})}),"\n",(0,i.jsxs)(s.p,{children:["Editez le fichier ",(0,i.jsx)(s.code,{children:"/etc/pam.d/common-auth"}),". Avant toutes instructions ",(0,i.jsx)(s.code,{children:"auth"}),", ins\xe9rez la ligne suivante:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"auth sufficient pam_u2f.so\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Sauvegardez et d\xe9branchez la Yubikey. We'll now check that the ",(0,i.jsx)(s.code,{children:"sudo"})," command is working correctly.",(0,i.jsx)(s.br,{}),"\n","Ouvez un nouveau terminal et tapez la commande suivante:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"sudo echo test\n"})}),"\n",(0,i.jsx)(s.p,{children:"Lorsque vous y \xeates invit\xe9, saisissez votre mot de passe et appuyez sur Entr\xe9e. La commande devrait maintenant s'ex\xe9cuter correctement. Branchez maintenant le Yubikey et ouvrez un nouveau terminal. Reprenez la commande de test ci-dessus. La Yubikey doit commencer \xe0 clignoter."}),"\n",(0,i.jsx)(s.h4,{id:"s\xe9curiser-les-commandes-sudo-avec-une-2fa",children:"S\xe9curiser les commandes sudo avec une 2FA"}),"\n",(0,i.jsx)(s.admonition,{type:"tip",children:(0,i.jsx)(s.p,{children:"Voici la section 2FA et plus s\xe9curiser."})}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsx)(s.li,{children:"Ouvrir un Terminal."}),"\n",(0,i.jsx)(s.li,{children:"Ins\xe9rer votre cl\xe9 U2F."}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"mkdir -p ~/.config/Yubico\npamu2fcfg > ~/.config/Yubico/u2f_keys\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Il est possible qu'un code PIN vous soit demand\xe9 lors de l'ex\xe9cution de pamu2fcfg.  Lorsque votre appareil commence \xe0 clignoter, touchez le contact m\xe9tallique pour confirmer l'association.",(0,i.jsx)(s.br,{}),"\n","Si vous disposez d'appareils de sauvegarde, suivez les \xe9tapes ci-dessous pour les associer \xe0 votre compte. Si vous ne disposez pas encore d'un appareil de sauvegarde, vous pourrez en ajouter un plus tard en suivant les \xe9tapes ci-dessous, \xe0 condition d'avoir toujours acc\xe8s \xe0 votre compte."]}),"\n",(0,i.jsx)(s.admonition,{type:"warning",children:(0,i.jsx)(s.p,{children:"Il est fortement recommand\xe9 de disposer d'un dispositif de sauvegarde, de sorte qu'en cas de perte ou de bris de votre dispositif, vous ne serez pas bloqu\xe9 hors de votre ordinateur."})}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsx)(s.li,{children:"Ouvrir Terminal."}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"pamu2fcfg -n >> ~/.config/Yubico/u2f_keys\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Lorsque votre appareil commence \xe0 clignoter, touchez le contact m\xe9tallique pour confirmer l'association.\nSi vous souhaitez ajouter une couche de s\xe9curit\xe9 suppl\xe9mentaire, vous pouvez modifier la sortie du fichier ",(0,i.jsx)(s.code,{children:"u2f_keys"})," dans une zone du syst\xe8me d'exploitation o\xf9 vous aurez besoin de l'autorisation sudo pour \xe9diter le fichier ( par exemple, /etc ). Apr\xe8s avoir cr\xe9\xe9 un r\xe9pertoire nomm\xe9 Yubico ( par exemple /etc/Yubico ). Vous pouvez alors d\xe9placer le fichier de ",(0,i.jsx)(s.code,{children:"~/.config/Yubico"})," vers ",(0,i.jsx)(s.code,{children:"/etc/Yubico"})," en ex\xe9cutant la commande ( ",(0,i.jsx)(s.code,{children:"sudo mv ~/.config/Yubico/u2f_keys /etc/Yubico/u2f_keys"})," ).",(0,i.jsx)(s.br,{}),"\n","Une fois le fichier ",(0,i.jsx)(s.code,{children:"u2f_keys"})," d\xe9plac\xe9 vers un emplacement plus s\xfbr, le fichier PAM devra \xeatre modifi\xe9 afin que le module u2f PAM puisse trouver le fichier u2f_keys. Pour ce faire, ajoutez ",(0,i.jsx)(s.code,{children:"authfile=/etc/Yubico/u2f_keys"})," \xe0 la fin de la ligne du fichier ",(0,i.jsx)(s.code,{children:"pam_u2f.so"})," dans le fichier n\xe9cessaire \xe0 l'authentification. Ce fichier se trouve normalement dans le chemin ",(0,i.jsx)(s.code,{children:"/usr/lib/x86_64-linux-gnu/security/pam_u2f.so"}),", mais il peut \xeatre diff\xe9rent selon la configuration."]}),"\n",(0,i.jsx)(s.admonition,{type:"warning",children:(0,i.jsxs)(s.p,{children:["Veuillez noter qu'une fois que vous avez modifi\xe9 le fichier ",(0,i.jsx)(s.code,{children:"/etc/pam.d/sudo"})," pour exiger la YubiKey, si vous deviez perdre ou \xe9garer la YubiKey, vous ne pourrez pas modifier ou changer le fichier pour supprimer l'exigence de la YubiKey."]})}),"\n",(0,i.jsx)(s.admonition,{type:"warning",children:(0,i.jsx)(s.p,{children:"En activant ce processus, si les fichiers ne sont pas lisibles par les utilisateurs, vous serez bloqu\xe9 sur votre syst\xe8me. La cause la plus fr\xe9quente est le dossier /home/ chiffr\xe9, qui ne sera pas lisible par l'utilisateur root. Vous serez alors bloqu\xe9 une fois que vous aurez r\xe9initialis\xe9 la machine."})}),"\n",(0,i.jsx)(s.h4,{id:"configurer-le-syst\xe8me-pour-utiliser-les-cl\xe9s-u2f-1",children:"Configurer le syst\xe8me pour utiliser les cl\xe9s U2F"}),"\n",(0,i.jsx)(s.p,{children:"Cette section explique comment exiger la YubiKey lors de l'utilisation de la commande sudo, qui devrait \xeatre utilis\xe9e comme test afin de ne pas vous bloquer hors de votre ordinateur."}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsx)(s.li,{children:"Ouvrir un Terminal."}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"sudo nano /etc/pam.d/sudo\n"})}),"\n",(0,i.jsxs)(s.ol,{start:"2",children:["\n",(0,i.jsx)(s.li,{children:"Ajoutez la ligne ci-dessous la ligne \u201c@include common-auth\u201d."}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"auth       required   pam_u2f.so\n"})}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsx)(s.p,{children:"Si vous avez d\xe9plac\xe9 le fichier u2f_keys dans /etc/Yubico/u2f_keys comme indiqu\xe9, vous devrez ajouter authfile et un chemin vers la configuration PAM, comme indiqu\xe9 ci-dessous :"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"auth       required   pam_u2f.so authfile=/etc/Yubico/u2f_keys\n"})}),"\n",(0,i.jsxs)(s.ol,{start:"3",children:["\n",(0,i.jsx)(s.li,{children:"Appuyez sur Ctrl+O puis sur Entr\xe9e pour enregistrer le fichier. Veillez \xe0 ne pas fermer la fen\xeatre du terminal, sinon vous ne pourrez pas revenir sur les modifications."}),"\n",(0,i.jsx)(s.li,{children:"Retirez votre cl\xe9 de l'ordinateur."}),"\n",(0,i.jsxs)(s.li,{children:["Ouvrez un nouveau Terminal.\nDans le nouveau terminal, ex\xe9cutez: ",(0,i.jsx)(s.code,{children:"sudo echo test"}),". Lorsque vous y \xeates invit\xe9, saisissez votre mot de passe et appuyez sur Entr\xe9e.\nM\xeame avec le bon mot de passe, l'authentification devrait \xe9chouer car la cl\xe9 U2F n'est pas branch\xe9e. Si l'authentification r\xe9ussit sans la cl\xe9 U2F, cela indique que le module PAM U2F n'a pas \xe9t\xe9 install\xe9 ou qu'il y a une erreur dans les modifications que vous avez apport\xe9es au fichier /etc/pam.d/sudo."]}),"\n",(0,i.jsx)(s.li,{children:"Ins\xe9rez votre cl\xe9."}),"\n",(0,i.jsx)(s.li,{children:"Ouvrez un nouveau Terminal, ex\xe9cutez la commande de nouveau. Lorsque vous y \xeates invit\xe9, saisissez votre mot de passe et appuyez sur Entr\xe9e. Ensuite, touchez le contact m\xe9tallique de votre cl\xe9 U2F lorsqu'il commence \xe0 clignoter."}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"F\xe9licitations ! Si le mot de passe a \xe9t\xe9 accept\xe9 cette fois-ci, vous avez configur\xe9 le syst\xe8me correctement et vous pouvez passer \xe0 la section suivante pour demander la cl\xe9 U2F pour vous connecter.\nremarque"}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsx)(s.p,{children:"Si vous ne souhaitez pas exiger la cl\xe9 U2F pour ex\xe9cuter la commande sudo, supprimez la ligne que vous avez ajout\xe9e au fichier /etc/pam.d/sudo."})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Yubikey-touch",src:n(3241).A+"",width:"535",height:"350"})}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsx)(s.p,{children:"Il se peut que le Yubikey ne fonctionne pas la premi\xe8re fois. Red\xe9marrez votre ordinateur ou votre serveur pour que les param\xe8tres soient pris en compte, et r\xe9essayez."})}),"\n",(0,i.jsx)(s.h2,{id:"verrouillage-automatique-de-la-session",children:"Verrouillage automatique de la session"}),"\n",(0,i.jsxs)(s.p,{children:["A partir de maintenant, votre Yubikey peut \xeatre utilis\xe9 pour authentifier les commandes ",(0,i.jsx)(s.code,{children:"sudo"}),". Allons plus loin et faisons en sorte que la session se verrouille lorsque nous retirons la cl\xe9."]}),"\n",(0,i.jsxs)(s.p,{children:["Commencez \xe0 cr\xe9er le script de verrouillage ",(0,i.jsx)(s.code,{children:"/usr/local/bin/lockscreen.sh"})]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"#!/bin/bash\n\nsleep 2\n\nif ! ykman info >> /dev/null 2>&1\nthen\nloginctl lock-sessions\nfi\n"})}),"\n",(0,i.jsx)(s.p,{children:"Ensuite, le script devient ex\xe9cutable :"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"sudo chmod +x /usr/local/bin/lockscreen.sh\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Ensuite, nous ajoutons une nouvelle r\xe8gle ",(0,i.jsx)(s.strong,{children:"UDEV"})," dans ",(0,i.jsx)(s.code,{children:"/etc/udev/rules.d/20-yubikey.rules"})]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:'ACTION=="remove", ENV{SUBSYSTEM}=="usb", ENV{PRODUCT}=="1050/407/536", RUN+="/usr/local/bin/lockscreen.sh"\n'})}),"\n",(0,i.jsxs)(s.p,{children:["Pour d\xe9terminer le ",(0,i.jsx)(s.code,{children:"ENV{PRODUCT}"}),":"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"udevadm monitor --environment --udev\n"})}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsx)(s.li,{children:"Ins\xe9rez votre Yubikey"}),"\n",(0,i.jsx)(s.li,{children:"Retirez-la"}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Dans la sortie, rep\xe9rez un bloc de lignes contenant la ligne ID_VENDOR=Yubico et les entr\xe9es ID_VENDOR_ID, ID_MODEL_ID et ID_REVISION. Concat\xe9ner ces 3 derni\xe8res valeurs, sans les 0 \xe0 gauche, s\xe9par\xe9es par /.",(0,i.jsx)(s.br,{}),"\n","Par exemple, avec les lignes suivantes, vous obtiendrez 1050/407/536 :"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"ID_VENDOR=Yubico\nID_VENDOR_ID=1050\nID_MODEL_ID=0407\nID_REVISION=0536\n"})}),"\n",(0,i.jsx)(s.p,{children:"Rechargez la configuration:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"sudo udevadm control --reload-rules\n"})})]})}function d(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},3225:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/YubiKey-5-3d9be93699d95ed9107226d6305cad6c.png"},3241:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/Yubikey-touch-3ec16e5694b523f4d2d8b6a51e3cef2b.jpg"},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>u});var i=n(6540);const r={},l=i.createContext(r);function o(e){const s=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function u(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(l.Provider,{value:s},e.children)}}}]);