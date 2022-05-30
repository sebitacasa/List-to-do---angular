import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/Items';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  url:string = 'http://localhost:3001/items'
  httpOptions = {
    headers:{
      'Content-Type': 'application/json'
    }
  }

  items:Item[]=[
    {
      id: 0,
      title: 'pera',
      price: 10.5,
      quantity: 4,
      completed: false
    },
    {
      id: 1,
      title: 'pan',
      price: 3.5,
      quantity: 8,
      completed: true
    },
    {
      id: 2,
      title: 'buzo',
      price: 20.5,
      quantity: 2,
      completed: false
    }
  ]
  

  constructor(private http:HttpClient) { }

  getItems():Observable<Item[]>{
    //return this.items;
    return this.http.get<Item[]>(this.url)
  }
  

  addItem(item:Item): Observable<Item> {
    //this.items.unshift(item)
    return this.http.post<Item>(this.url, item, this.httpOptions);
  }

  toggleItem(item: Item):Observable<Item>{
    return this.http.put<Item>(this.url + item.id, item, this.httpOptions)
  }


  deleteItem(item: Item):Observable<Item>{
    return this.http.delete<Item>(this.url + item.id)
  }
}
