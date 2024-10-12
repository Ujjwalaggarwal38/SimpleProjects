import { Component } from '@angular/core';
import { AxiosService } from '../axios.service';

@Component({
  selector: 'app-auth-content',
  standalone: true,
  imports: [],
  templateUrl: './auth-content.component.html',
  styleUrl: './auth-content.component.css'
})
export class AuthContentComponent {
  data:string[] =[]
constructor  (private  axioService:AxiosService ){

}
ngOnIt() :void{
  this.axioService.request(
    "GET",
    "/message",
    {}
  ).then((res) => this.data=res.data)
}
}
