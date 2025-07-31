import { Directive, ElementRef, HostListener, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[hoverTitle]'
})
export class HoverTitleDirective {

  private render = inject(Renderer2)
  private el = inject(ElementRef)

  @HostListener('mouseenter') onMouseEnter() {
    this.render.addClass(this.el.nativeElement, 'text-secondary')
    this.render.addClass(this.el.nativeElement, 'animate-fadeIn')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.render.removeClass(this.el.nativeElement, 'text-secondary')
    this.render.removeClass(this.el.nativeElement, 'animate-fadeIn')
  }
}
