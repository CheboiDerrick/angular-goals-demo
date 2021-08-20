import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  constructor(private elem:ElementRef) {}

  @HostListener('click') onClicks(){
    this.textDeco('uppercase')
  }
  
  @HostListener('dblclick') onDoubleClicks(){
    this.textDeco('lowercase')
  }
  private textDeco(action:string)
  { 
    this.elem.nativeElement.style.textTransform=action
  }

}
