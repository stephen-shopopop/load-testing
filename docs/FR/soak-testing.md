# Soak testing

Le test de trembage est une autre variante du test de charge moyenne. Il se concentre sur de longues périodes, en analysant ce qui suit :

- La dégradation des performances et de la consommation de ressources du système sur de longues périodes.
- La disponibilité et la stabilité du système pendant de longues périodes.

## Quand effectuer un test de tremper

La plupart des systèmes doivent rester allumés et continuer à fonctionner pendant des jours, des semaines et des mois sans intervention. Ce test vérifie la stabilité et la fiabilité du système sur de longues périodes d'utilisation.

## Considérations

Lorsque vous vous préparez à exécuter un test de trempage, tenez compte des points suivants:

- Configurez la durée pour qu'elle soit considérablement plus longue que tout autre test (3, 4, 8, 12, 24 et 48 à 72 heures).
- Si possible, réutilisez le script de test de charge moyenne
- N'exécutez pas de tests de trempage avant d'effectuer des tests de fumée et de charge moyenne.
- Surveillez les ressources du backend et l'efficacité du code.

!> Étant donné que nous vérifions la dégradation du système, il est fortement recommandé de surveiller les ressources du backend et l'efficacité du code. De tous les types de tests, la surveillance backend est particulièrement importante pour les tests de trempage.

## Soak test en k6

```bash
K6_WEB_DASHBOARD=true k6 run samples/soak-test.js
```

## Analyse des résultats

Si nous exécutons ce test après les types précédents, nous devrions avoir un système performant dans les scénarios précédents. Dans ce test, surveillez les changements dans toute mesure de performance au fil du temps. Essayez de corréler tout impact avec les changements de mesure du backend qui indiquent une dégradation au fil du temps.

Les ressources backend à vérifier sont la consommation de RAM, le processeur, le réseau et la croissance des ressources cloud, entre autres.

Le résultat attendu est que les performances et l'utilisation des ressources du backend restent stables ou dans les variations attendues.
