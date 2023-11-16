document.addEventListener('DOMContentLoaded', function () {
    // Dados simulados - substitua isso por um banco de dados real
    const funcionarios = [
        { nome: 'Marcos', cargo: 'gerente', salario: 6000 },
        { nome: 'Carol', cargo: 'analista', salario: 4800 },
        // Adicione mais funcionários conforme necessário
    ];

    const tabelaFuncionarios = document.getElementById('funcionarios');
    const formulario = document.getElementById('formulario');

    // Função para renderizar os funcionários na tabela
    function renderizarFuncionarios() {
        const tbody = tabelaFuncionarios.querySelector('tbody');
        tbody.innerHTML = '';

        funcionarios.forEach((funcionario, index) => {
            const row = tbody.insertRow();
            const cellNome = row.insertCell(0);
            const cellCargo = row.insertCell(1);
            const cellSalario = row.insertCell(2);
            const cellAcoes = row.insertCell(3);

            cellNome.textContent = funcionario.nome;
            cellCargo.textContent = funcionario.cargo;
            cellSalario.textContent = funcionario.salario;

            const btnDemitir = document.createElement('button');
            btnDemitir.textContent = 'Demitir';
            btnDemitir.addEventListener('click', () => demitirFuncionario(index));

            cellAcoes.appendChild(btnDemitir);
        });
    }

    // Função para adicionar um novo funcionário
    window.adicionarFuncionario = function () {
        const nome = document.getElementById('nome').value;
        const cargo = document.getElementById('cargo').value;
        const salario = document.getElementById('salario').value;

        // Verifica se o nome do funcionário já existe na lista
        const nomeExistente = funcionarios.some(funcionario => funcionario.nome === nome);

        if (nomeExistente) {
            alert('Funcionário com esse nome já existe na lista!');
            return;
        }

        if (nome && cargo && salario) {
            const novoFuncionario = { nome, cargo, salario: parseFloat(salario) };
            funcionarios.push(novoFuncionario);
            renderizarFuncionarios();
            formulario.reset(); // Limpa o formulário após adicionar o funcionário
        } else {
            alert('Preencha todos os campos!');
        }
    };

    // Função para demitir um funcionário
    function demitirFuncionario(index) {
        funcionarios.splice(index, 1);
        renderizarFuncionarios();
    }

    // Inicializa a tabela
    renderizarFuncionarios();
});
