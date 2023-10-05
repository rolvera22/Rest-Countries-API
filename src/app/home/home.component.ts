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
  filtroAfrica: string = '';
  filtroAmerica: string = '';
  filtroAsia: string = '';
  filtroEurope: string = '';
  filtroOceania: string = '';

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.llenarData ();
  }

  llenarData(){
  this.apiService.getData().subscribe(data => {
  this.data = data;
  console.log(this.data);

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

   filtrarPorRegion() {
    console.log("si esta?")
    // Implementa la lógica para filtrar según la opción seleccionada
    if (this.filtroAfrica) {
      this.apiService.getByRegion('Africa').subscribe(data => {
        this.data = data;
      });
    /*  } else if (this.filtroAmerica) {
      this.apiService.getByRegion('America').subscribe(data => {
        this.data = data;
      });
    } else if (this.filtroAsia) {
      this.apiService.getByRegion('Asia').subscribe(data => {
        this.data = data;
      });
    } else if (this.filtroEurope) {
      this.apiService.getByRegion('Europe').subscribe(data => {
        this.data = data;
      });
    } else if (this.filtroOceania) {
      this.apiService.getByRegion('Oceania').subscribe(data => {
        this.data = data;
      });*/
    } 
  }

  filtrarporZona(selectedValue: string) {
    if (selectedValue) {
      this.apiService.getByRegion(selectedValue).subscribe((data) => {
        this.data = data;
      });
    }
  }

  
}
