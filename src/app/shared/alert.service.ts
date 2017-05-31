import { Injectable } from '@angular/core';
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';


@Injectable()
export class AlertService {

  constructor(private toastyService: ToastyService,
    private toastyConfig: ToastyConfig, ) {
  }

  addToast(title, message, type) {
    const toastOptions: ToastOptions = {
      title: title,
      msg: message,
      showClose: true,
      timeout: 5000,
      theme: 'default',
    };
    if (type === null || type === 'info') {
      this.toastyService.info(toastOptions);
    } else if (type === 'success') {
      this.toastyService.success(toastOptions);
    } else if (type === 'wait') {
      this.toastyService.wait(toastOptions);
    } else if (type === 'error') {
      this.toastyService.error(toastOptions);
    } else if (type === 'warning') {
      this.toastyService.warning(toastOptions);
    }
  }

}
