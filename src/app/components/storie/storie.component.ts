import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-storie',
    standalone: false,
    templateUrl: './storie.component.html',
    styleUrl: './storie.component.css',
/*     imports: [CommonModule, FooterComponent] */
})
export class StorieComponent {

    secSto:number = 0;
    secStoInt:number = 0;
    ngOnInit(): void {
        if(this.secStoInt == 1){
        window.addEventListener('scroll', function () {
                const img__tre:any = document.querySelector('.img__tre');
                const img__due:any = document.querySelector('.img__due');
                const scrollValue = window.scrollY;
                img__tre.style.transform = `translateY(${scrollValue * 0.003}cm)`;
                img__due.style.transform = `translateY(${scrollValue * 0.001}cm)`;
        }); 
        }
    }

    checkOpenStoria(){
        this.secSto = 1
        if(this.secSto == 1){
            setTimeout(() => {
               this.secStoInt = 1
            }, 3000);
        }
    }
}
      