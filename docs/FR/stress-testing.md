# Stress testing

Les tests de résistance évaluent les performances du système lorsque les charges sont plus lourdes que d'habitude.

Le modèle de charge d'un test de contrainte ressemble à celui d'un test de charge moyenne. La principale différence est une charge plus élevée.

## Quand effectuer un test de stress

Les tests de résistance vérifient la stabilité et la fiabilité du système dans des conditions d'utilisation intensive. 

## Considérations

Lorsque vous effectuez un test de résistance, tenez compte des éléments suivants :

- La charge devrait être plus élevée que ce que le système connaît en moyenne (une augmentation de la charge moyenne de 50 ou 100 %).
- N'exécutez que des tests de résistance après avoir exécuté des tests de charge moyenne.
- Réutilisez le script de test Average-Load (Modifiez les paramètres pour avoir une charge ou des VU plus élevées.).
- Attendez-vous à de moins mauvaises performances par rapport à une charge moyenne.

## Stress test en k6

```bash
K6_WEB_DASHBOARD=true k6 run samples/stress-test.js
```

## Analyse des résultats

Comme le test de charge moyenne, un résultat initial pour le test de stress apparaît pendant la période de montée en puissance pour identifier la dégradation du temps de réponse à mesure que la charge augmente plus loin que l'utilisation moyenne. Généralement, les performances se dégradent, et même la stabilité du système s'écrase à mesure que nous poussons le système plus loin que le test de charge moyenne.

Pendant la période de charge complète, la vérification est vitale si les performances et la consommation de ressources du système restent stables avec une charge plus élevée.
