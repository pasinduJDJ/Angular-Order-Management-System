import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-itemcard',
  templateUrl: './itemcard.component.html',
  styleUrls: ['./itemcard.component.css']
})
export class ItemcardComponent {
  @Input('product') product:any;
}
