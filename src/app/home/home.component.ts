import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

data: any [] = [];
filtroNombre: string = '';
continentes: string[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
isDarkMode: boolean = false;


  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.llenarData ();
  }

  llenarData(){
  this.apiService.getData().subscribe(data => {
  this.data = data;
 
  })
  }

  filtrarporNombre() {

  if (this.filtroNombre.trim() !== '') {

  this.apiService.getByName(this.filtroNombre).subscribe (data => {
    this.data = data;
  })
  
  }
  
  else{
  this.llenarData();
  }

  }

  filtrarPorRegion(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    if (selectedValue) {
      this.apiService.getByRegion(selectedValue).subscribe((data) => {
        this.data = data;
      });
    }
  }
  

  /*  toggleDarkMode(event: Event): void {
    const body = document.querySelector('body');
    if (body) {
      body.classList.toggle('dark-mode-body');
    }
  }*/

  toggleDarkMode(event: Event): void {
    this.isDarkMode = (event.target as HTMLInputElement).checked;
  }
    
}
