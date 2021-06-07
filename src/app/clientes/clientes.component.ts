import { Component, OnInit } from '@angular/core';
import {Cliente} from './cliente';
import {ClienteService} from './cliente.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'

})
export class ClientesComponent implements OnInit {
  clientes: Cliente[];

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.clienteService.getClientes().subscribe(
      clientes => this.clientes = clientes
    );
  }

  delete(cliente: Cliente): void {
    Swal.fire({
      title: 'ELIMINAR!!',
       text: `¿Seguro que desea eliminar al cliente ${cliente.primerNombre} ${cliente.primerApellido}?`,
       icon: 'warning',
       showCancelButton: true,
       confirmButtonText: 'Si, delete it!',
       cancelButtonText: 'No, cancel!',
       reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.clienteService.delete(cliente.numeroIdentificacion).subscribe(
                response => {
                  this.clientes = this.clientes.filter(cli => cli !== cliente)
                  Swal.fire(
                    'Cliente Eliminado!',
                    `Cliente ${cliente.primerNombre} eliminado con éxito.`,
                    'success'
            )
          }
        )

      }
    })
  }

}
