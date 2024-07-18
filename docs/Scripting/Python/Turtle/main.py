import turtle

t = turtle.Turtle()

def escalier(taille,nb):
    for _ in range(0, nb):
        t.forward(taille)
        t.left(90)
        t.forward(taille)
        t.right(90)
        taille -= 10 #décrémentation
    t.forward(taille)

# escalier(60,5)

def carre(taille):
    for i in range (0, 4):
        t.forward(taille)
        t.left(90)    

#carre(100)

def carres(taille_depart,nb):
    for i in range(0, nb):
        taille = (i+1)*taille_depart
        carre(taille)

carres(10, 10)

turtle.done()

