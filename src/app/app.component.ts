import { element } from 'protractor';
import { BackendApiService } from './services/backend-api.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
// tslint:disable-next-line: import-spacing
import { Socket} from './shared/interfaces';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  public stockdata: number;
  sub: Subscription;
  varible: any;
  watchList = [];
  /**
   *
   */
  constructor(private backendApiService: BackendApiService) { 
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.backendApiService.getData()
    .subscribe(quote => {
      this.stockdata = quote;
      this.varible =this.stockdata;
      console.log(this.varible);
     // this.setfunction();
    });
  }
  // setfunction(){
  //   let index = Math.floor(Math.random() * this.varible.length),
  //   stock = this.varible[index],
  //   maxChange = this.varible.open * 0.005,
  //   change = maxChange - Math.random() * maxChange * 2,
  //   last;
  //   console.log(change);
  // }





}
