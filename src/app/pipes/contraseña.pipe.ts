import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContraseñaPipe implements PipeTransform {

  transform(value: string, valor:boolean=false): string {
    
    return (!valor)? '*'.repeat(value.length) : value;
  }

}
