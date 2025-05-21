import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roleFilter'
})
export class RoleFilterPipe implements PipeTransform {
  transform(members: any[], role: string): any[] {
    return []
  }
}
