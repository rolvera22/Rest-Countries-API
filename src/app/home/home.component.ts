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
    console.log (this.data);

  })


  }



  }

  



}
