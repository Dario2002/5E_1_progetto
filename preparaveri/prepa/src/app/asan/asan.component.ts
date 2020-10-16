import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';//importare
import { HttpClient } from '@angular/common/http'; //importare
import { Asan } from './asan.model';

@Component({
  selector: 'app-asan',
  templateUrl: './asan.component.html',
  styleUrls: ['./asan.component.css']
})
export class AsanComponent implements OnInit {
  //aggiungo i tre oggetti
  asanData: Asan[];
  oAsan: Observable<Asan[]>;
  data: Object; //1
  loading: boolean;//2
  o: Observable<Object>;//3

  constructor(public http: HttpClient) { } //aggiungo nel costruttore la variabile per fare la richiesta http

  //aggiungoquesti due metodi (makeRequest e getData)

  makeRequest(): void {
    console.log("here");
    this.loading = true;
    this.o = this.http.get('https://3000-f091d9ce-e2ef-4ca0-9083-323a052706c2.ws-eu01.gitpod.io/api/products');
    this.o.subscribe(this.getData);
  }


  getData = (d: Object) => {
    this.data = d;
    this.loading = false;
  }



  makeTypedRequest(): void {
    //oFoo : Observable<Foo[]>; va dichiarato tra gli attributi della classe
    this.oAsan = this.http.get<Asan[]>('https://3000-f091d9ce-e2ef-4ca0-9083-323a052706c2.ws-eu01.gitpod.io/api/products');
    this.oAsan.subscribe(data => {
      this.asanData = data["products"];
      console.log(this.asanData);
    });
  }

  ngOnInit(): void {
  }

}
