@echo off
cd /d "%~dp0"
echo Adicionando arquivos modificados...
git add .

set /p msg="Mensagem do commit: "
git commit -m "%msg%"

echo Enviando alterações para o GitHub...
git push

pause
