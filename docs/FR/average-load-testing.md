# Average-load testing

Un test de charge moyenne évalue les performances du système sous charge typique. La charge typique peut être une journée régulière en production ou un moment moyen.

Les tests de charge moyenne simulent le nombre d'utilisateurs et de demandes simultanées par seconde qui reflètent les comportements moyens dans l'environnement de production. Ce type de test augmente généralement le débit ou les VU progressivement et maintient cette charge moyenne pendant un certain temps. Selon les caractéristiques du système, le test peut s'arrêter soudainement ou avoir une courte période de démontage.

## Quand exécuter un test de charge moyenne

Les tests de charge moyenne permettent de comprendre si un système atteint les objectifs de performance un jour typique (charge commune). 

Vous devez exécuter un test de charge moyenne pour :

- Évaluez les performances de votre système sous une charge typique.
- Identifier les signes de dégradation précoce pendant les périodes de montée en puissance ou de charge complète.
- Assurez-vous que le système répond toujours aux normes de performance après les changements du système (code et infrastructure).

## Considérations

Lorsque vous préparez un test de charge moyenne, tenez compte des éléments suivants :

- Connaître le nombre spécifique d'utilisateurs et le débit typique par processus dans le système.
- Augmentez progressivement la charge jusqu'à la moyenne cible.
- Maintenir la moyenne pendant une période plus longue que la montée en puissance.
- Considérez une période de réallt (La descente se produit lorsque l'activité virtuelle des utilisateurs diminue progressivement).

## Average test en k6

```bash
K6_WEB_DASHBOARD=true k6 run samples/average-load-testing.js
```

## Analyse des résultats

Un résultat initial pour le test de charge moyenne apparaît pendant la période de montée pour déterminer si le temps de réponse se dégrade à mesure que la charge augmente.

Le test valide si les performances et la consommation de ressources du système restent stables pendant la période de pleine charge, car certains systèmes peuvent afficher un comportement erratique pendant cette période.

Une fois que vous savez que votre système fonctionne bien et survit à une charge typique, vous devrez peut-être le pousser plus loin pour déterminer comment il se comporte dans des conditions supérieures à la moyenne.
