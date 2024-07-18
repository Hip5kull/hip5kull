import time
#import beepy

def countdown(duration):
    while duration > 0:
        m, s = divmod(duration, 60)
        print(f"Cuisson en cours{'.' * (duration % 10)}", end="\r")
        if duration % 10 == 0:
            print(f"Temps restant : {m}m:{s:02d}{'.' * (duration // 10)}", end="\r")
        time.sleep(1)
        duration -= 1

        print("Cuisson terminée !")
        #beepy.beep(sound=1)

def main():
    print("Options :")
    print("1. Oeufs à la coque (3 minutes)")
    print("2. Oeufs mollets (6 minutes)")
    print("3. Oeufs durs (9 minutes)")

    choice = input("Choisissez une option (1/2/3) : ")
    if choice == "1":
        countdown(3 * 60)
    elif choice == "2":
        countdown(6 * 60)
    elif choice == "3":
        countdown(9 * 60)
    else:
        print("Option invalide. Veuillez choisir 1, 2 ou 3.")

if __name__ == "__main__":
    main()
