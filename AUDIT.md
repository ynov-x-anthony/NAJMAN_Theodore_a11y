# AUDIT.md : à compléter

Pour chaque ligne, retrouve le problème correspondant dans `src/App.tsx` / `src/App.css`
et remplis les 3 colonnes. Il y a **6 problèmes volontaires** dans ce starter.

| # | Problème trouvé (où, quoi) | Principe WCAG (P / O / U / R) | Pourquoi c'est bloquant, et pour qui |
|---|------------------------------|-------------------------------|----------------------------------------|
| 1 | "<img src="/hero.jpg">" sans texte alternatif | Perceptible | Chaque image doit comporter un attribut « alt ». Sans texte alternatif, le contenu d'une image ne sera pas accessible aux utilisateurs de lecteurs d'écran ou lorsque l'image n'est pas disponible. |
| 2 | h1 suivi d'un h3 | Robuste | Les titres structurent le document et facilitent la navigation au clavier pour les utilisateurs de technologies d'assistance. Ces utilisateurs peuvent être désorientés ou rencontrer des difficultés de navigation lorsque des niveaux de titres sont ignorés. |
| 3 | Trois liens avec "cliquez ici" | Utilisable | Le texte d'un lien doit avoir un sens. Or, il y a 3 fois le même texte pour décrire les 3 liens (beaucoup d'utilisateurs de lecteurs d'écran naviguent par liste de liens) |
| 4 | Statut "annulé"/"publié" se repose uniquement sur un point vert ou rouge | Perceptible | L'information ne doit jamais se reposer uniquement sur la couleur (daltonisme) |
| 5 | Une div class pour "Voir plus..." au lieu d'un bouton | Opérable | Il est annoncé comme un texte par un lecteur d'écran et non comme un contrôle |
| 6 | Bandeau carousel qui ne s'affiche pas comme un vrai carousel (aucun moyen de le fermer ou de le mettre en pause) | Opérable | WCAG 2.2.2 : tout contenu qui apparaît doit pouvoir être maîtrisé par l'utilisateur |

> Rappel : P = Perceptible, O = Opérable, U = Utilisable (Compréhensible), R = Robuste.
