---
id: collections-python
title: Collections Python
custom_edit_url: null
---

# Collections Python

## Ajouter des objets à une collection

```python
names = []

while True:
    name = input(" Quel est votre nom ? ")
    if name == "":
        break
    names.append(name)

print("Liste des noms :")
for name in names:
    print(name)

  
```

## Distances minimum

```python 
import operator

first_names = ["Alice", "Bob", "Charlie", "Dave", "Eve", "Edouard", "Brahim"]
distance_chauffeur_km = [1.5, 2.2, 0.4, 0.9, 7.1, 1.1, 0.6]

distance_pairs = list(zip(first_names, distance_chauffeur_km))

min_dist = min(distance_pairs, key=operator.itemgetter(1))


print("Votre chauffeur est :", min_dist, "km")
```

