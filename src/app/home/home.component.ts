import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book.model';
// import{MyFilterPipe} from './my-filter.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts:Book[]=[];
  //  term;
  //  author;
  
  constructor(private service:BookService) { }

  ngOnInit() {
    this.getpost();
  }
  
  getpost(){
    this.service.getPost().subscribe(res=>{
      // console.log(res);
      
      for(let key in res){
        // console.log(key);
        let obj:Book={
          bookname:res[key].bookname,
          author_by:res[key].author_by,
          price:res[key].price,
          date:res[key].date,
          description:res[key].description,
          image:res[key].image,
          $key:key,
        }
        this.posts.push(obj)
      }
      // console.log(this.posts);

    })
  }

}
