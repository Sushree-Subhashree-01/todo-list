import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Service/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todos',
  imports: [CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit{
  constructor(private api:ApiService){}
Data:any=[]
ngOnInit(): void {
  this.getTodos()
}
getTodos(){
  this.api.getTodos().subscribe((res)=>{
    this.Data=res

    console.log(this.Data);
    
  })
}

}
