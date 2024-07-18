import random

capitales = {
    "France": "Paris",
    "Allemagne": "Berlin",
    "Italie": "Rome",
    "Espagne": "Madrid",
    "Portugal": "Lisbonne",
    "Belgique": "Bruxelles",
    "Pays-Bas": "Amsterdam",
    "Royaume-Uni": "Londres",
    "Irlande": "Dublin",
    "Danemark": "Copenhague",
    "Norvège": "Oslo",
    "Suède": "Stockholm",
    "Finlande": "Helsinki",
    "Grèce": "Athènes",
    "Autriche": "Vienne",
    "Suisse": "Berne",
    "Hongrie": "Budapest",
    "Pologne": "Varsovie",
    "République tchèque": "Prague",
    "Slovaquie": "Bratislava",
    "Roumanie": "Bucarest",
    "Bulgarie": "Sofia",
    "Croatie": "Zagreb",
    "Slovénie": "Ljubljana",
    "Estonie": "Tallinn",
    "Lettonie": "Riga",
    "Lituanie": "Vilnius"
}

def generer_question():
    pays, capitale = random.choice(list(capitales.items()))
    mauvaises_reponses = random.sample([c for c in capitales.values() if c != capitale], 3)
    reponses = mauvaises_reponses + [capitale]
    random.shuffle(reponses)
    assoc_reponses = {chr(i + 97): reponse for i, reponse in enumerate(reponses)}
    return pays, capitale, assoc_reponses

def afficher_score_final(score):
    print("Votre score final est de :", score)

score = 0
for i in range(1, 5):
    pays, capitale, assoc_reponses = generer_question()
    print("Question", i, "/4")
    print("Quelle est la capitale de la", pays, "?")
    for lettre, reponse in assoc_reponses.items():
        print(lettre, "-", reponse)
    reponse_utilisateur = input("Votre réponse : ").lower()

    if reponse_utilisateur in assoc_reponses and assoc_reponses[reponse_utilisateur] == capitale:
        print("Bonne réponse !")
        score += 1
    else:
        print("Mauvaise réponse ! La bonne réponse était :", capitale)

    print()

afficher_score_final(score)

