import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Manipulation,
  EffectCards,
  EffectCoverflow,
  SwiperOptions,
} from 'swiper';

SwiperCore.use([Navigation, Manipulation, EffectCards, EffectCoverflow]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @ViewChild('swiperRef', { static: false }) sliderRef!: SwiperComponent;

  config: SwiperOptions = {
    navigation: true,
    loop: true,
    centeredSlides: true,
    mousewheel: true,
    direction: 'horizontal',
    effect: 'coverflow',
    grabCursor: true,
    slideToClickedSlide: true,
    preventClicks: false,
    preventClicksPropagation: false,
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 16,
      },
    },
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 0,
      modifier: 1,
      slideShadows: true,
    },
  };
  slides = [
    { iconName: 'important_devices', title: 'Get a device' },
    { iconName: 'phone', title: 'Add a phone-line' },
    { iconName: 'update', title: 'Upgrade' },
    { iconName: 'cell_wifi', title: 'Mobile Internet' },
    { iconName: 'wifi', title: 'Home Internet' },
  ];

  cardClicked(index: number) {
    const activeIndex = this.sliderRef?.swiperRef?.activeIndex ?? 0;

    if (index === activeIndex || Math.abs(index - activeIndex) === 5) {
      alert(`${this.slides?.[index]?.title} was selected!`);
    } else {
      this.sliderRef?.swiperRef?.slideToLoop(index);
    }
  }

  startClicked(e: MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    alert(`Start Here clicked!`);
  }
}
