import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ModalService } from '../../../assets/services/modal.service';

@Component({
  selector: 'app-modal-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-products.component.html',
  styleUrl: './modal-products.component.scss',
})
export class ModalProductsComponent implements OnInit, OnDestroy {
  modalIsOpen = false;
  private destroy$ = new Subject<void>();

  products = [
    {
      name: '2022 MEDCURSO',
      image: '../../../assets/img/modal-products/logo-medgrupo.png',
    },
    {
      name: '2022 M.E.D',
      image: '../../../assets/img/modal-products/logo-med.png',
    },
    {
      name: '2022 RACIPE',
      image: '../../../assets/img/modal-products/logo-racipe.png',
    },
    {
      name: '2021 CPMED',
      image: '../../../assets/img/modal-products/logo-cpmed.png',
    },
  ];

  constructor(public modalService: ModalService) {}

  ngOnInit() {
    this.modalService.modalProducts$
      .pipe(takeUntil(this.destroy$))
      .subscribe((open: boolean) => (this.modalIsOpen = open));
  }

  closeModal() {
    this.modalService.closeProductsModal();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
