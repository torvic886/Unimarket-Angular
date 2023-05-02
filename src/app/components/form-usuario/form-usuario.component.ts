import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Interfaces/Usuario';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {
  
  // usuario: Usuario = new Usuario();
  

  constructor() { }

  ngOnInit(): void {
  }

}
