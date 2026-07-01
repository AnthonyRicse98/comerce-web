@echo off
title Iniciando Servidor CMS...
cd /d "%~dp0"
echo ==========================================
echo    LEVANTANDO ENTORNO LOCAL DEL CMS
echo ==========================================
echo.
echo Por favor, no cierres esta ventana mientras uses el sistema.
echo.
call npm run dev
pause