import { Pipe, PipeTransform } from '@angular/core';
import { IngrsoEgreso } from './estadistica/ingreso-egreso.model';
import { IngreEgreService } from './ingre-egre.service';

@Pipe({
  name: 'ordencito'
})
export class OrdencitoPipe implements PipeTransform {

  transform(items: IngrsoEgreso[]  ): IngrsoEgreso[] {

    return items.sort( ( a,b )=>{
      if( a.tipo === 'ingreso'  ){
        return -1
      }else{
        return 1
      }
    } )


  }

}
