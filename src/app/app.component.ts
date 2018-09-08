import { Component } from '@angular/core';
import { ToasterConfig } from 'angular2-toaster';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
})
export class AppComponent {

  toasterConfig: ToasterConfig = new ToasterConfig({
    tapToDismiss: false,
    showCloseButton: false,
    typeClasses: {
      'info': 'toast-info',
      'success': 'toast-success',
      'error': 'toast-error'
    },
    iconClasses: {
      'info': 'fas fa-info-circle',
      'success': 'fas fa-check-circle',
      'error': 'fas fa-times-circle'
    },
    defaultTypeClass: 'info',
    positionClass: 'toast-position',
    animation: 'fade',
  });

}
