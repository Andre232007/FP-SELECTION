@echo off
cd /d "%~dp0"

echo ==========================
echo  Git Commit Automático
echo ==========================
echo.

:: Ver repositório remoto
git remote -v
echo.

:: Verifica se há mudanças
git status | findstr "Changes not staged for commit" > nul
if %errorlevel% neq 0 (
    git status | findstr "Untracked files" > nul
    if %errorlevel% neq 0 (
        echo.
        echo Nenhuma alteração detectada. Nada para comitar.
        pause
        exit /b
    )
)

:: Mensagem do commit
set /p msg="Digite a mensagem do commit: "

:: Add e commit primeiro
git add .
git commit -m "%msg%"

:: Agora é seguro puxar antes de push
echo.
echo Puxando alterações do GitHub com rebase...
git pull origin main --rebase

:: Push final
git push -u origin main

echo.
echo Commit e push concluídos com sucesso!
pause
