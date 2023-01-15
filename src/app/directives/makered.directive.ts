import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMakered]',
})
export class MakeredDirective {

  @Input('appMakered') appMakered: string = "red"

  constructor(private el: ElementRef, private r: Renderer2) {
    // this.el.nativeElement.style.color = 'red'
    // this.r.setStyle(this.el.nativeElement,'color',this.appMakered)
  }

  @HostBinding('style.fontSize') fontSize: string = "25px"

  @HostListener('click',['$event.target']) onClick(event: Event) {
    console.log('Event: ',event)
  }

  @HostListener('mouseenter') onEnter() {
    this.r.setStyle(this.el.nativeElement,'color',this.appMakered)
    this.fontSize = "36px"
  }

  @HostListener('mouseleave') onLeave() {
    this.r.setStyle(this.el.nativeElement,'color',null)
    this.fontSize = "25px"

  }
}
