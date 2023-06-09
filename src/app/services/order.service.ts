import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Order } from '../models/order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient:HttpClient) { }

  ordertList:Order[] =[];
  orders:EventEmitter<Order[]>=new EventEmitter();

  async getOrders():Promise<Observable<Order[]>>{
    this.httpClient.get<Order[]>('http://localhost:8081/orders').subscribe(data=>{
     this.orders.emit(data);
   })
   
   return this.orders;
  }

  async addOrder(order:Order){
    this.httpClient.post('http://localhost:8081/orders',{
      "orderNo":order.orderNo,
      "customerName":order.customerName,
      "customerAddress":order.customerAddress,
      "customerContactNo":order.customerContactNo,
      "productName":order.productName,
      "totalPrice":order.totalPrice

    }).subscribe(data=>{
      console.log(data);
     });
  }

  url:string="http://localhost:8081/orders";
  async deleteOrder(id:number){
    const url=this.url+"/"+id;
    return this.httpClient.delete<Order>(url).subscribe(data=>{console.log(data);});
  }
}
