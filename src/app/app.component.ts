import { Component,OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  localItem:string;
  localItem1:string;
 
  newTodoName:'';
  newTodoDesc:'';
  
  
  ngOnInit(){
    this.localItem=localStorage.getItem("title");
    this.localItem1=localStorage.getItem("desc");
    
  }

  onAddTodo() { 
  localStorage.setItem("title",this.newTodoName);
  localStorage.setItem("desc",this.newTodoDesc);

   
  }
  onRemoveTodo(){

    localStorage.removeItem("title");
    localStorage.removeItem("desc");
  }
}
