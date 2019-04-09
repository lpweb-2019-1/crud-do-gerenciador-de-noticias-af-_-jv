import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  noticias = [];
  id = null;
  titulo = null;
  conteudo = null;
  data = null;
  publicada = false;
  categoria = null;
  tags = null;
  editoria = null;
  editarAtri = null;

  mostrar(noticia) {
    noticia.visivel = true;
  }

  fechar(noticia) {
    noticia.visivel = false;
    noticia.editarAtri = false;
  }

  editar(noticia){
    noticia.editarAtri = true;
  }

  salvar() {
    const noticia = {
      id: this.noticias.length,
      titulo: this.titulo,
      conteudo: this.conteudo,
      visivel: false,
      data: this.data,
      publicada: this.publicada,
      categoria: this.categoria, 
      tags: this.tags, 
      editoria: this.editoria,
      editarAtri: false,

    }
    this.titulo = null;
    this.conteudo = null;
    this.data = null;
    this.publicada = null;
    this.categoria = null;
    this.tags = null;
    this.editoria = null;
    this.editarAtri = null;
    this.noticias.push(noticia);

  }

  salvar_editado(){
    const noticia_editada = {
      id: this.id,
      titulo: this.titulo,
      conteudo: this.conteudo,
      visivel: false,
      editar: false,
      data: this.data,
      publicada: this.publicada,
      categoria: this.categoria, 
      tags: this.tags, 
      editoria: this.editoria,

    }
    this.titulo = null;
    this.conteudo = null;
    this.data = null;
    this.publicada = null;
    this.categoria = null;
    this.tags = null;
    this.editoria = null;
    this.editarAtri = null;
    this.noticias.splice(this.id,1,noticia_editada)
  }
  
  excluir(noticia) {
    var popup = confirm("Você tem certeza disso? Não vou perguntar duas vezes!");
    if (popup == true){
      for (let not of this.noticias){
        if (not == noticia){
          let posicao = this.noticias.indexOf(not);
          this.noticias.splice(posicao, 1);
        }
      }
    }
  }
  
  constructor() { 
  
  }
}