import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-phonedetails',
  templateUrl: './phone.component.html',
  styleUrl: './phone.component.css'
})
export class PhoneComponent {

  id:any;
  items:any
  phone=[
    {id:1,title:"iphone",name:"Iphone 14 pro",price:2500,img:"/assets/iphone14pro.jpg"},
    {id:2,title:"iphone",name:"Iphone 15 pro",price:3000,img:"/assets/iphone15pro.jpg"},
     {id:3,title:"Samsung",name:"Samsung s21",price:2500,img:"/assets/s21.jpg"},
     {id:4,title:"Samsung",name:"Samsung s22 ",price:4000,img:"/assets/s22.jpg"},
  ]

  constructor(private router:ActivatedRoute){}
  ngOnInit()
  {
    this.id=this.router.snapshot.paramMap.get('id');
    this.items=this.phone.filter(e=>e.id==this.id);
    console.log(this.items)
  }

}