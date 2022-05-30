import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { NoticiaModel } from "../noticia.model";
import { NoticiaService } from "../noticia.service";

@Component({
    selector: 'app-noticia-lista',
    templateUrl: './noticia-lista.component.html',
    styleUrls: ['./noticia-lista.component.css']
})
export class NoticiaListaComponent implements OnInit, OnDestroy {
    noticias: NoticiaModel[] = [];
    private noticiasSubscription: Subscription;

    constructor(public noticiaService: NoticiaService) {}

    
    ngOnInit(): void {
        this.noticiaService.getClientes();
        this.noticiasSubscription = this.noticiaService
            .getListaNoticiasAtualizadaObservable()
            .subscribe((noticias: NoticiaModel[]) => {
                this.noticias = noticias;
            });
    }


    ngOnDestroy(): void {
        this.noticiasSubscription.unsubscribe();
    }

}
