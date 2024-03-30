import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: false,
/*   imports: [CommonModule], */
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
ngOnInit(): void {
  
}
status: boolean = false;
clickEvent(){
    this.status = !this.status;       
}
link__4(){
  window.location.href = "https://www.produzionidalbasso.com/project/all-stories-are-memoorables/";
}
link__3(){
  window.location.href = "mailto:memoorables@gmail.com";
}
link__5(){
  window.location.href = "https://www.paypal.me/memoorablesPP?locale.x=it_IT";
}
statOpen: boolean = false
openso(){
    let nc__2 = document.getElementById("nc__2") as HTMLElement;
    this.statOpen = !this.statOpen;  
    console.log(this.statOpen)
    if(this.statOpen == false){
      nc__2.style.setProperty("display","block");
    }else{
      nc__2.style.setProperty("display","none");
    }
    
  }
}
