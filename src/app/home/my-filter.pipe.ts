// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'myFilter'
// })
// export class MyFilterPipe implements PipeTransform {

//   // transform(posts: any, term: any): any {
//   //   if(term===undefined){
//   //     return posts;
//   //   }
//   //   // else{
//   //   //   term=term.toLowerCase();
//   //   // }

//   //   return posts.filter(items=>{
//   //     return items.author_by.toLowerCase().includes(term.toLowerCase()) ||items.bookname.toLowerCase().includes(term.toLowerCase()) ||
//   //      items.price.toString().includes(term.toString())  ;
//   //   })
//   // }

//   transform(posts: any, term: any): any {
//     //check the search term is undefined
//     if(term === undefined){
//       return posts;
//      }
//     else{
//       return posts.filter(function(post){
//         return post.author_by.toLowerCase(
//         ).includes(term.toLowerCase(
//         ));
//       })
//     }
    
//   }
// } 

//   transform(posts: any, term: any): any {
//     //check the search term is undefined
//     if(!term){
//       return posts;
//      }
//     else{
//       term=term.toUpperCase();
//       return term.filter(items=>{
//         return items.author_by.startsWith(term)==true;
//       })
//     }
  
//       // return posts.filter(function(post){
//       //   return post.author_by.toLowerCase(
//       //   ).includes(term.toLowerCase())
//       // })
    
    
//   }

// }



// transform(people: any, term: any): any {

//   //check if search term is undefined
//   if(term === undefined) return people;
//   //return updates people array
//   return people.filter(function(thisperson){
//       return thisperson.name.toLowerCase().includes(term.toLowerCase());
//   }) 

// }



import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFilter'
})
export class MyFilterPipe implements PipeTransform {

  
  transform(posts: any, term: any): any {
    //check the search term is undefined
    if(term === undefined){
      return posts;
    }else{
      return posts.filter(function(post){
        return post.author_by.toLowerCase().includes(term.toLowerCase())

      })
    }
    
  }

}

