import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-storie',
    standalone: true,
    templateUrl: './storie.component.html',
    styleUrl: './storie.component.css',
    imports: [CommonModule, FooterComponent]
})
export class StorieComponent {

}
