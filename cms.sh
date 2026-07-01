#!/bin/bash

# Obtener la ruta del directorio donde está guardado este script
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$DIR"

# Definir la URL exacta a la que quieres que vaya el cliente
# (Cambia el puerto o la ruta /admin según lo que use tu proyecto)
URL_CMS="http://localhost:5173/comerce-web/admin/index.html#/"

# Esperar 2 segundos en segundo plano antes de abrir el navegador 
# Esto asegura que a Vite le dé tiempo de levantar el puerto
(sleep 2 && xdg-open "$URL_CMS") &

# Ejecutar el servidor de desarrollo (aquí ya no necesitas el --open en el package.json)
npm run dev