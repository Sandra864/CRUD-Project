import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BookstoreDetail } from '../shared/bookstore-detail.model';
import { BookstoreDetailService } from '../shared/bookstore-detail.service';

@Component({
  selector: 'app-bookstore-details',
  templateUrl: './bookstore-details.component.html',
  styleUrls: ['./bookstore-details.component.css']
})
export class BookstoreDetailsComponent implements OnInit {
  assets: any [];
  constructor(public service:BookstoreDetailService ,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

populateForm(selectedBook :BookstoreDetail)
{
  this.service.formData =Object.assign({},selectedBook);
}

onDelete(id:string) {
  if (confirm('Are you sure to delete this record?')) {
    this.service.deletePaymentDetail(id)
      .subscribe(
        res => {
          this.service.refreshList();
          this.toastr.error("Deleted successfully", 'Book is Deleted');
        },
        err => { console.log(err) }
      )
  }
}
}
