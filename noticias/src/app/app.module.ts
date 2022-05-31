import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { HttpClientModule } from '@angular/common/http';
import { NoticiasApiService } from './service/noticias-api.service';
import { NoticiaComponent } from './noticia/noticia.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoticiaInserirComponent } from './noticia/noticia-inserir/noticia-inserir.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    NoticiaComponent,
    NoticiaInserirComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatInputModule
  ],
  providers: [NoticiasApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
