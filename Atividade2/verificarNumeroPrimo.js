function verificarNumeroPrimo(num) {
    if (num == 0 || num == 1){
        return false
    }
    if (num == 2) {
        return true
    }
    for (var divisor = 2; divisor < num; divisor++){
        if (num % divisor == 0){
            return false;
        }
    }
    return true;
}

verificarNumeroPrimo(0); //false
verificarNumeroPrimo(1); //false
verificarNumeroPrimo(2); //true
verificarNumeroPrimo(3); //true
verificarNumeroPrimo(7); //true
verificarNumeroPrimo(83); //true
verificarNumeroPrimo(100); //false
verificarNumeroPrimo(991); //true
verificarNumeroPrimo(104729); //true
verificarNumeroPrimo(14348907); //falseß