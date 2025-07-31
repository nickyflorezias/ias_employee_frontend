import { Directive, ElementRef, HostListener, inject, Renderer2 } from '@angular/core';

@Directive({ selector: '[hoverborderblue]' })
export class HoverBorderBlue {

    private el = inject(ElementRef)
    private render = inject(Renderer2)

    @HostListener('mouseenter') onMouseEnter() {
        this.render.setStyle(this.el.nativeElement, 'border', '1px solid blue')
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.render.removeStyle(this.el.nativeElement, 'border')
    }
}