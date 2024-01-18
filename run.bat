start /d "%~dp0\Starter" dotnet run args
echo running Starter
start /d "%~dp0\ReactCoreUI" yarn start:dev
echo running ReactCoreUI