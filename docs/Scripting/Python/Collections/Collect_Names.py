
names = []

while True:
    name = input(" Quel est votre nom ? ")
    if name == "":
        break
    names.append(name)

print("Liste des noms :")
for name in names:
    print(name)



