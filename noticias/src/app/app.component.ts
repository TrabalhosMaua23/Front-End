import { Component } from '@angular/core';
import { NoticiaModel } from './noticia/noticia.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  noticias: NoticiaModel[] = [];
  onNoticiaAdicionada(noticia) {
    this.noticias = [...this.noticias, noticia]
  }
}
// export class AppComponent {
//   // title = 'noticias';

//   noticia: NoticiaModel
//   data_atual = new Date()

//   adicionarNoticia(tituloInput, autorInput, textoInput) {
//     this.noticia = {
//       titulo: tituloInput.value,
//       autor: autorInput.value,
//       texto: textoInput.value,
//       data: this.data_atual.toLocaleString()
//     }
//     console.log(this.noticia)
//     // post no backend

//   }
// }
