def demander_nom():
    reponse_nom = ""
    while reponse_nom == "":
        reponse_nom = input("Quel est ton nom ? ")
    return reponse_nom

def demander_age(nom_personne):
    age_int = 0
    while age_int == 0:
        age_str = input("Quel est votre âge ? ")
        try:
            age_int = int(age_str)
        except:
            print("ERREUR: Vous devez rentrer un nombre pour l'âge.")
    return age_int

def afficher_personne(nom, age):
    print()
    print(f"Vous vous appelez {nom}, vous avez {str(age)} ans.")
    print(f"L'an prochain vous aurez {str(age+1)} ans.")

    if age > 18:
        print("Vous êtes majeur.")
    elif age == 18:
        print("Tout juste majeur. Félicitations !")
    elif age == 17:
        print("Vous êtes presque majeur.")
    else:
        print("Vous êtes mineur.")

nom1 = demander_nom()
nom2 = demander_nom()
age1 = demander_age(nom1)
age2 = demander_age(nom2)

afficher_personne(nom1, age1)
afficher_personne(nom2, age2)