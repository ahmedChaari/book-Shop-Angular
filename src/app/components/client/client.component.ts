import { OnInit, ViewChild, ElementRef,Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';


import { Router } from '@angular/router';




@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})





export class ClientComponent implements OnInit {

  constructor(private us:UserService, private router:Router) { }



  ngOnInit() {
   
  }



}
