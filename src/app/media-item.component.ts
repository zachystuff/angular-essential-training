import { Component } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
// This is how you pass information into templates created.
export class MediaItemComponent {
  name = 'The Redemption';
  wasWatched() {
    return true;
  }
}
