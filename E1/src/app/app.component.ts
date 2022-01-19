import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  books : Books[];
  index: number = 3;
  constructor() { 
     this.books = [
        {id:1,name:"Angular"},
        {id:2,name:"Typescript"},
        {id:3,name:"Javascript"},
        {id:4,name:"HTML"}
     ];
  }
  
  ngOnInit(): void {
  }

}

interface Books{
  id: number;
  name : string;
}
