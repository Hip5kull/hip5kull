
import random

NB_MIN = 1
NB_MAX = 10
#NB_A_ALEATOIRE = random.randint(NB_MIN, NB_MAX)
#NB_B_ALEATOIRE = random.randint(NB_MIN, NB_MAX)
NB_QUESTIONS = 4

def question():
    a = random.randint(NB_MIN, NB_MAX)
    b = random.randint(NB_MIN, NB_MAX)
    o = random.randint(0, 1)
    operateur_str = "+"
    if o == 1:
        operateur_str = "*"
    reponse_str = input(f"Calculez: {a} {operateur_str} {b} = ")
    reponse_int = int(reponse_str)
    calcul = a+b
    if o == 1:
        calcul = a*b
    if reponse_int == calcul:
        #print("Réponse correcte")
        return True
    return False

nb_points = 0
for i in range(0, NB_QUESTIONS):
    print()
    print(f"Question n°{i+1} sur {NB_QUESTIONS}:")
    if question():
        print("Réponse correcte.")
        nb_points += 1
    else:
        print("Réponse incorrecte")

print(f"Votre note est {nb_points}/{NB_QUESTIONS}")

moyenne = int(NB_QUESTIONS/2)
if nb_points == NB_QUESTIONS:
    print("Excellent")
elif nb_points == 0:
    print("Révisez vos maths")
elif nb_points > moyenne:
    print("Pas mal")
else:
    print("Peut mieux faire")
