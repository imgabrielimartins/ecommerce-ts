import { Repository } from "../repository/Repository";
import { Principal } from "../model/Principal";
import { Estendida } from "../model/Estendida";

export class Controller implements Repository {

    private lista: Principal[] = [];

    cadastrar(produto: Principal): void {
        this.lista.push(produto);
    }

    procurarProduto(codigo: number): Estendida | null {
        return this.lista.find(
            p => p instanceof Estendida && p.getCodigo() === codigo
        ) as Estendida || null;
    }
}
