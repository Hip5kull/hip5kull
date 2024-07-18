def output_multiplications(min, max):
    if min > max:
        print("Erreur : la valeur minimale ne peut pas être supérieure à la valeur maximale.")
        return

    for i in range(min, max + 1):
        print(f"Table de multiplication par {i}")
        for j in range(1, 11):
            print(f"{i} x {j} = {i * j}")
        print()

output_multiplications(1, 10)

