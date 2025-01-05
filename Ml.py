# -*- coding: utf-8 -*-
"""
Created on Fri Nov 29 16:48:38 2024

@author: psow6

"""


# Pour les images
import os
from PIL import Image
import numpy as np

from sklearn.cluster import KMeans
import matplotlib.pyplot as plt


chemin= r'C:\Users\psow6\OneDrive\Bureau\COURS\Info\Algo_et_programmation\Projet_L2\inspiration\entrainement'

 # va contenir les matrices numeriques de l'image
for filename in os.listdir(chemin): # parcour fichier du repertoire
    if filename.endswith('.jpg') or filename.endswith('.png'):
        print(filename)
        chemin_image=os.path.join(chemin,filename) # cree le chemin complet de l'image avec son repertoire et tout
        image=Image.open(chemin_image)
        imageDonnees=np.array(image) # convertit en matrice

        #Pour la normalisation
        normalisation=imageDonnees/255.0 # les valeurs sont entre 0 et 1
        taille=normalisation.shape # les valeurs hauteurs, longeurs et canaux 
        redimensions=normalisation.reshape(-1,3) # aplatit chaque image en vecteur 2D
        model=KMeans(n_clusters=4) # cree le model de machine avec les 4 cluster
        model.fit(redimensions)# execute l'algo sur nos donness (ici les images contenues dans tab)
        model.predict(redimensions)
        couleurs_dominantes = model.cluster_centers_
        print("Couleurs dominantes :")
        print(couleurs_dominantes)
        plt.figure(figsize=(6, 1))
        plt.imshow([couleurs_dominantes])
        plt.show()
            


    