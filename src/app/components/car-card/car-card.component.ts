import { Component, Input, OnInit } from '@angular/core';
import { CarModels } from 'src/app/models/car-models.interface';
@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss']
})
export class CarCardComponent  {
@Input() mark!: CarModels;
mostraDetagli = false;

  togliDetagli(){
    this.mostraDetagli = !this.mostraDetagli;
  }
  disponibile(available : any) : boolean {
    return !! available;
  }
}
