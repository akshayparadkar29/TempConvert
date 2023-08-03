import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celsiusFahrenheit'
})
export class CelsiusFahrenheitPipe implements PipeTransform {

  fahrenheit:number=0;

  transform(value:number): any{
    this.fahrenheit=(value*(9/5))+32; //converting celsius to fahrenheit
    return this.fahrenheit;
  }

}
