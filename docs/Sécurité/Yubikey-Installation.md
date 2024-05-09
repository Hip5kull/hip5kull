# Yubikey Installation

## What is Yubikey?

The YubiKey is an electronic authentication device manufactured by Yubico that supports one-time passwords, encryption and public key authentication, and the Universal Second Factor protocol developed by the FIDO alliance.

![Yubikey-Family](@site/src/components/YubiKey-5.png)

## Use Yubikey for `sudo` commands

What can you do with a Yubikey in a Linux environment?

First, we'll configure the Yubikey to be used as an authenticator for `sudo` commands.

### Dependencies Installation

```sh
sudo add-apt-repository ppa:yubico/stable && sudo apt update
sudo apt install libpam-u2f pamu2fcfg
```
If you see that the first command connot get the signing key, try adding it manually with the command:

```sh
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 32CBA1A9
```

### Associate U2F Key with his account
1. Open terminal
2. Plug the Yubikey
3. Execute the commands below:
```sh
mkdir -p ~/.config/Yubico
pamu2fcfg > ~/.config/Yubico/u2f_keys
```
When Yubikey flashes, touch the metal part.

### Configure the system to use U2F's keys.

#### Passwordless secure section

:::warning
This is the Passwordless section. You can execute sudo commands with or without Yubikey.
:::

Edit the `/etc/pam.d/common-auth` file. Before any `auth` instructions, insert the following line:

```sh
auth sufficient pam_u2f.so
```

Save and unplug Yubikey. We'll now check that the `sudo` command is working correctly.
Open a new terminal and type the following command:

```sh
sudo echo test
```
When prompted, type your password and press Enter. The command should now execute correctly. Now plug in the Yubikey and open a new terminal.
Replay the test command above. The Yubikey should start flashing.
#### Secure sudo commands with 2FA
:::tip
This is the 2FA and more secure section.
:::
  1. Open Terminal.
  2. Insert your U2F Key.
```sh
mkdir -p ~/.config/Yubico
pamu2fcfg > ~/.config/Yubico/u2f_keys
```
You may be prompted for a PIN when running `pamu2fcfg`. If you are, note that this is your YubiKey's FIDO2 PIN you need to enter. For more information, see Understanding YubiKey PINs.
When your device begins flashing, touch the metal contact to confirm the association.

If you have backup devices, use the steps below to associate them with your account. If you do not have a backup device available at this time, you can add one later using the steps below as long as you still have access to your account. 
:::warning
Having a backup device is strongly recommended so that if your device is lost or broken, you will not be locked out of your computer.
:::
1. Open Terminal.
```sh
pamu2fcfg -n >> ~/.config/Yubico/u2f_keys
```
When your device begins flashing, touch the metal contact to confirm the association.

If you would like to add additional layer of security you can change the output of the u2f_keys file to an area of the OS where you'll need sudo permission to edit the file ( e.g. /etc ). After creating a directory named Yubico ( e.g. /etc/Yubico ). You can then move the file from ~/.config/Yubico to /etc/Yubico by running the command ( `sudo mv  ~/.config/Yubico/u2f_keys /etc/Yubico/u2f_keys` ).

Once the `u2f_keys` file is moved to a safer location the PAM file will need to be modified so that u2f PAM module can find the u2f_keys file. This is done by add `authfile=/etc/Yubico/u2f_keys` to the end of the line of file for pam_u2f.so within the file needed for authentication. This is normally found on the path `/usr/lib/x86_64-linux-gnu/security/pam_u2f.so`, but this could be different depending on setup. 

:::warning
Please note that once you modify the /etc/pam.d/sudo file to require the YubiKey if you were to lose or misplace the YubiKey you will not be able to modify or change the file to remove the YubiKey requirement. 
:::
:::warning
By enabling using this process if the files are not readable by users it will cause you to be locked out of your system. The most common cause is encrypted /home/ folder which will not be readable by root. This will cause you to be locked out once you reset the machine
:::
 
#### Configuring the System to Use the U2F Keys

This section covers how to require the YubiKey when using the sudo command, which should be used as a test so that you do not lock yourself out of your computer.
  1. Open Terminal.
```sh
sudo nano /etc/pam.d/sudo
```
  2. Add the line below after the “@include common-auth” line.
```sh
auth       required   pam_u2f.so
``` 
:::note
If you have moved the u2f_keys file to /etc/Yubico/u2f_keys as mentioned, you will need to append authfile and a path to the PAM configuration, as shown below:
:::
```sh 
auth       required   pam_u2f.so authfile=/etc/Yubico/u2f_keys
```
  3. Press Ctrl+O and then Enter to save the file. Be sure you do not close the Terminal window, otherwise you will not be able to revert the changes.
  4. Remove your device from the computer.
  5. Open a new Terminal. 
    In the new Terminal, run: `sudo echo test`. When prompted, enter your password and press Enter. 
    Even with the correct password, the authentication should fail as the U2F Key is not plugged in. If the authentication succeeds without the U2F Key, that indicates the U2F PAM module was not installed or there is a typo in the changes you made to /etc/pam.d/sudo. 
  6. Insert your device.
  7. Open a new Terminal and run `sudo echo test` again. When prompted, enter your password and press Enter. Then, touch the metal contact on your U2F Key when it begins flashing.

Congratulations! If the password was accepted this time you have configured the system correctly and can continue on to the next section for requiring the U2F Key to login. 
:::note
If you do not want to require the U2F Key to run the sudo command, remove the line you added to the /etc/pam.d/sudo file.
:::

![Yubikey-touch](@site/src/components/Yubikey-touch.jpg)

The command have to execute when you touch the metal part without insert your password.
:::note
The Yubikey may not work the first time. Restart your computer or server so that the settings are taken into account, and try again.
:::

## Lock session when unplugging Yubikey

From now on, your Yubikey can be used to authenticate `sudo` commands. Let's take it a step further and make the session lock when we remove the key.

Start to create lock script `/usr/local/bin/lockscreen.sh`

```sh
#!/bin/bash

sleep 2

if ! ykman info >> /dev/null 2>&1
then
loginctl lock-sessions
fi
```

Next, the script is made executable:

```sh
sudo chmod +x /usr/local/bin/lockscreen.sh
```
Then, we add a new **UDEV** rule into `/etc/udev/rules.d/20-yubikey.rules`

```sh
ACTION=="remove", ENV{SUBSYSTEM}=="usb", ENV{PRODUCT}=="1050/407/536", RUN+="/usr/local/bin/lockscreen.sh"
```

To determine the `ENV{PRODUCT}`:

```sh
udevadm monitor --environment --udev
```
1. Insert your Yubikey
2. Remove your key

In the output, locate a block of lines containing the `ID_VENDOR=Yubico` line and the `ID_VENDOR_ID`, `ID_MODEL_ID` and `ID_REVISION` entries. Concatenate these last 3 values, without the 0's on the left, separated by `/`.
For example, with the following lines, you'll get 1050/407/536 :

```sh
ID_VENDOR=Yubico
ID_VENDOR_ID=1050
ID_MODEL_ID=0407
ID_REVISION=0536
```
Then, reload configuration:

```sh
sudo udevadm control --reload-rules
```

:::warning
I'm a user of the Kaisen Linux distribution, and sometimes the Yubikey is inserted before booting. When I get to the session lock screen, the Yubikey flashes, I press the metal part, the session unlocks but I only have the wallpaper. I'm currently trying to find out what's blocking it.
:::
