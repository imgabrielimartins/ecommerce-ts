export abstract class Principal{
    visualizarProdutos1() {
        throw new Error("Method not implemented.");
    }

    private _nome: string;
    private _preco: number;
    private _tipo: number;


   constructor(nome: string, preco: number, tipo: number){
    this._nome = nome;
    this._preco = preco;
    this._tipo = tipo
   }

   public get nome(){
    return this._nome;
   }

   public set nome(nome: string){
    this._nome = nome;
   }

   public get preco(){
    return this._preco;
   }

   public set preco(preco: number){
    this._preco = preco;
   }

   public get tipo(){
    return this._tipo;
   }

   public set tipo(tipo: number){
    this._tipo = tipo;
   }

   public comprar(valorRecebido: number): boolean {

    let precoFinal = this._preco

    if(precoFinal > valorRecebido){
        console.log(`\nValor Insuficiente! Faltam R$ ${(this._preco - valorRecebido).toFixed(2)}`);
        return false;
    }

    let troco = valorRecebido - precoFinal;
    console.log("\nCompra Realizada com sucesso!");
    console.log(`Troco: ${troco.toFixed(2)}`);

    return true;

   }

   public abstract visualizarProdutos(): void;

}