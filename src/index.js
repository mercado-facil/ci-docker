function main() {
    console.log("Iniciando ...");


    const result = soma(2, 2);
    console.log(`Resultado: ${result}`)
}
function soma(a, b) {
    return a + b;
}
module.exports = { soma };
main();
