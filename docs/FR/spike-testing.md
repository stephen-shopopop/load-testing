# Spike testing

Un test de pointe vérifie si le système survit et fonctionne sous des poussées d'utilisation soudaines et massives.

Les tests de pointe augmentent à des charges extrêmement élevées dans un temps de montée en puissance très court ou inexistant. Habituellement, il n'y a pas de période de plateau ou est très bref, car les utilisateurs réels ne restent généralement pas pour faire des étapes supplémentaires dans ces situations. De la même manière, la montée en panne est très rapide ou inexistante, ce qui laisse le processus itérer une seule fois.

Ce test peut inclure des processus différents des types de test précédents, car les pics ne font souvent pas partie d'une journée moyenne en production. Il peut également nécessiter l'ajout, la suppression ou la modification de processus sur le script qui ne figuraient pas dans les tests de charge moyenne.

## Quand effectuer un test de pointe

Ce test doit être exécuté lorsque le système s'attend à recevoir une poussée soudaine d'activité.

## Considérations

Lorsque vous vous préparez à un test de pointe, tenez compte de ce qui suit :

- Concentrez-vous sur les processus clés de ce type de test (Évaluer si le pic de trafic déclenche les mêmes processus ou des processus différents par rapport aux autres types de test).
- Le test ne se termine souvent pas (Les erreurs sont courantes dans ces scénarios).
- Exécutez, ajustez, répétez.
- Surveiller.

!> La surveillance du backend est un must pour des résultats réussis de ce test.

## Spike test en k6

```bash
K6_WEB_DASHBOARD=true k6 run samples/spike-test.js
```

## Analyse des résultats

Certaines mesures de performance à évaluer dans les tests de pointe comprennent les vitesses de pod, les temps de récupération après la précipitation de la charge, le temps de retour à la normale ou le comportement sur les processus système cruciaux pendant la surcharge.

Trouver comment le système réagit (s'il survit) à la ruée soudaine permet de l'optimiser pour garantir qu'il peut fonctionner lors d'un événement réel. Dans certains cas, la charge est si élevée que l'ensemble du système devoir être optimisé pour faire face aux processus clés. Dans ces cas, répétez le test jusqu'à ce que la confiance du système soit élevée.
