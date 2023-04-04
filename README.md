# Bowling

Dans cet exercice au TDD, nous avons besoin d'un code pour comptabiliser les points d'une partie de bowling.

## Règles
Le jeu se compose de 10 frames. Une frame est composée d'un ou deux lancers de balle avec 10 quilles sont placées au début de celle-ci. Il existe trois résultats possible d'une frame :

Un Strike lorsque les 10 quilles sont renversés par le premier lancer. La valeur totale d'un strike est de 10 plus le nombre de quilles renversées lors des deux prochains lancers. Si un strike est immédiatement suivi d'un second strike, la valeur du premier strike ne peut être déterminée tant que la boule n'est pas lancée une fois de plus.

Un spare se produit lorsque les dix quilles sont renversées par le deuxième lancer. La valeur totale d'un spare est de 10 plus le nombre de quilles renversées lors de leur prochain lancer.

Une frame ouverte est lorsqu'un score inférieur à 10 est enregistré pour cette frame. Dans ce cas, le score pour la frame est le nombre de quilles renversées.

Voici un exemple en trois frames :

| Frame 1         | Frame 2       | Frame 3                |
| :-------------: |:-------------:| :---------------------:|
| 10 (strike)      | 7/3 (spare)    | 9/0 (open frame)       |

- La trame 1 est (10 + 5 + 5) = 20
- La trame 2 est (5 + 5 + 9) = 19
- La trame 3 est (9 + 0) = 9

Cela signifie que le score total est de 48.

La dixième frame du jeu est un cas particulier. Si quelqu'un lance un strike ou un spare, il obtient respectivement un ou deux lancers supplémentaires. Un lancer supplémentaire existe pour calculer le total de la 10e frame. Marquer un strike ou un spare sur le lancer supplémentaire ne donne pas plus de lancer au joueur. La valeur totale de la 10e frame est le nombre total de quilles renversées.

Pour une dixième frame de 10/6/4 (strike et spare), la valeur totale est de 20.

Pour une dixième frame de 10/10/10 (trois strike), la valeur totale est de 30.

## Objectif

Vous devez réaliser les tests en suivant la méthodologie TDD. Considérez chaque cas de test un par un. Ecrivez le test associé et le résultat attendu dans le fichier **bowling.spec.js**. Puis ensuite adaptez le code du **bowling.js** en modifiant, ajoutant du code pour correspondre à l'attendu. La base de code qui est donnée est correcte et n'a pas besoin d'être changé pour réussir l'exercice cependant si vous trouvez une alterntive rien ne vous empêche de modifier complètement ce fichier tant que les tests correspondent à l'attendu.

