
# Implémenter la fonction input_output_informations
# Paramètre: numero_personne
# rien retourner
# input / print
# Nom / Age
def majority(age):
    if int(age) <= 0:
        return False
    if int(age) >= 18:
        return True
    return False

def input_informations(numero_personne):
    nom = input("Nom de la personne " + str(numero_personne) + ": ")
    age = input("Age de la personne " + str(numero_personne) + ": ")
    return nom, age

def output_informations(numero_personne, nom, age):
    print("Le nom comporte", len(nom), "lettres")
    print("La personne", str(numero_personne), "est", nom, "son âge est", age, "ans")

def input_output_informations(numero_personne):
    nom, age = input_informations(numero_personne)
    output_informations(numero_personne, nom, age)
    if majority(age):
        print("Il est majeur.")
    else:
        print("Il est mineur.")

nb_personnes = input("Combien de personnes participent ? ")

for i in range(int(nb_personnes)):
    input_output_informations(i+1)

output_informations("007", "James", "40")
