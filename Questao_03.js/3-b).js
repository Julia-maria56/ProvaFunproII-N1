function Livro(titulo, autor, ano) {
    this.titulo = titulo;
    this.autor = autor;
    this.ano = ano;
    this.informacoes = function(){
        console.log(" O livro " + this.titulo+ ", foi escrito por "+this.autor+ " e publicado em "+this.ano)
    }
  }
  const Livro1 = new Livro ("After", "Anna Todd", 2009)
  Livro1.informacoes()
  const Livro2 = new Livro ("Harry Styles", "Anna Todd", 2009)
  Livro2.informacoes()
  const Livro3 = new Livro ("Mil Beijos de Garoto", "Jane Austen", 2009)
  Livro3.informacoes()
  