// Definindo as massas dos objetos
const massaObjeto1 = 2; // em kg
const massaObjeto2 = 3; // em kg

// Definindo as velocidades iniciais dos objetos
const velocidadeObjeto1 = 4; // em m/s
const velocidadeObjeto2 = 2; // em m/s

// Calculando o momento inicial dos objetos
const momentoInicialObjeto1 = massaObjeto1 * velocidadeObjeto1;
const momentoInicialObjeto2 = massaObjeto2 * velocidadeObjeto2;

// Calculando o momento total inicial
const momentoTotalInicial = momentoInicialObjeto1 + momentoInicialObjeto2;

// Calculando a velocidade final do corpo combinado
const massaTotal = massaObjeto1 + massaObjeto2;
const velocidadeFinal = momentoTotalInicial / massaTotal;

console.log("Velocidade final após a colisão inelástica: " + velocidadeFinal + " m/s");