import { Principal } from "../model/Principal";

export interface Repository {
    procurarProduto(codigo: number): Principal | null;
    cadastrar(produto: Principal): void;
}
