import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {

  listaCurso: string[] = ['TypeScript', 'JavaScript', 'Java SE', 'C#', 'PHP'];
  habilitar: boolean = true;
  titulo: string = 'Ocultar';

  constructor() { }

  setHabilitar(): void {
    if (this.habilitar === false) {
      this.habilitar = true;
      this.titulo = 'Ocultar';
    } else {
      this.habilitar = false;
      this.titulo = 'Mostrar';
    }
  }

  ngOnInit() {
  }

}
