
# Mauvaise réponse = arrêt du programme et affiche le bon nombre et score final

import random
import time
import os

def clear_screen():
    if(os.name == 'posix'):
        os.system('clear')
    else:
        os.system('cls')

def main():
    sequence = [str(random.randint(0, 9)) for _ in range(4)]
    score = 0
    
    while True:
        clear_screen()
        print("Retenez la séquence")
        time.sleep(1)

        clear_screen()
        print("".join(sequence))
        time.sleep(3)

        clear_screen()
        reponse = input("Quelle est la séquence ? ")
        
        if reponse == "".join(sequence):
            clear_screen()
            score += 1
            print(f"Bonne réponse, votre score est: {score}")
            time.sleep(1)
            sequence.append(str(random.randint(0, 9)))
        else:
            clear_screen()
            print(f'Mauvaise réponse, la séquence était: {"".join(sequence)}, votre score final est: {score}')
            time.sleep(3)
            break

if __name__ == "__main__":
    main()
#score = 0
#suite_str = str(n)*4

#print(" Défi de mémorisation ! ")
#clear_and_wait()
#print("Prêts ?")
#clear_and_wait()
#print(f"Mémorisez la suite suivante: {suite}")



