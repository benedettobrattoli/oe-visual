@echo off
title OE VISUAL - Portale Studio CGI
cd /d "C:\GIOTTO\O_E_visual"
echo ======================================================
echo    AVVIO OE VISUAL - STUDIO ARCHITECTURAL CGI
echo ======================================================
start http://localhost:8085
node server.js
pause
