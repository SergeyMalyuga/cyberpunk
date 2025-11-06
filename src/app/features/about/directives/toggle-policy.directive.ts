import {Directive, ElementRef, HostListener, inject} from '@angular/core';

@Directive({
  selector: '[appTogglePolicy]'
})
export class AppTogglePolicyDirective {
  private elementRef: ElementRef = inject(ElementRef);

  @HostListener('change')
  onTogglePolicy() {
    const target = this.elementRef.nativeElement as HTMLElement;
    target.classList.toggle('stock__label--active');
  }
}
