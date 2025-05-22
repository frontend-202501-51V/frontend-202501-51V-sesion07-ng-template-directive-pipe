import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roleFilter'
})
export class RoleFilterPipe implements PipeTransform {
  transform(members: any[], role: string): any[] {
    // nos piden filtrar por rol
    // entonces dado un rol debemos filtrarlo de la lista
    // ejm: [{name: 'pepe', role: 'admin'}, {name: 'raul', role: 'user'}]
    // se pide es que si el role sea admin entonces se filtre el arreglo
    // [ { name: 'pepe', role: 'admin' }]
    return members.filter(member => member.role === role)
  }
}
