import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookstoreDetail } from './bookstore-detail.model';

@Injectable({
  providedIn: 'root'
})
export class BookstoreDetailService {
  constructor(private http:HttpClient) { 
  }

  readonly baseUrl ="https://localhost:44350/BooksApi";
  formData : BookstoreDetail = new BookstoreDetail();
  bookList : BookstoreDetail[];
  postBookDetails(){
    return this.http.post(this.baseUrl,this.formData);
  }

  putBookDetails(){
    return this.http.put(this.baseUrl,this.formData);
  }

  deletePaymentDetail(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseUrl)
      .toPromise()
      .then(res =>this.bookList = res as BookstoreDetail[]);
  }

}
