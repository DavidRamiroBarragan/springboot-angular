import { Component, OnInit } from '@angular/core';
import { ClientesService } from './clientes.service';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
    this.clientesService.getClientes().subscribe(clientes => (this.clientes = clientes));
  }

}
