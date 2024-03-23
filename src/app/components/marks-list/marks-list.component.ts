import { Component, OnInit } from '@angular/core';
import { CarModels } from 'src/app/models/car-models.interface';

@Component({
    selector: 'app-marks-list',
    templateUrl: './marks-list.component.html',
    styleUrls: ['./marks-list.component.scss'],
})
export class MarksListComponent implements OnInit {
    marks: CarModels[] = [];

    ngOnInit(): void {
        this.getMarks().then((result) => {
            this.marks = result;
        }).catch((error) => {
            console.error('Errore nel recupero dei marchi:', error);
        });
    }

    async getMarks(): Promise<CarModels[]> {
        try {
            const response = await fetch('../../assets/db.json');
            const marksResponse = await response.json() as CarModels[];

            // Creare un oggetto mappa per tenere traccia dei marchi già aggiunti per ogni tipo
            const uniqueMarksMap: { [key: string]: CarModels } = {};

            // Filtrare solo un marchio per ogni tipo
            marksResponse.forEach(mark => {
                if (mark.available && !uniqueMarksMap[mark.brandLogo]) {
                    uniqueMarksMap[mark.brandLogo] = mark;
                }
            });

            // Convertire l'oggetto mappa in un array
            const uniqueMarks = Object.values(uniqueMarksMap);

            return uniqueMarks;
        } catch (error) {
            throw new Error('Errore nel recupero dei dati: ' + error);
        }
    }
}