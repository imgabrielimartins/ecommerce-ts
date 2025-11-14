import { Principal } from "./Principal";

export class Estendida extends Principal {

    private id: number;  
    private codigo: number;

    constructor(nome: string, preco: number, id: number, codigo: number) {
        super(nome, preco);
        this.id = id;
        this.codigo = codigo;
    }

    public getCodigo(): number {
        return this.codigo;
    }

    public override visualizarProdutos(): void {
        console.log(`Código: ${this.codigo}`);
        console.log(`ID: ${this.id}`);
        super.visualizarProdutos();
    }

    public comprar(valorPago: number, cupom?: string): void {

        let precoFinal = this.getPreco();

        if (cupom?.toUpperCase() === "DESCONTO10") {
            precoFinal = precoFinal * 0.9;
            console.log("\nCupom aplicado! 10% OFF");
        }

        console.log(`\nValor do produto: R$ ${precoFinal.toFixed(2)}`);
        console.log(`Valor pago: R$ ${valorPago.toFixed(2)}`);

        if (valorPago < precoFinal) {
            console.log("\n⚠ Valor insuficiente!");
            return;
        }

        const troco = valorPago - precoFinal;
        console.log(`Troco: R$ ${troco.toFixed(2)}`);
        console.log("\n✔ Compra realizada com sucesso!");
    }
}
