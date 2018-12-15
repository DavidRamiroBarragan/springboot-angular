import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClientesService } from '../clientes.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
   cliente: Cliente = new Cliente();
   titulo: String = 'Crear cliente';

  constructor(
    private clienteService: ClientesService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.cargarCliente();
  }
  public create(): void {
    this.clienteService.create(this.cliente).subscribe(cliente => {
      this.router.navigate(['/clientes']);
      swal(
        'Nuevo cliente',
        `Cliente ${cliente.nombre} ${cliente.apellido} creado con exito`,
        'success'
      );
    });
  }

  public cargarCliente(): void {
    this.activateRoute.params.subscribe(params => {
      const id = params['id'];

      if (id) {
        this.clienteService.getCliente(id).subscribe(cliente => this.cliente = cliente);
      }
    });
  }
}
