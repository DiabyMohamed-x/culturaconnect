#!/bin/bash
# Restauration du site CulturaConnect depuis une sauvegarde
# Usage : ./restore.sh backups/backup_2026-07-14_1530.tar.gz

BACKUP_FILE="$1"
DEST="../"

if [ -z "$BACKUP_FILE" ]; then
    echo "Usage : ./restore.sh <chemin_vers_backup.tar.gz>"
    exit 1
fi

if [ ! -f "$BACKUP_FILE" ]; then
    echo "Erreur : fichier introuvable ($BACKUP_FILE)"
    exit 1
fi

tar -xzf "$BACKUP_FILE" -C "$DEST"

if [ $? -eq 0 ]; then
    echo "Restauration réussie depuis : $BACKUP_FILE"
else
    echo "Échec de la restauration"
    exit 1
fi
