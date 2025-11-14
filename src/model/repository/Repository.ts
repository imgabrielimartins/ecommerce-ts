import { Principal } from "../Principal";

export interface Repository {

    procurarProduto(numero: number): Principal | null;
    listarProdutos(): Array<Principal>;
    atualizar(produtos: Principal): void;
    deletar(numero: number): boolean;

    cadastrar(prduto: Principal): void;
    atualizar(nome: string): void;
    comprar(nome: string, preco: number): void;
}