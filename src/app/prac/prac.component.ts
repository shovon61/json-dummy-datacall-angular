import { Component,OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';
import { Idemo } from '../model/idemo';
//import { Data } from '@angular/router';

@Component({
  selector: 'app-prac',
  templateUrl: './prac.component.html',
  styleUrls: ['./prac.component.scss']
})
export class PracComponent implements OnInit {

data:any[]=[];

  constructor(private demoService: DemoService) {}

  ngOnInit(){
   

  this.demoService.getData().subscribe((data)=> {
    this.data=data;
    console.log(this.data);
   },
   (err)=>{
    console.error("err",err);
   }
   )

  }  

}

