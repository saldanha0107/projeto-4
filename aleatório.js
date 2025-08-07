const nomes = ["Lucia", "Gabriella", "Georgia", "Marcelo", "Priscilla", "Pedro", "Nicolas"];

export function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);
