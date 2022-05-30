import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { MatCardModule } from '@angular/material/card';
import { NoticiaService } from './noticia/noticia.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import { NoticiaListaComponent } from './noticia/noticia-lista/noticia-lista.component';


@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    NoticiaComponent,
    NoticiaListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    HttpClientModule,
  ],
  providers: [NoticiaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
