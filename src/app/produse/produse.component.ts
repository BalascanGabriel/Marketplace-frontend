import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProduseService } from '../service/produse.service';
@Component({
  selector: 'app-produse',
  templateUrl: './produse.component.html',
  styleUrls: ['./produse.component.css']
})
export class ProduseComponent implements OnInit {

  produse: Product[] = [];

  constructor(private produseService : ProduseService){

  }

  ngOnInit(): void {
    console.log('componenta produse initializata')
    this.produseService.findAll()
      .then(datele => datele.json())
      .then(datele => {
        console.log('datele de la server: ', datele);
        
        this.produse = datele;
        
      })
  }


}
