import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {
  heroes!: Observable<any>;
  selectedId:any
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

      this.heroes = this.route.paramMap.pipe(
        delay(1000),
        switchMap(params => {
          this.selectedId =  params.get('id');
          console.log("this.selectedId",this.selectedId);
          return this.getHeroes();
        }));
        this.heroes.subscribe(console.log)
  }

  getHeroes(){

    return of('params');
  }



}
   