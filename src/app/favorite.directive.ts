import { Directive, HostBinding } from '@angular/core';

// import director from angular core scoped package. selector is a string with square brackets. use square brack
@Directive({
  selector: '[mwFavorite]'
})

export class FavoriteDirective{
  @HostBinding('class.is-favorite') isFavorite = true;
}
