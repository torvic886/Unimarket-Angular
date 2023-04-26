import { Categoria } from "./Categoria";
import { EstadoProducto } from "./EstadoProducto";
import { Usuario } from '../Interfaces/Usuario';


export interface Producto {
    id_producto: number;
    nombre: string;
    descripcion: string;
    precio: string;
    disponibilidad: string;
    fechaLimite: Date;
    id_usuario: Usuario;
    id_categoria: Categoria;
    id_estado_producto: EstadoProducto;
}