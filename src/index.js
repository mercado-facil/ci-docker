function soma(a, b) {
    return a + b;
}
function main() {
    console.log("Iniciando main");
    const result = soma(2, 2);
    console.log(`Resultado: ${result}`)
}

module.exports = { soma };
main();
