import { Component, OnInit } from '@angular/core';
import { ClientesService } from './clientes.service';
import { Cliente } from './cliente';
import swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clientesService: ClientesService) {}

  ngOnInit() {
    this.clientesService
      .getClientes()
      .subscribe(clientes => (this.clientes = clientes));
  }

  delete(cliente: Cliente): void {
    swal({
      title: '¿Estás seguro?',
      text: 'No podrás deshacer está operación!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, elimar!',
      cancelButtonText: 'No, cancelar!'
    }).then(result => {
      if (result.value) {
        this.clientesService.delete(cliente.id).subscribe(
          response => {
            this.clientes = this.clientes.filter(cli => cli !== cliente);
            swal('Eliminado!', 'El cliente ha sido eliminado.', 'success');
          }
        );
      }
    });
  }
}
