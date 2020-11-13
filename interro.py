# -*- coding: utf-8 -*-

import random

#Mettre les définitions ci-dessous, en respectant la forme "Nom":"Défintion",
definitions = {
    "NOM 1":"Définition 1",
    "NOM 2":"Définition 2",
    "Nom 3":"Définition 3"
}




#Pas toucher !
nb_def = len(definitions)
print("\n-------------------------------------------------------------\n")

while 0 < len(definitions):
    cle = list(definitions.keys())
    i = random.randrange(len(definitions))
    print("Définition de : "+cle[i])
    x = input()
    print("Réponse : "+definitions.pop(cle[i]))
    print("\n-------------------------------------------------------------\n")

input("FIN")

