function toggleSkill(card) {
    card.classList.toggle("active");

    let percent = card.getAttribute("data-percent") || 50;
    let progressBar = card.querySelector(".progress-bar");
    let percentageText = card.querySelector(".percentage");

    // Cálculo del `stroke-dashoffset` según el porcentaje
    let offset = 251.2 - (percent / 100) * 251.2;
    progressBar.style.strokeDashoffset = offset;

    // Mostrar el porcentaje en el centro
    percentageText.textContent = `${percent}%`;
}






