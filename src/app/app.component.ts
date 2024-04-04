import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  constructor(private elementRef: ElementRef<HTMLElement>) {}
  title = 'memoorables';
  
  loading:number = 0;

  ngAfterViewInit(): void {
    const element = document.getElementById("section") as HTMLElement;
    const text = element.innerText;
    element.innerText = '';

    let i = 0;
    const type = () => {
      if (i < text.length) {
        element.innerText += text.charAt(i);
        i++;
        setTimeout(type, 100); // Adjust typing speed as needed
      }
    };

    type();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = 1
    }, 3000);
  }
}





/* 

  CODICE PER MOMENTUM SCROLLING
  
<main id="main">
    <div class="section one">Section One</div>
    <div class="section two">Section Two</div>
    <div id="three" class="section three">Section Three</div>
    <div class="section four">Section Four</div>
</main>

  body {
    margin: 0;
}

 ::-webkit-scrollbar {
    width: 0 !important;
}

main {
    width: 100%;
    position: fixed;
}

.section {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3em;
    font-family: sans-serif;
}

  let body:any = document.body;
    let main:any = document.getElementById("main");
    let sx:any = 0;
    let sy:any = 0;
    let dx:any = sx;
    let dy:any = sy;
    
    body.style.height = main.clientHeight + "px";

    main.style.position = "fixed";
    main.style.top = 0;
    main.style.left = 0;

    window.addEventListener("scroll", (event: any) => {

      sx = window.scrollX;
      sy = window.scrollY;
    })

    window.requestAnimationFrame(render);

    function render() {
      dx = li(dx, sx, 0.07);
      dy = li(dy, sy, 0.07);

      dx = Math.floor(dx * 100) / 100;
      dy = Math.floor(dy * 100) / 100;

      main.style.transform = `translate3d(-${dx}px, -${dy}px, 0px)`;

      window.requestAnimationFrame(render);

      function li(a:any, b:any, n:any) {
        return (1 - n) * a + n * b;
      }
    }
  }

*/