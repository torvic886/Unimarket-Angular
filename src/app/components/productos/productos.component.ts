import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Interfaces/Producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  titulo:string="Lista de Productos";

  productos: Producto[] = [];

  constructor(private productoService:ProductoService) { }

  ngOnInit(): void {
    this.productoService.getAll().subscribe(
      p => this.productos = p
    )  
  }

}
