import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProduseService } from '../service/produse.service';

@Component({
  selector: 'app-admin-produse',
  templateUrl: './admin-produse.component.html',
  styleUrls: ['./admin-produse.component.css']
})
export class AdminProduseComponent implements OnInit{
  

  // produseService : ProduseService = new ProduseService();

  produse: Product[] = [];
  produsNou: Product = new Product();

  constructor(private produseService : ProduseService){

  }

  ngOnInit(): void {
    // fetch('http://localhost:9060/rest/product/all')
    this.produseService.findAll()
    .then(datele => datele.json())
    .then(datele => {

      console.log('datele de la server: ', datele);
      this.produse = datele;
      
    })

    // let p = new Product();
    // p.name = 'shaorma';
    // p.price = 300;
    // this.produseService.save(p)
    //   .then(raspuns => raspuns.json())
    //   .then(raspuns => {
    //     this.produse.push(raspuns);
    //   });
  }

  btnSaveClick(){
    console.log('saving new product: ', this.produsNou);
      this.produseService.save(this.produsNou)
      .then(raspuns => raspuns.json())
      .then(raspuns => {
        this.produse.push(raspuns);
        this.produsNou = new Product();
      });
  }

  deleteProduct(productToBeDeleted: Product){
    this.produseService.remove(productToBeDeleted.id)
      .then(raspuns => raspuns.json())
      .then(raspuns => {
        // console.log('am sters un produs!', raspuns);
        // let pozitie = this.produse.indexOf(productToBeDeleted);
        // this.produse.splice(pozitie, 1);
        this.produse = this.produse.filter(x => x.id != raspuns.id);
      })
  }

}
