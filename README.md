# La 404 - Cours Express

Cette branch présente une organisation possible pour une application express plus large.

Explications des changements dans la structure du projet.

- `src/`: séparer l'application des fichiers extérieurs.

- `src/controllers/`: contient les controllers de notre app, chaque controller est associé à une route.

> **NOTE:** on appelle un controller, la fonction qui exécute la logique coté serveur (écrire/lire une info en bdd). Le nom de ces fichiers finissent .controller.js pour décrire ce qu'ils contiennent

- `src/routes/`: contient les routes de notre projet, chaque requête va exécuter un controller dépendement de l'url concernée.

> **NOTE:** on utilise la methode express.Router() pour créer un Router, celui-ci représente un noeud dans le routing de notre application. Chaque router peux lui-même se voir ajouter un router avec la methode use().\
\
Par exemple, appRouter dans `src/index.js` est sur la route /api de l'app, c'est à dire à la racine, il est exporté depuis `src/routes/index.js` ou on lui ajoute les routes /auth, /users et /products.\
Dans l'application, pour atteindre ces endpoints, il faudra donc utiliser l'url /api/auth, /api/users, /api/products, etc...

- `src/middlewares/`: contient tout les middleware de notre app, les middlewares sont des fonctions qui s'exécutent avant les endpoints. Celle-ci ont accès à la requête ainsi qu'à réponse, tout comme les endpoints elle peuvent renvoyer une réponse, dès lors l'endpoint n'est pas atteint.

> **NOTE:** dans `src/middlewares/index.js` on fait ce que l'on appelle un barrel export. On importe tous les middleware dans un seul fichier puis on les exportes depuis ce fichier.\
De cette facon, si l'on souhaite importer plusieurs middlewares, on peux le faire en une seul ligne: `import { mid1, mid2 } from '../middlewares';` plutôt que `import mid1 from '../middlewares/mid1'; import mid2 from '../middlewares/mid2';`

De cette manière, on sépare le code réponsable du routing de celui responsable de l'exécution de la logique.