import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(
    private toastr: ToastrService,
    public spinner: NgxSpinnerService
  ) {}
  
  showSuccess(ms) {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  toast(type: string, message: string, title: string = null) {
    let t = (title == null ? type.toUpperCase() : title);
    switch (type) {
      case 'success':
        this.toastr.success(message, t);
        break;
      case 'error':
        this.toastr.error(message, t);
        break;
      case 'warn':
        this.toastr.warning(message, t);
        break;

    }
  }

}
