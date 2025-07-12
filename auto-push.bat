@echo off
cd /d "%~dp0"

echo Adicionando arquivos modificados...
git add .

set /p msg="Mensagem do commit (pressione Enter para usar 'Atualizacao automatica'): "
if "%msg%"=="" set msg=Atualizacao automatica

git commit -m "%msg%"

echo Enviando alterações para o GitHub...
git push

if %errorlevel% neq 0 (
    echo.
    echo ❌ Ocorreu um erro ao enviar para o GitHub.
) else (
    echo.
    echo ✅ Alterações enviadas com sucesso!
)

pause
