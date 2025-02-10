# Test de charge

## Préambule

### **Qu’est-ce qu’un test de charge ?**

Les tests de charge sont un sous-ensemble des tests de performance utilisés pour les logiciels, les sites web, les applications et les systèmes connexes. Il s’agit d’un test non fonctionnel qui simule le comportement de plusieurs utilisateurs accédant simultanément au système. Également appelés « tests de volume », les tests de charge reproduisent les performances, la stabilité et la fonctionnalité du système web dans des conditions réelles. C’est pourquoi il s’agit de l’un des derniers types de tests, les plus cruciaux, mis en œuvre avant le déploiement.

Les tests de charge permettent d’identifier plusieurs aspects critiques du système web, dont les suivants :

- La capacité totale de fonctionnement de l’application, y compris le nombre d’utilisateurs simultanés pouvant être pris en charge.
- la capacité de l’application à répondre aux pics de charge des utilisateurs
- La stabilité de l’infrastructure de l’application
- Les temps de réponse, les débits et les besoins en ressources de l’application en fonction des différents niveaux de charge des utilisateurs.

### Rappel

- **Test de résistance et test de charge:**

  Les tests de charge ne sont pas conçus pour casser le système.
  
  Les tests de stress ont un objectif différent. Lors d’un test de résistance, le nombre d’utilisateurs augmente au-delà du point de dégradation des performances, jusqu’à l’échec total. Un test de stress ne se contente pas de mesurer le « point de rupture » du système, mais examine également le type de récupération automatique que le système pourra effectuer.

- **Tests fonctionnels et tests de charge**

  Les tests fonctionnels et les tests de charge sont des types de tests de performance, et bien que les deux soient nécessaires, ils ont chacun un objectif différent.
  
  Les tests fonctionnels déterminent si un aspect spécifique du système répond à des exigences prédéterminées. Il est utilisé beaucoup plus fréquemment que les tests de charge, avec des paramètres et des étapes clairement définis. Les tests de charge sont plus imprévisibles, et les résultats peuvent être très différents des attentes.
  
  En outre, les tests de charge dépendent entièrement de la charge de l’utilisateur, tandis que les tests fonctionnels sont basés sur des données de test.
  

### **Avantages des tests de charge**

- Prévention des temps d’arrêt et des défaillances d’applications
- Contrôler les normes de performance
- Réduction des coûts
- Augmente l’efficacité
- Conformité de l’accord de niveau de service - [SLA](https://www.indeed.com/career-advice/career-development/service-level-agreement) (Service Level Agreements)
- Planification des capacités

### **Qu’est-ce qu’on doit tester avec les tests de charge ?**

Les outils de test de charge automatisés génèrent des données permettant de répondre avec précision à plusieurs questions essentielles :

- Combien d’utilisateurs l’application (site web, système, etc.) compte-t-elle pendant les heures normales ? Pendant les heures de pointe ?
- Quels éléments de l’application sont affectés par quel nombre d’utilisateurs ?
- Quel nombre d’utilisateurs entraînera la mise hors ligne du site web ?
- Quand le système sera-t-il à court de ressources ?
- Quelle est la vitesse de chargement du site Web

En effectuant des simulations non fonctionnelles, l’organisation obtient des données sur la vitesse, la fiabilité et la capacité à évoluer

- **Performance de base:**
  
  tester les performances de base d’un service ou d’une gateway
  
- **Performance de l’indice de référence:**
  
  Les tests de référence mesurent les performances par rapport à des exigences internes.
  
### **Mesures et objectifs des tests de charge**

- **Temps de réponse:**

  Le temps de réponse est le principal paramètre mesuré par les tests de charge automatiques.
  
- **Débit:**
  
  Le débit est la quantité de données envoyées et reçues. Dans les tests de charge, il est généralement exprimé en nombre d’accès par seconde (hps) ou de transactions par seconde (tps).
  
- **Mesures spécifiques au matériel:**

  Des temps de réponse lents peuvent signaler des limitations matérielles. C’est pourquoi le processus de test de charge comprend la surveillance de l’utilisation du processeur, de la RAM disponible, des E/S du disque et d’autres fonctions matérielles similaires.
  
- **Base de données:**
  
  La plupart des applications d’entreprise nécessitent plusieurs systèmes pour fonctionner, mais plus le nombre de bases de données augmente, plus les risques de goulot d’étranglement augmentent. Le logiciel de test de charge mesure les lectures et les écritures de la base de données ainsi que le nombre de connexions ouvertes à la base de données. 

### Processus **de test de charge**

- **Détermination des objectifs:**

  Des objectifs clairs conduisent à des résultats plus utiles. Déterminez les fonctions applicatives les plus critiques à tester.
  
- **Établir une base de référence:**
  
  Si vous avez effectué des tests précédents, utilisez les données pour créer une base de référence des performances pour le test à venir. Toute déviation par rapport à la ligne de base indique une investigation plus approfondie.
  
- **Création de l’environnement de test de charge:**
  
  L’environnement de test doit refléter le plus fidèlement possible les conditions du monde réel. Vous devrez donc effectuer des tests sur des profils de machines, une architecture réseau, des pare-feu, des bases de données, etc. similaires.
  
- **Élaboration de scénarios de charge:**
  
  Chaque scénario comprendra des mesures, des transactions et des points de validation.
  
- **Exécution des tests:**
  
  Après avoir établi des lignes de base, des scénarios de chargement et créé un environnement de test, les tests sont prêts à être exécutés. Vous pouvez exécuter plusieurs scénarios simultanément, en ajustant les niveaux d’utilisateurs, les emplacements et d’autres facteurs.
  
- **Analyse post-test:**
  
  Les tests effectués permettent d’obtenir une quantité impressionnante de données, notamment les temps de réponse, les temps de chargement, les erreurs, les performances du serveur, etc. La plupart des analyses de données impliquent de refaire des scénarios pour circonscrire la question et identifier le problème central.
  La clé d’une interprétation réussie des données consiste à établir des objectifs clairs au préalable et à conserver une documentation exhaustive pendant l’analyse.
  
### **Comment rédiger un scénario de test de charge ?**

Le plan de test de charge doit comprendre les éléments suivants :

- **Objectifs et exigences:**
  
  Pourquoi faites-vous ce test ? Quels sont les paramètres spécifiques que vous testez, et les résultats qui détermineront le type de réponse concernant la production ?
  
- **Frontières:**
  
  Décrivez la portée de l’essai de charge du système ou du navigateur. Effectuez-vous un test de composant ou un test de bout en bout ? Quelles charges de trafic testez-vous (pic, normal, ou autre) ?
  La portée peut changer pendant le test, notamment si vous rencontrez un événement inattendu. Cependant, vous devez toujours définir des limites d’essai claires au départ.
  
- **Charge de travail:**
  - Transactions clés
  - Distribution de la charge par transaction
  - Moment de la transaction
  
  Le développement du profil de charge/modèle de charge de travail est sans doute l’élément le plus important des tests de charge car il détermine dans quelle mesure votre test reflète le comportement du système sous le poids des utilisateurs réels.
  
- **Santé du serveur**
  
  Décrivez votre plan de surveillance des serveurs pendant le test. Vous devrez surveiller les deux serveurs d’applications ainsi que les serveurs utilisés pour exécuter les tests de charge.
  
- **Scénario de test**
  
  Enfin, vous voudrez décrire votre scénario de test, qui est votre plan global pour mettre en œuvre une série de cas de test.
  
Exemple:

> Test de charge API pour déterminer si les paiements sont traités en moins de deux minutes par un système tiers.
