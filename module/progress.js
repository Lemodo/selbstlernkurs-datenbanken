// progress.js

function startModule(moduleNumber) {
  // Hier kannst du den Fortschritt für das gestartete Modul aktualisieren
  const progressBar = document.getElementById(`progress${moduleNumber}`);
  if (progressBar) {
    const currentWidth = parseInt(progressBar.style.width) || 0;
    const newWidth = Math.min(currentWidth + 10, 100); // Maximal 100%
    progressBar.style.width = `${newWidth}%`;
  }
}


 
// Simuliere den Fortschritt für jedes Modul
setModuleProgress(1, 50); // 50% Fortschritt für Modul 1
setModuleProgress(2, 33); // 33% Fortschritt für Modul 2
setModuleProgress(3, 10); // 10% Fortschritt für Modul 3
setModuleProgress(4, 10); // 10% Fortschritt für Modul 4
setModuleProgress(5, 10); // 10% Fortschritt für Modul 5
setModuleProgress(6, 10); // 10% Fortschritt für Modul 6
setModuleProgress(7, 10); // 10% Fortschritt für Modul 7
setModuleProgress(8, 10); // 10% Fortschritt für Modul 8

function setModuleProgress(moduleNumber, progress) {
  const progressBar = document.querySelector(`#progress${moduleNumber}`);
  progressBar.style.width = `${progress}%`;
}