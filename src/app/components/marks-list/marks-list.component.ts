import { Component, OnInit } from '@angular/core';
import { CarModels } from 'src/app/models/car-models.interface';

@Component({
    selector: 'app-marks-list',
    templateUrl: './marks-list.component.html',
    styleUrls: ['./marks-list.component.scss'],
})
export class MarksListComponent implements OnInit {
    marks: CarModels[] = [];
https: any;

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
            return marksResponse.filter((mark) => mark.available);
        } catch (error) {
            throw new Error('Errore nel recupero dei dati: ' + error);
        }
    }
}