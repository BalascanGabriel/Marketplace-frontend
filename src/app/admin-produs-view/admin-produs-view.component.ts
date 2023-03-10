import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product';
import { ProduseService } from '../service/produse.service';

@Component({
  selector: 'app-admin-produs-view',
  templateUrl: './admin-produs-view.component.html',
  styleUrls: ['./admin-produs-view.component.css']
})
export class AdminProdusViewComponent implements OnInit {

  produs: Product = new Product();

  constructor(private produseService: ProduseService, private pentruRuta: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.pentruRuta.params.subscribe(x => {
      console.log('id produs de view: ', x);
      this.produseService.findById(x['idProdus'])
        .then(response => response.json())
        .then((produs: Product) => {
        this.produs = produs;
      });
    })

  }


}
