import { Subject } from "rxjs";
import { NoticiaModel } from "./noticia.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class NoticiaService {
    private noticias: NoticiaModel[] = [];
    private listaNoticiasAtualizada = new Subject<NoticiaModel[]>();

    constructor(private httpClient: HttpClient) {}

    data_atual = new Date();

    getClientes() {
        this.httpClient.get<{mensagem: string, 
            noticias: NoticiaModel[]}>('localhost:3000/api/noticias').subscribe(
                (dados) => {
                    this.noticias = dados.noticias;
                    this.listaNoticiasAtualizada.next([...this.noticias]);
                }
            )
    }

    adicionarNoticia(tituloInput, autorInput, textoInput) {
        const noticia: NoticiaModel = {
            titulo: tituloInput.value,
            autor: autorInput.value,
            texto: textoInput.value,
            data: this.data_atual.toLocaleString()
        }

        this.httpClient.post<{mensagem: string}>(
            'localhost:3000/api/noticias',
            noticia
        ).subscribe(
            (dados) => {
                console.log(dados.mensagem);
                this.noticias.push(noticia);
                this.listaNoticiasAtualizada.next([...this.noticias]);
            }
        )
    }

    getListaNoticiasAtualizadaObservable() {
        return this.listaNoticiasAtualizada.asObservable();
    }
}
