import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, inject,} from '@angular/core';
import Swiper from 'swiper';
import {Autoplay, EffectFlip, Navigation, Pagination} from 'swiper/modules';

@Component({
  selector: 'app-swiper',
  imports: [],
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwiperComponent implements AfterViewInit {
  private swiper!: Swiper;
  private elementRef: ElementRef = inject(ElementRef);

  ngAfterViewInit(): void {
    const target = this.elementRef.nativeElement.querySelector('.swiper');
    this.swiper = new Swiper(target, {
      modules: [Autoplay, Pagination, Navigation, EffectFlip],
      slidesPerView: 1,
      // spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3000,
      },
      breakpoints: {},
    });
  }
}
