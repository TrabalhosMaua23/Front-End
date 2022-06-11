import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NoticiaModel } from '../noticia/noticia.model';

@Injectable({
  providedIn: 'root'
})
export class NoticiasApiService {

  constructor(private _http: HttpClient) { }

  // URL da API - BACK END
  noticiasApi = 'http://localhost:3000/api/noticias'
  //noticiasApi = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=dddc61197fee4bee81d583f1ab44e3f5'

  data_atual = new Date();

  getNoticias(): Observable<any> {
    return this._http.get(this.noticiasApi)
  }

  adicionarNoticia(titulo, autor, texto) {
    const noticia: NoticiaModel = {autor: autor,
      data: this.data_atual,
      texto: texto,
      titulo: titulo
    };
    this._http.post<{mensagem: string}>(this.noticiasApi,noticia).subscribe((dados) => console.log(dados))
    // console.log("teste 2")
  }

}
