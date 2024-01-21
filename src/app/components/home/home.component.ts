import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CommonModule, FooterComponent]
})
export class HomeComponent {


  ngOnInit(): void {


    let section__up = document.getElementById('section__up') as HTMLElement;
    let section__center = document.getElementById('section__center') as HTMLElement;
    let section__center__2 = document.getElementById('section__center__2') as HTMLElement;
    let footerdiv = document.getElementById('footerdiv') as HTMLElement;

    let checkPrepos = 0;
    let checkpos = 0;

    let counter = 0;
    let counterPre = 0;
    
    window.addEventListener("wheel", function (e) {
      checkpos = window.scrollY;
      console.log(e.target)
      if (checkpos > checkPrepos) {
        counter += 1
        if(counter == 0){
          section__up.style.setProperty("transform","translate3d(0px, 0%, 0px)");
          section__center.style.setProperty("transform","translate3d(0px, 100%, 0px)");
          section__center__2.style.setProperty("transform","translate3d(0px, 100%, 0px)");
          footerdiv.style.setProperty("transform","translate3d(0px, 100%, 0px)");
        }
        else if(counter == 1){
          section__up.style.setProperty("transform","translate3d(0px, 100%, 0px)");
          section__center.style.setProperty("transform","translate3d(0px, 0%, 0px)");
          section__center__2.style.setProperty("transform","translate3d(0px, 100%, 0px)");
          footerdiv.style.setProperty("transform","translate3d(0px, 100%, 0px)");
        }
        else if(counter == 2){
          section__up.style.setProperty("transform","translate3d(0px, 100%, 0px)");
          section__center.style.setProperty("transform","translate3d(0px, 100%, 0px)");
          section__center__2.style.setProperty("transform","translate3d(0px, 0%, 0px)");
          footerdiv.style.setProperty("transform","translate3d(0px, 100%, 0px)");
        }
        else if(counter == 3){
          section__up.style.setProperty("transform","translate3d(0px, 100%, 0px)");
          section__center.style.setProperty("transform","translate3d(0px, 100%, 0px)");
          section__center__2.style.setProperty("transform","translate3d(0px, 100%, 0px)");
          footerdiv.style.setProperty("transform","translate3d(0px, 0%, 0px)");
        }
        counterPre = counter
      }
      else{
        setTimeout(() => {
          if(counter >=0){
            counter -= 1
          }
        }, 1000);
        if(counter == 0){
          section__up.style.setProperty("transform","translate3d(0px, 0%, 0px)");
          section__center.style.setProperty("transform","translate3d(0px, 100%, 0px)");
          section__center__2.style.setProperty("transform","translate3d(0px, 100%, 0px)");
          footerdiv.style.setProperty("transform","translate3d(0px, 100%, 0px)");
        }
        else if(counter == 1){
          section__up.style.setProperty("transform","translate3d(0px, 100%, 0px)");
          section__center.style.setProperty("transform","translate3d(0px, 0%, 0px)");
          section__center__2.style.setProperty("transform","translate3d(0px, 100%, 0px)");
          footerdiv.style.setProperty("transform","translate3d(0px, 100%, 0px)");
        }
        else if(counter == 2){
          section__up.style.setProperty("transform","translate3d(0px, 100%, 0px)");
          section__center.style.setProperty("transform","translate3d(0px, 100%, 0px)");
          section__center__2.style.setProperty("transform","translate3d(0px, 0%, 0px)");
          footerdiv.style.setProperty("transform","translate3d(0px, 100%, 0px)");
        }
        else if(counter == 3){
          section__up.style.setProperty("transform","translate3d(0px, 100%, 0px)");
          section__center.style.setProperty("transform","translate3d(0px, 100%, 0px)");
          section__center__2.style.setProperty("transform","translate3d(0px, 100%, 0px)");
          footerdiv.style.setProperty("transform","translate3d(0px, 0%, 0px)");
        }
      }
      checkPrepos = checkpos;
    });
  }





  octimal(){
    window.location.href = "https://octimal.it/";
  }

  link__1(){
    window.location.href = "https://www.tiktok.com/@memoorables?_t=8iCiZKtRku0&_r=1";
  }

  link__2(){
    window.location.href = "https://www.instagram.com/memoorables/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==";
  }

  link__3(){
    window.location.href = "mailto:${project@memoorables.com}";
  }
  link__4(){
    window.location.href = "https://www.produzionidalbasso.com/project/all-stories-are-memoorables/";
  }

  link__5(){
    window.location.href = "https://www.paypal.me/memoorablesPP?locale.x=it_IT";
  }

}
