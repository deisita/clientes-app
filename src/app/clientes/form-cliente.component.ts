import { Component, OnInit } from '@angular/core';
import { Cliente} from './cliente';
import { Plan } from './plan';
import { TipoIdentificacion } from './tipoIdentificacion';
import {ClienteService} from './cliente.service';
import {Router, ActivatedRoute} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html'
})
export class FormClienteComponent implements OnInit {

  public cliente: Cliente = new Cliente();
  planes: Plan[];
  tiposIdentificacion: TipoIdentificacion[];
  titulo:string ='Agregar Cliente'


  constructor(public clienteService: ClienteService,
    private router:Router,
    private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.cargarCliente()
        this.clienteService.getPlanes().subscribe(planes => this.planes = planes);
        this.clienteService.getTiposIdentificacion().subscribe(tiposIdentificacion => this.tiposIdentificacion = tiposIdentificacion);
      }

        public create(): void{
          this.clienteService.create(this.cliente).subscribe(
            cliente => {
              this.router.navigate(['/clientes'])
              Swal.fire('Clientes','Cliente creado con éxito!','success')
            },
            Error =>{Swal.fire('Clientes','Cliente ya existe!!!!!','warning')}

          )
        }

        cargarCliente():void{
          this.activatedRoute.params.subscribe(params =>{
            let id = params['id']
            if(id){
              this.clienteService.getCliente(id).subscribe((cliente)=>this.cliente=cliente)
            }
          })
        }


        public update(): void{
          this.clienteService.update(this.cliente).subscribe(
            cliente => {
              this.router.navigate(['/clientes'])
              Swal.fire('Clientes','Cliente actualizado con éxito!','success')
            },
            Error =>{this.create()}
          )
        }



      }
