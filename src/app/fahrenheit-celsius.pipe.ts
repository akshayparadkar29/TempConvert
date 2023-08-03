import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fahrenheitCelsius'
})
export class FahrenheitCelsiusPipe implements PipeTransform {

  celsius:number=0;

  transform(value:number): any {
    this.celsius=(value-32)/1.8;
    return this.celsius;
  }

}
