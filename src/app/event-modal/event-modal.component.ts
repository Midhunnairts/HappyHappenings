import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, Output, SimpleChanges } from '@angular/core';
import { IAlbum } from 'ngx-lightbox';

export interface EventImage extends IAlbum {
  cropPosition?: 'upper' | 'top' | 'middle' | 'center' | 'base' | 'bottom' | string;
}

@Component({
  selector: 'app-event-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-modal.component.html',
  styleUrl: './event-modal.component.scss'
})
export class EventModalComponent {
  @Input() images: EventImage[] = [];
  @Input() showModal: boolean = false;
  @Output() modalClosed = new EventEmitter<void>();

  selectedImageIndex: number | null = null;

  ngOnChanges(changes: SimpleChanges) {
    if ('showModal' in changes) {
      if (this.showModal) {
        document.body.classList.add('modal-open');
      } else {
        document.body.classList.remove('modal-open');
        this.selectedImageIndex = null;
      }
    }
  }

  getCropPosition(pos?: string): string {
    if (!pos) return 'center top';
    const normalized = pos.toLowerCase().trim();
    if (normalized === 'upper' || normalized === 'top') {
      return 'center top';
    } else if (normalized === 'middle' || normalized === 'center') {
      return 'center center';
    } else if (normalized === 'base' || normalized === 'bottom') {
      return 'center bottom';
    }
    return pos;
  }

  openLightbox(index: number): void {
    this.selectedImageIndex = index;
  }

  closeLightbox(): void {
    this.selectedImageIndex = null;
  }

  prevImage(event?: Event): void {
    if (event) event.stopPropagation();
    if (this.selectedImageIndex !== null && this.images.length > 0) {
      this.selectedImageIndex = (this.selectedImageIndex - 1 + this.images.length) % this.images.length;
    }
  }

  nextImage(event?: Event): void {
    if (event) event.stopPropagation();
    if (this.selectedImageIndex !== null && this.images.length > 0) {
      this.selectedImageIndex = (this.selectedImageIndex + 1) % this.images.length;
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    if (this.selectedImageIndex !== null) {
      if (event.key === 'ArrowLeft') {
        this.prevImage();
      } else if (event.key === 'ArrowRight') {
        this.nextImage();
      } else if (event.key === 'Escape') {
        this.closeLightbox();
      }
    }
  }

  closeModal() {
    this.showModal = false;
    this.selectedImageIndex = null;
    document.body.classList.remove('modal-open');
    this.modalClosed.emit();
  }
}
