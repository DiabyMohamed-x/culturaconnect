#!/bin/bash
# Sauvegarde du site CulturaConnect
# Usage : ./backup.sh

DATE=$(date +%Y-%m-%d_%H%M)
SOURCE="../site"
DEST_DIR="../backups"
DEST_FILE="$DEST_DIR/backup_$DATE.tar.gz"

mkdir -p "$DEST_DIR"

tar -czf "$DEST_FILE" "$SOURCE"

if [ $? -eq 0 ]; then
    echo "Sauvegarde réussie : $DEST_FILE"
else
    echo "Échec de la sauvegarde"
    exit 1
fi
