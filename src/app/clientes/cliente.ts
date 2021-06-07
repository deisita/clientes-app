import { Plan } from './plan';
import { TipoIdentificacion } from './tipoIdentificacion';
export class Cliente {
  tipoIdentificacion: TipoIdentificacion;
  numeroIdentificacion: number;
  primerNombre: string;
  segundoNombre: string;
  primerApellido: string;
  segundoApellido: string;
  direccion: string;
  numeroCelular: number;
  email: string;
  fechaNacimiento: string;
  plan: Plan;
}
