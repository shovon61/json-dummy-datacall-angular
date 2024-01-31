import { Component } from '@angular/core';
import { Idemo } from '../model/idemo';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  menu:Idemo[]=[];

  constructor(private demoService: DemoService) {}  

  ngOnInit(){
    this.demoService.getData().subscribe((data)=>{
      this.menu=data;
      console.log(this.menu);
    })
  }
}
