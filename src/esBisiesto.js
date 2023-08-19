function esBisiesto(anio){
    if(anio % 400 === 0) {
        return true;
    }
    if(anio % 100 === 0) {
        return false;
    }
    if(anio % 4 === 0) {
        return true;
    }
    return false;
}

export default esBisiesto;