// Contador em TypeScript

const numero_1 = window.document.querySelector("#numero_1") as HTMLInputElement;
const numero_2 = window.document.querySelector("#numero_2") as HTMLInputElement;

const btn = window.document.querySelector("button");

function somar(a: number, b: number): number {
    return a + b; 
}

btn?.addEventListener("click", () => {
    window.document.write(`<h1>${somar(Number(numero_1.value), Number(numero_2.value))}</h1>`);
});