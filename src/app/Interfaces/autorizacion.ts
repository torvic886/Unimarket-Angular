import { EstadoAutorizacion } from "../Enums/EstadoAutorizacion.enum";

export interface Autorizacion {
    idAutorizacion: number;
    estado: EstadoAutorizacion;
    fechaAutorizacion: Date;
}