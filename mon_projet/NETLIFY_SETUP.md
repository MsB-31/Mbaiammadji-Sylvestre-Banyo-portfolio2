# Comment activer l'assistant sur Netlify

## Étape 1 — Déployer le projet sur Netlify
1. Va sur https://netlify.com et connecte-toi
2. Clique sur **"Add new site"** → **"Deploy manually"**
3. Glisse-dépose le dossier `mon_projet` (ou le zip)

## Étape 2 — Ajouter la clé API dans Netlify (OBLIGATOIRE)
La clé ne doit JAMAIS être dans le code — elle doit être dans les variables Netlify :

1. Dans ton site Netlify, va dans **Site configuration** → **Environment variables**
2. Clique **"Add a variable"**
3. Remplis :
   - **Key** : `GEMINI_API_KEY`
   - **Value** : `AIzaSyBIAkKSCkI3of3_Qbc-Q1dT93RtS1h_v2M`
4. Clique **Save**
5. **Redéploie** le site (important — les variables ne s'appliquent qu'au prochain déploiement)

## Étape 3 — Vérifier que ça marche
- Ouvre ton site déployé
- Clique sur le bouton chatbot en bas à droite
- Envoie un message test
- Tu dois recevoir une réponse de l'assistant

## En cas de problème
- Va dans **Functions** dans le dashboard Netlify
- Clique sur la fonction `chat`
- Regarde les logs pour voir l'erreur exacte
