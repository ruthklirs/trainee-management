import { Component, OnDestroy, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'testProjectClient';
  constructor(){}
 

  ngOnInit(): void {
  }
  logOut(){

  }


}
