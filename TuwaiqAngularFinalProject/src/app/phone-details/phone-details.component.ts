import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { increment } from '../state/counter/counter.actions';
import { Store } from '@ngrx/store';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-phone-details',
  templateUrl: './phone-details.component.html',
  styleUrls: ['./phone-details.component.css']
})
export class PhoneDetailsComponent implements OnInit {
  private store = inject(Store);

  id: any;
  items: any= null;
  phone = [
    { id: 1, title: "iphone", name: "Iphone 14 pro", price: 2500, img: "/assets/iphone14pro.jpg", quantity: 1 },
    { id: 2, title: "iphone", name: "Iphone 15 pro", price: 3000, img: "/assets/iphone15pro.jpg", quantity: 1 },
    { id: 3, title: "Samsung", name: "Samsung s21", price: 2500, img: "/assets/s21.jpg", quantity: 1 },
    { id: 4, title: "Samsung", name: "Samsung s22", price: 4000, img: "/assets/s22.jpg", quantity: 1 },
  ];

  constructor(private route: ActivatedRoute) { }

  increment() {
    this.store.dispatch(increment());
    Swal.fire({
      toast: true,
      position: 'top-end',
      title: 'تم اضافة المنتج إلى السلة بنجاح',
      icon: 'success',
      showConfirmButton: false,
      timer: 3000, 
      timerProgressBar: true,
      customClass: {
        popup: 'popup-class',
        title: 'title-class'
      }
    });
  }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.items = this.phone.filter(e => e.id == this.id);
  }
}
