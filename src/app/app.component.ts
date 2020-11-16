import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string = 'Cristian Martinez';
  nombre2:string ='CrIsTiAn MaRtInEz';
  arreglo: number[] =[1,2,3,4,5,6,7,8,9];
  PI: number =Math.PI;
  porcentaje:number=0.234;
  salario:number=1234.5;
  fecha :Date=new Date();
  idioma:string='es';
  activar:boolean=true;
  videoUrl:string='https://www.youtube.com/embed/g8ljl8au9Ic';
  valorPromesa=new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve('llego la data')
    }, 4500);
  })
  persona={
    nombre:'cristian',
    clave:'msms',
    edad:22,
    direccion:{
      calle:'primera A',
      Casa:22
    }
  };
}
