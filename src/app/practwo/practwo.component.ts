import { Component } from '@angular/core';
import { DemoService } from '../services/demo.service';
import { Idemo } from '../model/idemo';

@Component({
  selector: 'app-practwo',
  templateUrl: './practwo.component.html',
  styleUrls: ['./practwo.component.scss']
})
export class PractwoComponent {

  demoData:Idemo[]=[];

  constructor(private demoService: DemoService) {}  

  ngOnInit(){
    this.demoService.getData().subscribe((data)=>{
      this.demoData=data;
      console.log(this.demoData);
    })
  }
}
