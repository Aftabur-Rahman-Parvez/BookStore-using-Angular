import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookService } from '../book.service';
import { Book } from '../book.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  posts:Book=new Book();
  post_id;
  edit_mode:boolean;
  submitAlert:string;
  constructor( private service:BookService, private route:ActivatedRoute) {
    this.route.params.subscribe(res=>{
      console.log(res);
      console.log(res.id);
      
      if(res.id){
        this.post_id=res.id;
        this.edit_mode=true;
        this.getEditItem();
      }
    })
   }

  ngOnInit() {
  }

  getEditItem(){
    this.service.getPostById(this.post_id).subscribe(res=>{
      console.log(res);
      this.posts=res as Book;
    })
    

  }

  formSubmit(formData:NgForm){
    if(this.edit_mode){
      this.service.updateData(this.post_id,this.posts).subscribe(res=>{
        console.log(res);
        this.submitAlert="Update Successfully";
      })

    }else{
      formData['date']=new Date();
      console.log(formData);
      this.service.addPost(formData).subscribe(res=>{
        console.log(res);
        setTimeout(()=>{
          this.submitAlert="Book Add  Successfully";
         
        },2000);
        
        // this.posts=res as Book;
      })
    }
    

  }
}


