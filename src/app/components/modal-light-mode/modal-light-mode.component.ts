import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ModalService } from '../../../assets/services/modal.service';

@Component({
  selector: 'app-modal-light-mode',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-light-mode.component.html',
  styleUrls: ['./modal-light-mode.component.scss'],
})
export class ModalLightModeComponent {
  constructor(public modalService: ModalService) {}

  closeModal() {
    this.modalService.closeLightModeModal();
  }
}
