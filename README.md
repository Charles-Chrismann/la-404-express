# La 404 - Cours Express

Ce répos est le résultat du cours du 01/02.
Il intègre la création, la connexion d'un utilisateur ainsi qu'un middleware pour la protection des routes nécessitant l'authentification.

Comme il ne s'agit que d'une introduction, il manque certaines vérification et préventions comme par exemple la prise en charge du cas ou l'on tenterait de crée un utilisateur déja existant.

De plus il est préférable d'avoir une structure de projet organisée. La branche `structure-de-fichiers` présente une organisation possible pour une application express plus large

## Installation

```bash
  npm i
  npx prisma migrate dev
```

Ensuite, créer un fichier .env, en duppliquant puis renommant le fichier .env.example. JWT_SECRET est une chaine de caractère random.

run project:

```bash
  npm run dev
```
