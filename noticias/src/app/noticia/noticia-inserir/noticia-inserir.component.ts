import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NoticiasApiService } from 'src/app/service/noticias-api.service';

@Component({
  selector: 'app-noticia-inserir',
  templateUrl: './noticia-inserir.component.html',
  styleUrls: ['./noticia-inserir.component.css']
})
export class NoticiaInserirComponent {

  constructor(public noticiaService: NoticiasApiService) {}

  onAdicionarNoticia(form: NgForm) {
    if (form.invalid) {
      console.log("deu pau");
    }
    console.log("teste")

    this.noticiaService.adicionarNoticia(
      form.value.titulo,
      form.value.autor,
      form.value.texto
    );
    form.resetForm();
  }
}
