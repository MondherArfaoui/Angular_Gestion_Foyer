import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent {

  constructor() {
    this.loadScript('assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js');
    this.loadScript('assets/vendor/tiny-slider/tiny-slider.js');
    this.loadScript('assets/vendor/glightbox/js/glightbox.js');
    this.loadScript('assets/vendor/purecounterjs/dist/purecounter_vanilla.js');
    this.loadScript('assets/vendor/apexcharts/js/apexcharts.min.js');
    this.loadScript('assets/vendor/overlay-scrollbar/js/overlayscrollbars.min.js');
    this.loadScript('assets/js/functions.js');
  }

  loadScript(src: string) {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.head.appendChild(script);
  }

  userconnect = JSON.parse(localStorage.getItem("userconnect")!);

  logout(){
    localStorage.clear()
  }

}
