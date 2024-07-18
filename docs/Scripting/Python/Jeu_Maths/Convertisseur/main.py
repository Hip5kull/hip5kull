
def convert_inch_cm():
    while True:
        choix = input("Souhaitez vous convertir de Pouces vers cm (1) ou de cm vers Pouces (2) ? (1 ou 2): ")
        if choix not in ("1", "2"):
            print("Choix invalide. Veuillez saisir 1 ou 2.")
            continue
        
        try:
            if choix == "1":
                pouces = float(input("Entrez la valeur en pouces : "))
                cm = pouces * 2.54
                print(f"{pouces} pouces est égale à {cm:.2f} cm.")
            elif choix == "2":
                cm = float(input("Entrez la valeur en centimètres : "))
                pouces = cm / 2.54
                print(f"{cm} est égale à {pouces:.2f} pouces.")
        except ValueError:
            print("Erreur. Veuillez saisir un nombre entier ou décimal (ex: 11 ou 9.8)")

        reponse = input("Voulez-vous continuer ? Y/N ")
        if reponse.lower() != "y":
            break

convert_inch_cm()
