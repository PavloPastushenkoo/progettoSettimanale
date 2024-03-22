import { Component, OnInit } from '@angular/core';
import { CarModels } from 'src/app/models/car-models.interface';

@Component({
  selector: 'app-audi',
  templateUrl: './audi.component.html',
  styleUrls: ['./audi.component.scss']
})
export class AudiComponent implements OnInit {
  cars: CarModels[] = [];

  ngOnInit(): void {
    this.getMarks('Audi')
        .then((result) => {
            this.cars = result;
        })
        .catch((error) => {
            console.error('Errore nel recupero dei marchi:', error);
        });
  }

 async getMarks(brand: string): Promise<CarModels[]> {
  try {
    const response = await fetch('../../assets/db.json');
    const marksResponse = await response.json() as CarModels[];

    const filteredMarks = marksResponse.filter((mark) => mark.brand === brand);
    return filteredMarks;
  } catch (error) {
    throw new Error('Errore nel recupero dei dati: ' + error);
  }
}

}
