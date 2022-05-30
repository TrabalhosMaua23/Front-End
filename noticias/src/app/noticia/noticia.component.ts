import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NoticiaService } from './noticia.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent {

  constructor(public noticiaService: NoticiaService) {}

  onAdicionarNoticia(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.noticiaService.adicionarNoticia(
      form.value.titulo,
      form.value.autor,
      form.value.texto
    );
    form.resetForm();
  }
}
