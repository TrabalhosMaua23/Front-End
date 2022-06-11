import { Component, OnInit } from '@angular/core';
import { NoticiasApiService } from '../service/noticias-api.service';


@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {

  constructor(private api: NoticiasApiService) { }

  noticiasLista: any = [];

  ngOnInit(): void {
    this.api.getNoticias().subscribe((result) => {
      console.log(result);
      //console.log(result.articles);
            
      this.noticiasLista = result.noticias;
      
    })
  }
}
