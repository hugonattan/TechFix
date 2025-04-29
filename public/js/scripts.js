document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("register-form");
    const cpfInput = document.getElementById("cpf");
    const telInput = document.getElementById("tel");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");

    // Máscara de CPF
    cpfInput.addEventListener("input", function () {
        let value = cpfInput.value.replace(/\D/g, "");
        if (value.length > 11) value = value.slice(0, 11);
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        cpfInput.value = value;
    });

    // Máscara de telefone
    telInput.addEventListener("input", function () {
        let value = telInput.value.replace(/\D/g, "");
        if (value.length > 11) value = value.slice(0, 11);
        value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
        value = value.replace(/(\d{5})(\d{1,4})$/, "$1-$2");
        telInput.value = value;
    });

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const cpf = cpfInput.value.trim();
        const tel = telInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        const telRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!cpfRegex.test(cpf)) {
            alert("CPF inválido! Use o formato xxx.xxx.xxx-xx");
            return;
        }

        if (!telRegex.test(tel)) {
            alert("Telefone inválido! Use o formato (xx) xxxxx-xxxx");
            return;
        }

        if (!emailRegex.test(email)) {
            alert("E-mail inválido!");
            return;
        }

        if (password !== confirmPassword) {
            alert("As senhas não coincidem!");
            return;
        }

        alert("Cadastro válido! Enviando dados...");
        // Aqui você pode enviar os dados para o backend
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const telInput = document.getElementById("tel");

    if (telInput) {
        telInput.addEventListener("input", function () {
            let value = telInput.value.replace(/\D/g, "");
            if (value.length > 11) value = value.slice(0, 11);
            value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
            value = value.replace(/(\d{5})(\d{1,4})$/, "$1-$2");
            telInput.value = value;
        });
    }
});


function enviarWhatsApp(event) {
    event.preventDefault(); // Impede o envio tradicional do formulário

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('tel').value;
    const servico = document.getElementById('select').value;
    const mensagem = document.getElementById('mensagem').value;

    // Mapeia os valores do select para nomes legíveis
    const servicos = {
        two: 'Montagem Personalizada',
        three: 'Instalação de Peças',
        for: 'Diagnóstico Técnico',
        five: 'Manutenção Preventiva'
    };

    if (!servicos[servico]) {
        alert("Por favor, selecione um serviço válido.");
        return;
    }

    const servicoFormatado = servicos[servico];

    const mensagemFinal =
`*Fale Conosco*\n
*Nome:* ${nome}
*E-mail:* ${email}
*Telefone:* ${telefone}
*Serviço Desejado:* ${servicoFormatado}\n
*Mensagem:* ${mensagem}`;

    const numeroWhatsApp = '5579981264159'; // Substitua pelo seu número real

    const link = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagemFinal)}`;
    window.open(link, '_blank');
}


