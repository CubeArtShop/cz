import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appLazyImg]'
})
export class LazyImgDirective implements OnInit {
  @Input() appLazyImg: string = '';

  constructor(private el: ElementRef<HTMLImageElement>) {}

  ngOnInit(): void {
    const imgElement = this.el.nativeElement;
    if ('loading' in HTMLImageElement.prototype) {
      imgElement.src = this.appLazyImg;
      imgElement.loading = 'lazy';
    } else {
      this.loadImageWithIntersectionObserver(imgElement);
    }
  }

  private loadImageWithIntersectionObserver(imgElement: HTMLImageElement): void {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          imgElement.src = this.appLazyImg;
          observer.unobserve(imgElement);
        }
      });
    });
    observer.observe(imgElement);
  }
}
