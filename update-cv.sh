#!/bin/bash

CV_DEST="public/CV_KONTE_Diarra_BUT_3_INFO.pdf"

# Si un fichier est passé en argument, on le copie directement
if [ -n "$1" ]; then
  if [ ! -f "$1" ]; then
    echo "Fichier introuvable : $1"
    exit 1
  fi
  cp "$1" "$CV_DEST"
  echo "CV remplacé par : $1"
fi

# Vérifie s'il y a des modifications
if git diff --quiet HEAD -- "$CV_DEST" && git ls-files --error-unmatch "$CV_DEST" &>/dev/null; then
  echo "Aucune modification détectée — rien à pusher."
  exit 0
fi

git add "$CV_DEST"
git commit -m "chore: Update CV"
git push origin main

echo ""
echo "CV mis à jour et déployé sur Vercel !"
