import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url='https://bookstore-7ad14.firebaseio.com/bookstore';

  constructor(private http:HttpClient) { }

  addPost(data){
    return this.http.post(this.url+'.json',data);
  }
  getPost(){
    return this.http.get(this.url+'.json')
  }
  getPostById(id){
    return this.http.get(this.url+'/'+id+'.json')
  }

  getDelete(key){
    return this.http.delete(this.url+'/'+key+'.json')
  }
  updateData(id,data){
    return this.http.put(this.url+'/'+id+'.json',data);
  }

}
