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
  produsePaginare: Product[] = [];
  nrPagina = 0;
  elementePagina = 6;
  primaPagina: boolean = true;
  ultimaPagina: boolean = false;
  totalPages: number = 0;

  orderByOptions = [
    { value: 'name', viewValue: 'Name' },
    { value: 'date', viewValue: 'Date' },
    { value: 'size', viewValue: 'Price' }
  ];

  sortByOptions = [
    { value: 'asc', viewValue: 'Ascending' },
    { value: 'desc', viewValue: 'Descending' }
  ];

  prodToDisplay = [
    {value : '3', viewValue: '3'},
    {value : '6', viewValue: '6'},
    {value : '9', viewValue: '9'}
  ];

  orderBy: string = 'name'; // default value
  sortBy: string = 'asc'; // default value
  productsDisp: string='6';


  constructor(private produseService: ProduseService) {

  }

  ngOnInit(): void {
    console.log('componenta produse initializata')
    this.produseService.findAll()
      .then(datele => datele.json())
      .then(datele => {
        console.log('datele de la server: ', datele);

        this.produse = datele;

      })

    this.incarcaPagina(this.nrPagina, this.elementePagina);

  }

  addToCart(p : Product){
    console.log('adding to cart: ', p);
    this.produseService.addProductToCart(p)
      .then(ras => ras.json())
      .then(ras => {
        console.log('added product to cart: ', ras);
      })
  }

  incarcaPagina(nrPagina: number, elemente: number) {
    this.produseService.findAllPaginare(nrPagina, elemente)
      .then(datele => datele.json())
      .then(datele => {
        console.log('datele de la server: ', datele);

        this.produsePaginare = datele.content;
        this.primaPagina = datele.first;
        this.ultimaPagina = datele.last;
        this.totalPages = datele.totalPages;
      })
  }

  navigarePrev() {
    this.nrPagina--;
    this.incarcaPagina(this.nrPagina, this.elementePagina);
  }
  navigareNext() {
    this.nrPagina++;
    this.incarcaPagina(this.nrPagina, this.elementePagina);
  }

  navigare(nrPaginaNoua: number) {
    this.nrPagina = nrPaginaNoua;
    this.incarcaPagina(this.nrPagina, this.elementePagina);
  }
}
