import { Component } from '@angular/core';
import { Apartment } from '../core/model/appartement';
import { Residence } from '../core/model/residence';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-residance',
  templateUrl: './details-residance.component.html',
  styleUrls: ['./details-residance.component.css']
})
export class DetailsResidanceComponent {

  list:Apartment[]=[]
  
  listResidences:Residence[]=[
    
    {id:1,"name": "El fel","address":"Borj Cedria", "image":"../../assets/images/R1.jpeg"},
     {id:2,"name": "El yasmine", "address":"Ezzahra","image":"../../assets/images/R2.jpg"},
     {id:3,"name": "El Arij", "address":"Rades","image":"../../assets/images/R3.jpg"},
     {id:4,"name": "El Anber","address":"Manzah 5", "image":"../../assets/images/R4.jpg"}
   ];

  listApartments:Apartment[]=[
    {id:1,"appartNum":1,"floorNum":0,"surface":100,"terrace":"oui","surfaceTerrace":20,"category":"S+1","description":"Appartement S+1","residence":this.listResidences[0] },
    {id:2,"appartNum":2,"floorNum":0,"surface":130,"terrace":"non","surfaceTerrace":0,"category":"S+2","description":"Appartement S+2","residence":this.listResidences[0] },
    {id:3,"appartNum":3,"floorNum":0,"surface":150,"terrace":"oui","surfaceTerrace":30,"category":"S+3","description":"Appartement S+3","residence":this.listResidences[1] }
  ];

  getAppart(i:number){
    this.list=this.listApartments.filter((appart:Apartment)=>appart.residence.id==i);
    console.log(this.list);
   }

   id!:number
   constructor(private route:ActivatedRoute){}

   ngOnInit(){
    this.id=this.route.snapshot.params['id'];
    this.list=this.listApartments.filter((appart:Apartment)=>appart.residence.id==this.id);
    console.log(this.list);
   }

   
}
