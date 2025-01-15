// Questão 1) Qual será o valor da variável SOMA?
const question1 = () => {
    let INDICE = 13;
    let SOMA = 0;
    let K = 0;

    while (K < INDICE) {
        K += 1;
        SOMA += K;
    }

    console.log(`1) O valor da variável SOMA é: ${SOMA}`); 
    // No caso o resultado aqui é : 91
};
question1();

// Questão 2) Sequência de Fibonacci
const question2 = (num: number) => {
    const isInFibonacci = (n: number): boolean => {
        let a = 0, b = 1;
        while (b <= n) {
            if (b === n) return true;
            [a, b] = [b, a + b];
        }
        return n === 0;
    };

    const result = isInFibonacci(num)
        ? `O número ${num} pertence à sequência de Fibonacci.`
        : `O número ${num} não pertence à sequência de Fibonacci.`;
    console.log(`2) ${result}`);
};

question2(21); 
// Aqui executei o exemplo com o número 21

// Questão 3) Faturamento diário
const question3 = () => {
    const faturamento = [
        { dia: 1, valor: 22174.1664 },
        { dia: 2, valor: 24537.6698 },
        { dia: 3, valor: 26139.6134 },
        { dia: 4, valor: 0.0 },
        { dia: 5, valor: 0.0 },
        { dia: 6, valor: 26742.6612 },
        { dia: 7, valor: 0.0 },
        { dia: 8, valor: 42889.2258 },
        { dia: 9, valor: 46251.174 },
        { dia: 10, valor: 11191.4722 },
    ];

    const valores = faturamento.filter(dia => dia.valor > 0).map(dia => dia.valor);
    const menorValor = Math.min(...valores);
    const maiorValor = Math.max(...valores);
    const media = valores.reduce((acc, val) => acc + val, 0) / valores.length;
    const diasAcimaMedia = valores.filter(valor => valor > media).length;

    console.log(`3) Menor valor: ${menorValor.toFixed(2)}`);
    console.log(`   Maior valor: ${maiorValor.toFixed(2)}`);
    console.log(`   Dias acima da média: ${diasAcimaMedia}`);
};

question3();

// Questão 4) Percentual de faturamento mensal por estado
const question4 = () => {
    const faturamentoEstados = {
        SP: 67836.43,
        RJ: 36678.66,
        MG: 29229.88,
        ES: 27165.48,
        Outros: 19849.53
    };

    const total = Object.values(faturamentoEstados).reduce((acc, val) => acc + val, 0);
    const percentuais = Object.fromEntries(
        Object.entries(faturamentoEstados).map(([estado, valor]) => [estado, (valor / total) * 100])
    );

    console.log("4) Percentual de faturamento por estado:");
    for (const [estado, percentual] of Object.entries(percentuais)) {
        console.log(`   ${estado}: ${percentual.toFixed(2)}%`);
    }
};

question4();

// Questão 5) Inverter uma string
const question5 = (text: string) => {
    const inverterString = (s: string): string => {
        let invertida = "";
        for (let i = s.length - 1; i >= 0; i--) {
            invertida += s[i];
        }
        return invertida;
    };

    console.log(`5) String invertida: ${inverterString(text)}`);
};

question5("Front-End Developer");
// Aqui executei um exemplo com a string "Front-End Developer"

