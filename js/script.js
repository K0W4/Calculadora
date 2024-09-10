// Função paraa inserção de números e operadores na calculadora
function inserir(entrada)
{
    var operacao = document.getElementById('Resultado').innerHTML; // Pega o valor atual da tela (resultado)

    // Verifica se a operação atual é "Infinity" e substitui o valor se necessário
    if (operacao === "Infinity") {
        operacao = "0";
    }

    var ultimoCaractere = operacao.slice(-1); // Pega o último caractere inserido
    var operadores = ['+', '-', '*', '/', '.']; // Define os operadores e o ponto decimal

    // Verifica se o último caractere é um operador
    if (operadores.includes(ultimoCaractere))
    {
        // Se o novo caractere também for um operador, substitui o anterior
        if (operadores.includes(entrada))
        {
            operacao = operacao.slice(0, -1) + entrada; // Substitui o operador anterior pelo novo
        }
        // Caso contrário, adiciona o novo número normalmente
        else
        {
            operacao += entrada;
        }
    } 
    else
    {
        // Tratamento para quando o primeiro valor for um ponto
        if (operacao === "0" && entrada === ".")
        {
            operacao = "0.";
        } 
        // Se o primeiro valor for zero e o próximo for um número, substitui o zero
        else if (operacao === "0" && !operadores.includes(entrada))
        {
            operacao = entrada;
        } 
        // Se não se enquadra nas condições acima, simplesmente adiciona o valor à operação
        else
        {
            operacao += entrada;
        }
    }
    // Atualiza o display da calculadora com a operação atualizada
    document.getElementById('Resultado').innerHTML = operacao;
}

// Função para limpar o display da calculadora e voltar para "0"
function limpar()
{
    document.getElementById('Resultado').innerHTML = "0";
}

// Função para apagar o último caractere inserido
function apagar()
{
    var resultado = document.getElementById('Resultado').innerHTML;
    document.getElementById('Resultado').innerHTML = resultado.substring(0, resultado.length - 1); // Remove o último caractere
    if (resultado.length == 1)
    {
        document.getElementById('Resultado').innerHTML = "0"; // Se restar apenas 1 caractere, exibe "0"
    }
}

// Função para calcular porcentagem
function porcentagem()
{
    calcular(); // Primeiro realiza o cálculo para garantir que o número atual seja válido
    var resultado = document.getElementById('Resultado').innerHTML;
    resultado = resultado / 100; // Converte o resultado para porcentagem
    document.getElementById('Resultado').innerHTML = resultado; // Atualiza o display com o valor em porcentagem
}

// Função para inverter o sinal do número atual (positivo/negativo)
function inverter()
{
    calcular(); // Calcula qualquer operação pendente antes de inverter
    var resultado = document.getElementById('Resultado').innerHTML;
    resultado = resultado * -1; // Inverte o sinal do número
    document.getElementById('Resultado').innerHTML = resultado; // Atualiza o display
}

// Função para realizar o cálculo da operação atual
function calcular()
{
    var resultado = document.getElementById('Resultado').innerHTML;
    if (resultado)
    {
        resultado = eval(resultado); // Calcula a expressão
        // Limita a 13 casas decimais apenas se necessário
        if (resultado % 1 === 0)
        {
            resultado = resultado.toString(); // Caso seja um inteiro, converte para string sem casas decimais
        }
        else
        {
            resultado = parseFloat(resultado).toFixed(13); // Limita a 13 casas decimais
            resultado = parseFloat(resultado); // Remove os zeros desnecessários
        }
    }
    // Atualiza o display com o resultado formatado
    document.getElementById('Resultado').innerHTML = resultado; // Atualiza o display
}