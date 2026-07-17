#!/usr/bin/env python3
"""Outil de supervision — CulturaConnect (version simple)."""

import sys
import time
import shutil
import urllib.request

try:
    import psutil
except ImportError:
    psutil = None

URL = sys.argv[1] if len(sys.argv) > 1 else "http://localhost:8000"


def check_site(url):
    start = time.time()
    try:
        response = urllib.request.urlopen(url, timeout=5)
        temps_ms = round((time.time() - start) * 1000, 1)
        return True, response.status, temps_ms
    except Exception as e:
        return False, None, str(e)


def check_disk():
    total, used, free = shutil.disk_usage("/")
    return round(free / (1024 ** 3), 2), round((free / total) * 100, 1)


def check_memory():
    if psutil is None:
        return None
    mem = psutil.virtual_memory()
    return round(mem.available / (1024 ** 3), 2), mem.percent


# --- Site ---
disponible, code_ou_erreur, temps_ou_erreur = check_site(URL)
print(f"Site ({URL}) :", "OK" if disponible else "INDISPONIBLE")
if disponible:
    print(f"  Code HTTP : {code_ou_erreur}")
    print(f"  Temps de réponse : {temps_ou_erreur} ms")
else:
    print(f"  Erreur : {temps_ou_erreur}")

# --- Disque ---
libre_go, libre_pct = check_disk()
print(f"\nDisque libre : {libre_go} Go ({libre_pct}%)")
if libre_pct < 10:
    print("  ALERTE : moins de 10% d'espace libre")

# --- Mémoire ---
mem = check_memory()
if mem:
    libre_go, utilise_pct = mem
    print(f"\nMémoire libre : {libre_go} Go (utilisée à {utilise_pct}%)")
    if utilise_pct > 90:
        print("  ALERTE : mémoire presque saturée")
else:
    print("\nMémoire : psutil non installé (pip install psutil)")
