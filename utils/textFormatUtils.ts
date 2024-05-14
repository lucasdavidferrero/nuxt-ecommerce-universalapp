function textoPrimerLetraMayusculaRestoMinuscula (txt: string) {
    if (txt.length === 0 || txt.length === 1) return txt
    return txt[0] + txt.slice(1).toLowerCase()
}


export {
    textoPrimerLetraMayusculaRestoMinuscula
}
