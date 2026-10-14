import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { CardsComponent } from "./cards/cards.component";
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { EventImage, EventModalComponent } from "./event-modal/event-modal.component";
import { IAlbum, Lightbox, LightboxModule } from 'ngx-lightbox';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EventModalComponent, LightboxModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [Lightbox]
})
export class AppComponent implements AfterViewInit {
  title = 'Happy-Happenings';
  @ViewChild('swiperContainer', { static: false }) swiperRef!: ElementRef;

  ngAfterViewInit(): void {
    new Swiper(this.swiperRef.nativeElement, {
      modules: [Navigation, Pagination, Autoplay],
      loop: true,
      slidesPerView: 3, // Show 3 slides at a time
      spaceBetween: 30, // Space between slides
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        320: { slidesPerView: 1 }, // Mobile: Show 1 slide
        768: { slidesPerView: 2 }, // Tablet: Show 2 slides
        1024: { slidesPerView: 3 }, // Desktop: Show 3 slides
      },
    });
  }

  showModal = false;

  eventImages: EventImage[] = [
    {
      src: 'assets/resort-mandap-lawn.jpeg',
      thumb: 'assets/resort-mandap-lawn.jpeg',
      caption: 'Resort Lawn Mandap - Open Air Floral Decor',
      cropPosition: 'top'
    },
    {
      src: 'assets/groomsmen-celebration.jpeg',
      thumb: 'assets/groomsmen-celebration.jpeg',
      caption: 'Celebration Moments - Groomsmen Stage Photo',
      cropPosition: 'middle'
    },
    {
      src: 'assets/reception-stage-decor.jpeg',
      thumb: 'assets/reception-stage-decor.jpeg',
      caption: 'Grand Reception Stage - Red & White Floral Setup',
      cropPosition: 'middle'
    },
    {
      src: 'assets/vintage-mirror-decor.jpeg',
      thumb: 'assets/vintage-mirror-decor.jpeg',
      caption: 'Traditional Welcome Decor - Vintage Mirror & Nilavilakku',
      cropPosition: 'middle'
    },
    {
      src: 'assets/mandap-portrait.jpeg',
      thumb: 'assets/mandap-portrait.jpeg',
      caption: 'Mandap Elegance - Traditional Couple Portrait',
      cropPosition: 'upper' // 'upper' / 'top' focuses on faces and mandap canopy
    },
    {
      src: 'assets/romantic-mandap-couple.jpeg',
      thumb: 'assets/romantic-mandap-couple.jpeg',
      caption: 'Intimate Moments - Mandap Floral Setup',
      cropPosition: 'upper'
    },
    {
      src: 'assets/bridal-entry.jpeg',
      thumb: 'assets/bridal-entry.jpeg',
      caption: 'Bridal Entry - Floral Canopy Procession',
      cropPosition: 'center'
    },
    {
      src: 'assets/wedding-rituals.jpeg',
      thumb: 'assets/wedding-rituals.jpeg',
      caption: 'Sacred Rituals - Traditional Ceremony',
      cropPosition: 'center'
    },
    {
      src: 'assets/wedding-couple-walk.jpeg',
      thumb: 'assets/wedding-couple-walk.jpeg',
      caption: 'Couple Celebration - Walking Down the Aisle',
      cropPosition: 'upper'
    },
    {
      src: 'assets/outdoor-celebration.jpeg',
      thumb: 'assets/outdoor-celebration.jpeg',
      caption: 'Joyful Moments - Outdoor Theme Decor',
      cropPosition: 'middle'
    },
    {
      src: 'assets/aisle-walk.jpeg',
      thumb: 'assets/aisle-walk.jpeg',
      caption: 'Destination Wedding - Pathway Decor',
      cropPosition: 'upper'
    },
    {
      src: 'assets/family-emotion.jpeg',
      thumb: 'assets/family-emotion.jpeg',
      caption: 'Family Blessing - Emotion & Joy',
      cropPosition: 'base'
    },
    {
      src: 'assets/weddingDec.jpg',
      thumb: 'assets/weddingDec.jpg',
      caption: 'Stage & Flower Decor',
      cropPosition: 'middle'
    },
    {
      src: 'assets/decor9.jpg',
      thumb: 'assets/decor9.jpg',
      caption: 'Grand Entrance Decoration',
      cropPosition: 'middle'
    },
    {
      src: 'assets/decor10.jpg',
      thumb: 'assets/decor10.jpg',
      caption: 'Stunning Ambient Lighting',
      cropPosition: 'middle'
    },
    {
      src: 'assets/haldi.jpeg',
      thumb: 'assets/haldi.jpeg',
      caption: 'Haldi & Pre-Wedding Function',
      cropPosition: 'upper'
    },
    {
      src: 'assets/decor8.jpg',
      thumb: 'assets/decor8.jpg',
      caption: 'Elegant Banquet Setup',
      cropPosition: 'middle'
    },
    {
      src: 'assets/anniverssary.jpg',
      thumb: 'assets/anniverssary.jpg',
      caption: 'Anniversary Celebration Setup',
      cropPosition: 'middle'
    },
    {
      src: 'assets/decor1.jpg',
      thumb: 'assets/decor1.jpg',
      caption: 'Custom Theme Floral Decor',
      cropPosition: 'middle'
    },
    {
      src: 'assets/decor.jpg',
      thumb: 'assets/decor.jpg',
      caption: 'Royal Mandap Stage',
      cropPosition: 'middle'
    },
    {
      src: 'assets/birthday.jpg',
      thumb: 'assets/birthday.jpg',
      caption: 'Birthday & Special Event Setup',
      cropPosition: 'middle'
    }
  ];

  openModal() {
    this.showModal = true;
  }
  onModalClosed() {
    this.showModal = false; // ✅ Properly resets modal state
  }
}
