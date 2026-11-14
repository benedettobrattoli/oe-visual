@echo off
setlocal
echo ========================================================
echo   OE VISUAL - ESPORTAZIONE PACCHETTO DI PRODUZIONE
echo ========================================================
echo.

set "ROOT_DIR=%~dp0"
set "DIST_DIR=%ROOT_DIR%dist_oe_visual"
set "ZIP_FILE=%ROOT_DIR%OE_VISUAL_PRODUZIONE.zip"

if exist "%DIST_DIR%" rmdir /s /q "%DIST_DIR%"
if exist "%ZIP_FILE%" del /f /q "%ZIP_FILE%"

mkdir "%DIST_DIR%"
mkdir "%DIST_DIR%\assets"

echo [1/4] Copia file web (HTML, CSS, JS, Favicon, SEO)...
copy /y "%ROOT_DIR%index.html" "%DIST_DIR%\" >nul
copy /y "%ROOT_DIR%style.css" "%DIST_DIR%\" >nul
copy /y "%ROOT_DIR%app.js" "%DIST_DIR%\" >nul
copy /y "%ROOT_DIR%favicon.png" "%DIST_DIR%\" >nul
copy /y "%ROOT_DIR%manifest.json" "%DIST_DIR%\" >nul
copy /y "%ROOT_DIR%robots.txt" "%DIST_DIR%\" >nul
copy /y "%ROOT_DIR%sitemap.xml" "%DIST_DIR%\" >nul
if exist "%ROOT_DIR%.htaccess" copy /y "%ROOT_DIR%.htaccess" "%DIST_DIR%\" >nul
if exist "%ROOT_DIR%vercel.json" copy /y "%ROOT_DIR%vercel.json" "%DIST_DIR%\" >nul

echo [2/4] Copia cartella assets (portfolio, video, team, loghi)...
xcopy "%ROOT_DIR%assets" "%DIST_DIR%\assets" /s /e /y /q >nul

echo [3/4] Compressione archivio ZIP per hosting / FTP...
powershell -NoProfile -ExecutionPolicy Bypass -Command "Compress-Archive -Path '%DIST_DIR%\*' -DestinationPath '%ZIP_FILE%' -Force"

echo [4/4] Verifica finale...
if exist "%ZIP_FILE%" (
    echo ========================================================
    echo   ESPORTAZIONE COMPLETATA CON SUCCESSO!
    echo ========================================================
    echo Cartella pronta: %DIST_DIR%
    echo Archivio ZIP:    %ZIP_FILE%
    echo ========================================================
) else (
    echo [ERRORE] Creazione archivio fallita.
)

endlocal
