import { Component, OnInit } from '@angular/core';
import { BookstoreDetailService } from 'src/app/shared/bookstore-detail.service';
import { NgForm } from '@angular/forms';
import { BookstoreDetail } from 'src/app/shared/bookstore-detail.model';
import { ToastrService } from 'ngx-toastr';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-bookstore-details-form',
  templateUrl: './bookstore-details-form.component.html',
  styleUrls: ['./bookstore-details-form.component.css']
})
export class BookstoreDetailsFormComponent implements OnInit {

  constructor(public service:BookstoreDetailService, private toastr : ToastrService) { }

  ngOnInit(): void {}

OnSubmit(form:NgForm){
  if(this.service.formData.id ==null || this.service.formData.id =="" )
  {
    this.insertBook(form);
  }
  else
  {
    this.updateBook(form);
  }
}

resetForm(form: NgForm) {
 form.form.reset();
 this.service.formData = new BookstoreDetail();
}

insertBook(form: NgForm)
{
  this.service.postBookDetails().subscribe(
    res=>{
      this.resetForm(form);
      this.toastr.success('Successfully added', 'New Book Added')
    },
    err=>{console.log(err)}
  );
}

updateBook(form:NgForm)
{
  this.service.putBookDetails().subscribe(
    res=>{
      this.resetForm(form);
      this.toastr.info('Successfully updated', 'Book is updated')
    },
    err=>{console.log(err)}
  );
}

}




