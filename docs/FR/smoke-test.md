# Smoke testing

Les smoke test ont une charge minimale. Exécutez-les pour vérifier que le système fonctionne bien avec une charge minimale et pour recueillir des valeurs de performance de base.

Ce type de test consiste en des tests en cours d'exécution avec quelques VU - plus de 5 VU pourraient être considérés comme un test de mini-charge.

De même, le test doit être exécuté pendant une courte période, soit un faible nombre d'itérations, soit une durée de quelques secondes à quelques minutes maximum.

## Quand faire un smoke test (test de fumée)

Les équipes doivent exécuter des tests de fumée chaque fois qu'un script de test est créé ou mis à jour. Les smoke test doivent également être effectués chaque fois que le code d'application pertinent est mis à jour.

C'est une bonne pratique d'exécuter un test de fumée comme première étape, avec les objectifs suivants :

- Vérifiez que votre script de test ne contient pas d'erreurs.
- Vérifiez que votre système ne génère aucune erreur (performance ou système) lorsqu'il est sous une charge minimale.
- Recueillez les mesures de performance de base de la réponse de votre système sous une charge minimale.
- Avec une logique simple, pour servir de test synthétique pour surveiller les performances et la disponibilité des environnements de production.

## Considérations

Lorsque vous préparez un test de fumée, tenez compte de ce qui suit :

Chaque fois que vous créez ou mettez à jour un script, exécutez un test de fumée

Parce que les tests de fumée vérifient les scripts de test, essayez d'en exécuter un chaque fois que vous créez ou mettez à jour un script. Évitez d'exécuter d'autres types de tests avec des scripts non testés.

Gardez le débit faible et la durée courte

Configurez votre script de test pour qu'il soit exécuté par un petit nombre de VU (de 2 à 20) avec peu d'itérations ou de brèves durées (30 secondes à 3 minutes).

## Smoke test en k6

```bash
K6_WEB_DASHBOARD=true k6 run samples/smoke-test.js
```

![alt text](https://grafana.com/media/docs/k6-oss/chart-smoke-test-k6-script-example.png)

## Analyse des résultats

Le test de fumée valide initialement que votre script s'exécute sans erreur. Si des erreurs liées au script apparaissent, corrigez le script avant d'essayer des tests plus approfondis.

D'autre part, si vous remarquez de mauvaises performances avec ces faibles chiffres VU, signalez-le, réparez votre environnement et réessayez avec un test de fumée avant tout autre test.

Une fois que votre test de fumée ne montre aucune erreur et que les résultats de performance semblent acceptables, vous pouvez passer à d'autres types de tests.
