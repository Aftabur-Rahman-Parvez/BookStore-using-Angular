import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book.model';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  post:Book=new Book();
  post_id:Book;
  

  constructor(private service:BookService,private router:ActivatedRoute) {
    this.router.params.subscribe(res=>{
      console.log(res);
      console.log(res.id);
      this.getSinglePost(res.id);
      
      
    })
   }

  ngOnInit() {
  }

  getSinglePost(id){
    this.post_id=id;
    this.service.getPostById(id).subscribe(res=>{
      console.log(res);
      this.post=res as Book;
    })

  }

  deleteItem(id){
    console.log(id);
    this.service.getDelete(id).subscribe(res=>{
      console.log(res);
    })
  }

}
