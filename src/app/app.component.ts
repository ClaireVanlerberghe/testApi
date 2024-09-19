import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  imageUrl: string = ''; 

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getImageLink();
  }

  getImageLink() {
    this.apiService.getData().subscribe(
      (data) => {
        console.log('Données reçues :', data);
        this.imageUrl = data.message; 
      },
      (error) => {
        console.error('Erreur lors de la récupération du lien :', error);
      }
    );
  }

  reload() {
    window.location.reload()
  }
}
