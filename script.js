function calcularSustentabilidade() {
    // Pegar os elementos do HTML
    const energiaSolar = document.getElementById('chk-energia').checked;
    const aguaChuva = document.getElementById('chk-agua').checked;
    const plantioDireto = document.getElementById('chk-plantio').checked;
    
    const porcentagemTexto = document.getElementById('porcentagem');
    const barra = document.getElementById('barra');
    const feedback = document.getElementById('mensagem-feedback');
    
    let total = 0;

    // Somar pontos baseado no que está marcado
    if (energiaSolar) total += 30;
    if (aguaChuva) total += 30;
    if (plantioDireto) total += 40;

    // Atualizar a barra de progresso e o texto
    porcentagemTexto.innerText = total + "%";
    barra.style.width = total + "%";

    // Mudar as mensagens e cores dependendo do resultado
    if (total === 0) {
        feedback.innerText = "Sua fazenda precisa de práticas sustentáveis!";
        feedback.style.color = "#cc0000";
        barra.style.backgroundColor = "#cc0000";
    } else if (total < 100) {
        feedback.innerText = "Bom caminho! Adicione mais práticas para o equilíbrio perfeito.";
        feedback.style.color = "#ff9800";
        barra.style.backgroundColor = "#ff9800";
    } else {
        feedback.innerText = "Excelente! Agro forte e 100% sustentável! 🌱🌍";
        feedback.style.color = "#2e5a36";
        barra.style.backgroundColor = "#2e5a36";
    }
}