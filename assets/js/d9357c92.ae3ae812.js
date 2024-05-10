"use strict";(self.webpackChunkgithub_page=self.webpackChunkgithub_page||[]).push([[441],{5142:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=t(4848),a=t(8453);const i={},o="Provider 3CX Template",s={id:"Scripting/Bash/Provider3cx",title:"Provider 3CX Template",description:"What is 3CX ?",source:"@site/docs/Scripting/Bash/Provider3cx.md",sourceDirName:"Scripting/Bash",slug:"/Scripting/Bash/Provider3cx",permalink:"/hip5kull/docs/Scripting/Bash/Provider3cx",draft:!1,unlisted:!1,editUrl:"https://github.com/Hip5kull/hip5kull/tree/main/docs/Scripting/Bash/Provider3cx.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Add Users on Debian from file",permalink:"/hip5kull/docs/Scripting/Bash/Linux-AddUser"},next:{title:"POWERSHELL - Basic Commands",permalink:"/hip5kull/docs/Scripting/Powershell/Basics-Powershell"}},l={},d=[{value:"What is 3CX ?",id:"what-is-3cx-",level:2},{value:"What does this script do ?",id:"what-does-this-script-do-",level:2},{value:"How to execute this script ?",id:"how-to-execute-this-script-",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"provider-3cx-template",children:"Provider 3CX Template"}),"\n",(0,r.jsx)(n.h2,{id:"what-is-3cx-",children:"What is 3CX ?"}),"\n",(0,r.jsx)(n.p,{children:"3CX is a phone system for companies."}),"\n",(0,r.jsx)(n.h2,{id:"what-does-this-script-do-",children:"What does this script do ?"}),"\n",(0,r.jsx)(n.p,{children:"This script allows you to set up a template for Yealink, Gigaset or other telephone handsets using your own trunk.\nThe purpose of this script is to optimize your teams' time in deploying the 3CX system and configuring templates."}),"\n",(0,r.jsx)(n.p,{children:"Now you can deploy your VMs, modify the template according to your trunks, your name, and the name you wish to assign to the template."}),"\n",(0,r.jsx)(n.h2,{id:"how-to-execute-this-script-",children:"How to execute this script ?"}),"\n",(0,r.jsxs)(n.p,{children:["Make sure you have the ",(0,r.jsx)(n.code,{children:"curl"})," or ",(0,r.jsx)(n.code,{children:"wget"})," package"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"sudo apt install curl\nsudo apt install wget\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"wget https://raw.githubusercontent.com/Hip5kull/Provider-3CX/master/provider3cx.sh && chmod +x provider3cx.sh && sudo bash provider3cx.sh\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"curl -O https://raw.githubusercontent.com/Hip5kull/Provider-3CX/master/provider3cx.sh && chmod +x provider3cx.sh && sudo bash provider3cx.sh\n"})}),"\n",(0,r.jsx)(n.p,{children:"Then simply enter the file name, company name and trunk server link."}),"\n",(0,r.jsx)(n.p,{children:"You will need to restart your 3CX's VM for the changes take effect."}),"\n",(0,r.jsx)(n.p,{children:"You can check the script below:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",metastring:"showLineNumbers",children:'#!/bin/bash\n############################################\n#\n# Automate 3CX Provider \n# You have to execute this script as root\n#\n# Execute the commands bellow:\n#\n# chmod u+x provider3cx.sh \n# sudo bash provider3cx.sh\n#\n#\n############################################\n\nif [[ $EUID -ne 0 ]]; then\n\n   echo "You have to execute this script as root." \n\n   exit 1\n\nfi\n\necho "Please enter the name of the file (without extension): "\nread filename\n\necho "Please enter your company name: "\nread companyname\n\necho "Please enter your trunk link: "\nread trunklink\n\nfunction copying(){\n    cp GenericVoIPProvider.pv.xml GenericVoIPProvider.pv.xml.old\n}\n\nfunction rename(){\n    mv GenericVoIPProvider.pv.xml ${filename}.pv.xml\n}\n\nfunction provider(){\n   echo \'<doc>\n<header>\n<name>\'${companyname}\'</name>\n<time>2023-06-19T12:19:55.9110258Z</time>\n<template>GenericVoIPProvider.pv.xml</template>\n<type>gateway-template</type>\n</header>\n<data>\n<device>\n<field name="Name">\'${companyname}\'</field>\n<type>provider</type>\n<manufacturer/>\n<model>provider</model>\n<field name="RegistrarHost">\'${trunklink}\'</field>\n<field name="RegistrarPort">5060</field>\n<field name="ProxyHost">\'${trunklink}\'</field>\n<field name="ProxyPort">5060</field>\n<field name="SecondaryRegistrar"/>\n<field name="IPRestriction">ANY</field>\n<field name="TransportRestriction">ANY</field>\n<field name="RequireAuthFor">4</field>\n<field name="IpInContactReg">2</field>\n<field name="IpInContactRegValue"/>\n<field name="TimeBetweenRegistration">60</field>\n<field name="RegistrarInvite">0</field>\n<field name="IsSupportReinvite">0</field>\n<field name="IsSupportReplaces">0</field>\n<field name="DisableVideo">1</field>\n<field name="SRTPMode">0</field>\n<field name="IsBindToMS">1</field>\n<codecs>\n<codec rfcname="pcma"/>\n<codec rfcname="g729"/>\n</codecs>\n<field name="Source" custom="" parameter="ContactHost">$GWHostPort</field>\n<field name="ParameterIn" custom="" parameter="FromUserPart">$CallerNum</field>\n<field name="ParameterIn" custom="" parameter="FromDisplayName">$CallerName</field>\n<field name="ParameterIn" custom="" parameter="ToUserPart">$CalledNum</field>\n<field name="ParameterOut" custom="" parameter="RequestLineURIUser">$CalledNum</field>\n<field name="ParameterOut" custom="" parameter="RequestLineURIHost">$GWHostPort</field>\n<field name="ParameterOut" custom="PUT YOUR TUNK PHONE NUMBER HERE" parameter="ContactUser">$CustomField</field>\n<field name="ParameterOut" custom="" parameter="ContactHost">$ContactUri</field>\n<field name="ParameterOut" custom="" parameter="ToDisplayName">$CalledName</field>\n<field name="ParameterOut" custom="" parameter="ToUserPart">$CalledNum</field>\n<field name="ParameterOut" custom="" parameter="ToHostPart">$GWHostPort</field>\n<field name="ParameterOut" custom="" parameter="FromDisplayName">$OriginatorCallerId</field>\n<field name="ParameterOut" custom="" parameter="FromUserPart">$OriginatorCallerId</field>\n<field name="ParameterOut" custom="" parameter="FromHostPart">$GWHostPort</field>\n<field name="ParameterOut" custom="3CX" parameter="UserAgentTextString">$CustomField</field>\n<field name="ParameterOut" custom="" parameter="RemotePartyIDCallingPartyDisplayName">$OriginatorCallerId</field>\n<field name="ParameterOut" custom="" parameter="RemotePartyIDCallingPartyUserPart">$OriginatorCallerId</field>\n<field name="ParameterOut" custom="" parameter="RemotePartyIDCallingPartyHostPart">$GWHostPort</field>\n</device>\n<sms>\n<variable name="MESSAGING_API_KEY">\n<option/>\n</variable>\n<variable name="PROVIDER_URL">\n<option/>\n</variable>\n<field name="Enabled">0</field>\n<field name="OptionalProvider">1</field>\n<field name="ProviderType">generic</field>\n<field name="OutboundRouting">1</field>\n<field name="ProviderName">Generic</field>\n</sms>\n</data>\n</doc>\' > ${filename}.pv.xml\n}\n\nfunction main(){\n    while true;\n    do\n        cd /var/lib/3cxpbx/Instance1/Data/Http/Interface/provisioning/\n        echo " ---- Provider Execution ---- "        \n        echo ""\n\n        local state=0\n        echo "[+] Backup GenericVoIPProvider....done "\n        copying\n        state=$((state + $?))\n\n        echo "[+] Renaming to ${filename}.pv.xml....done "; rename\n        state=$((state + $?))\n\n        echo "[+] Replacing XML provider....done "; provider\n        state=$((state + $?))\n    \n        if [ $state -eq 0 ]; then\n            echo ""\n            echo "All successful operations"\n            break\n        else\n            echo ""\n            echo "One or more operations have failed, status: $state "\n            break\n        fi\n    done\n}\n\nmain;\n\nwhile true; do\n    echo ""\n    read -p "Do you want to restart 3CX ? (Y/n)" reponse\n    case $reponse in\n        [Yy]* ) echo "[+] Reboot in progress...."\n                shutdown -r now\n                ;;\n        [Nn]* ) exit 0;;\n        * ) echo "Please input Y ou N.";;\n    esac\ndone\n\n'})})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var r=t(6540);const a={},i=r.createContext(a);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);