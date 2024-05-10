"use strict";(self.webpackChunkgithub_page=self.webpackChunkgithub_page||[]).push([[753],{3952:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var s=n(4848),i=n(8453);const t={},o="Add-User Powershell",l={id:"Scripting/Powershell/AddUser-Powershell",title:"Add-User Powershell",description:"Utilisation du script",source:"@site/docs/Scripting/Powershell/AddUser-Powershell.md",sourceDirName:"Scripting/Powershell",slug:"/Scripting/Powershell/AddUser-Powershell",permalink:"/hip5kull/docs/Scripting/Powershell/AddUser-Powershell",draft:!1,unlisted:!1,editUrl:"https://github.com/Hip5kull/hip5kull/tree/main/docs/Scripting/Powershell/AddUser-Powershell.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"POWERSHELL - Basic Commands",permalink:"/hip5kull/docs/Scripting/Powershell/Basics-Powershell"},next:{title:"Yubikey Installation",permalink:"/hip5kull/docs/S\xe9curit\xe9/Yubikey-Installation"}},c={},a=[{value:"Utilisation du script",id:"utilisation-du-script",level:3},{value:"Script AddUserWin.ps1",id:"script-adduserwinps1",level:3}];function d(e){const r={admonition:"admonition",code:"code",h1:"h1",h3:"h3",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"add-user-powershell",children:"Add-User Powershell"}),"\n",(0,s.jsx)(r.h3,{id:"utilisation-du-script",children:"Utilisation du script"}),"\n",(0,s.jsxs)(r.p,{children:["Le script ",(0,s.jsx)(r.code,{children:"AddUserWin.ps1"})," permet de cr\xe9er les utilisateurs, l'ajout et cr\xe9ation de groupe ainsi que la g\xe9n\xe9ration d'un mot de passe \xe0 12 caract\xe8res (Maj, min, caract\xe8re et chiffre)"]}),"\n",(0,s.jsx)(r.p,{children:"Pour lancer le script:"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["Renseigner le chemin complet du fichier ",(0,s.jsx)(r.code,{children:".csv"})]}),"\n",(0,s.jsx)(r.li,{children:"Une sortie login_users.txt permet d'obtenir les credentials des utilisateurs cr\xe9\xe9s"}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Il convient bien \xe9videmment de mettre en place la modification forc\xe9 d\xe8s la premi\xe8re connexion."}),"\n",(0,s.jsxs)(r.admonition,{type:"danger",children:[(0,s.jsx)(r.mdxAdmonitionTitle,{}),(0,s.jsxs)(r.p,{children:["Attention ce script permet l'ajout d'utilisateurs et de groupes sur un ordinateur en dehors d'un ",(0,s.jsx)(r.strong,{children:"Active Directory"})]})]}),"\n",(0,s.jsxs)(r.p,{children:["Exemple de fichier ",(0,s.jsx)(r.code,{children:".csv"}),":"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"csv-file",src:n(7680).A+"",width:"276",height:"310"})}),"\n",(0,s.jsx)(r.h3,{id:"script-adduserwinps1",children:"Script AddUserWin.ps1"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-powershell",children:'# Demande le chemin vers le fichier csv contenant les informations sur les utilisateurs\n$csv_path = Read-Host "Entrez le chemin vers le fichier csv contenant les informations sur les utilisateurs (format : prenom,nom,groupe)"\n\n# Charge le contenu du fichier csv dans une variable\n$users = Import-Csv $csv_path\n\n# Initialise une variable pour stocker les informations des utilisateurs\n$users_info = @()\n\n# Parcourt les utilisateurs pour les cr\xe9er\nforeach ($user in $users) {\n    $username = ($user.prenom[0] + $user.nom).ToLower()\n    $password = New-Object -TypeName Microsoft.PowerShell.Security.SecureString\n    $rand = New-Object -TypeName System.Random\n    $charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=[]{}|\\:;<>,.?/~"\n    $charset_length = $charset.Length\n    1..12 | ForEach-Object {\n        $password.AppendChar($charset[$rand.Next(0, $charset_length)])\n    }\n    $encrypted_password = $password | ConvertFrom-SecureString\n    \n    # V\xe9rifie si le groupe existe, sinon le cr\xe9e\n    $group = Get-LocalGroup -Name $user.groupe -ErrorAction SilentlyContinue\n    if ($group -eq $null) {\n        New-LocalGroup -Name $user.groupe\n    }\n    \n    # Cr\xe9e l\'utilisateur et ajoute au groupe correspondant\n    New-LocalUser -Name $username -Password $password -FullName "$($user.prenom) $($user.nom)" -Description "Created by PowerShell script"\n    Add-LocalGroupMember -Group $user.groupe -Member $username\n    \n    # Stocke les informations de l\'utilisateur dans la variable $users_info\n    $user_info = [PSCustomObject]@{\n        username = $username\n        password = [Runtime.InteropServices.Marshal]::PtrToStringAuto([Runtime.InteropServices.Marshal]::SecureStringToBSTR($password))\n    }\n    $users_info += $user_info\n}\n\n# Exporte les noms d\'utilisateur et les mots de passe dans le fichier login_users.txt\n$users_info | Out-File -FilePath "login_users.txt"\n \n'})})]})}function u(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},7680:(e,r,n)=>{n.d(r,{A:()=>s});const s=n.p+"assets/images/csv-file-be5813f1e1c88c377e4b661e3180a062.png"},8453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>l});var s=n(6540);const i={},t=s.createContext(i);function o(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);