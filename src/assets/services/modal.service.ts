import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ModalService {
  private modalProductsSubject = new BehaviorSubject<boolean>(false);
  private modalLightModeSubject = new BehaviorSubject<boolean>(false);

  modalProducts$ = this.modalProductsSubject.asObservable();
  modalLightMode$ = this.modalLightModeSubject.asObservable();

  openProductsModal() {
    this.modalProductsSubject.next(true);
  }

  closeProductsModal() {
    this.modalProductsSubject.next(false);
  }

  openLightModeModal() {
    this.modalLightModeSubject.next(true);
  }

  closeLightModeModal() {
    this.modalLightModeSubject.next(false);
  }
}
