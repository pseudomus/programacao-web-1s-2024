
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