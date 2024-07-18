import time

def cuire_oeufs(duree):
    temps_restant = duree * 60
    minutes, secondes = divmod(temps_restant, 60)

    print(f"Cuisson en cours... Temps restant : {minutes:02d}:{secondes:02d}")

    for i in range(temps_restant):
        time.sleep(1)

        if i % 10 == 0:
            minutes, secondes = divmod(temps_restant - i, 60)
            print(f"\rTemps restant : {minutes:02d}:{secondes:02d}", end="")

        else:
            print(".", end="", flush=True)

    print("\nCuisson terminée !")

if __name__ == "__main__":
    print("Choisissez le type de cuisson pour vos oeufs :")
    print("1. Oeufs à la coque (3 minutes)")
    print("2. Oeufs mollets (6 minutes)")
    print("3. Oeufs durs (9 minutes)")

    choix = int(input("Entrez le numéro correspondant à votre choix : "))

    if choix == 1:
        cuire_oeufs(3)
    elif choix == 2:
        cuire_oeufs(6)
    elif choix == 3:
        cuire_oeufs(9)
    else:
        print("Choix invalide. Veuillez réessayer.")

