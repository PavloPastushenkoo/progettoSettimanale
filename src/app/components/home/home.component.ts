import { Component, OnInit } from '@angular/core';
import { CarModels } from 'src/app/models/car-models.interface';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
    marks: CarModels[] = [];
    ngOnInit(): void {
      this.getMarks()
          .then((result) => {
              const uniqueRandomIndices = new Set<number>();
              while (uniqueRandomIndices.size < 2) {
                  uniqueRandomIndices.add(Math.floor(Math.random() * result.length));
              }
              uniqueRandomIndices.forEach(index => this.marks.push(result[index]));
          })
          .catch((error) => {
              console.error('Errore nel recupero dei marchi:', error);
          });
  }
  
  async getMarks(): Promise<CarModels[]> {
      try {
          const response = await fetch('../../assets/db.json');
          const marksResponse = (await response.json()) as CarModels[];
          return marksResponse;
      } catch (error) {
          throw new Error('Errore nel recupero dei dati: ' + error);
      }
  }
}  