# Breakpoint testing

Les tests de points de rupture visent à trouver les limites du système. Les raisons pour lesquelles vous voudrez peut-être connaître les limites comprennent :

- Pour régler ou prendre soin des points faibles du système pour déplacer ces limites plus élevées à des niveaux plus élevés.
- Pour aider à planifier les étapes de remédiation dans ces cas et à se préparer lorsque le système approche de ces limites.

En d'autres termes, savoir où et comment un système commence à échouer aide à se préparer à de telles limites.

!> Ce test doit généralement être arrêté manuellement ou automatiquement lorsque les seuils commencent à échouer. Lorsque ces problèmes apparaissent, le système a atteint ses limites.

## Quand exécuter un test de point d'arrêt

Les équipes effectuent un test de point d'arrêt chaque fois qu'elles doivent connaître les différentes limites de leur système. Certaines conditions qui peuvent justifier un test de point d'arrêt sont les suivantes :

- La nécessité de savoir si la charge du système devrait augmenter continuellement
- Si la consommation actuelle des ressources est considérée comme élevée
- Après des changements importants dans la base de code ou l'infrastructure.

La fréquence d'exécution de ce type de test dépend du risque d'atteindre les limites du système et du nombre de modifications apportées aux composants de l'infrastructure de provisionnement.

Une fois que le point d'arrêt est en cours d'exécution et que les limites du système ont été identifiées, vous pouvez répéter le test après l'exercice de réglage pour valider comment il a affecté les limites. Répétez le cycle de test jusqu'à ce que l'équipe soit satisfaite.

## Considérations

- Évitez les tests de points d'arrêt dans les environnements de cloud élastique.
- Augmentez la charge progressivement.
- Une défaillance du système pourrait signifier différentes choses pour différentes équipes
  - Performance dégradée. Les temps de réponse ont augmenté et l'expérience utilisateur a diminué.
  - Performance gênante. Les temps de réponse atteint un point où l'expérience utilisateur se dégrade gravement.
  - Délais d'attente. Les processus échouent en raison de temps de réponse extrêmement élevés.
  - Erreurs. Le système commence à répondre avec des codes d'erreur HTTP.
  - Défaillance du système. Le système s'est effondré.
- Vous pouvez répéter ce test plusieurs fois
- Exécutez des points d'arrêt uniquement lorsque le système est connu pour fonctionner sous tous les autres types de tests.

## Breakpoint testing en k6

```bash
K6_WEB_DASHBOARD=true k6 run samples/breakpoint-test.js
```

## Analyse des résultats

Un test de point d'arrêt doit provoquer une défaillance du système. Le test aide à identifier les points de défaillance de notre système et le comportement du système une fois qu'il atteint ses limites.

Une fois les limites du système identifiées, l'équipe a deux choix : les accepter ou régler le système.

Si la décision est d'accepter les limites, les résultats des tests aident les équipes à se préparer et à agir lorsque le système approche de ces limites.

Ces actions pourraient être:

- Empêcher d'atteindre de telles limites
- Développer les ressources du système
- Mettre en œuvre des mesures correctives pour le comportement du système à sa limite
- Réglez le système pour repousser ses limites

Si l'action prise est d'accorder le système, réglez, puis répétez le test du point d'arrêt pour savoir où et si les limites du système ont été déplacées.
