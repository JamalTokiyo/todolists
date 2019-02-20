import { Injectable } from '@angular/core';
import { FormControl , FormGroup , Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";


@Injectable({
 providedIn: 'root'
})
export class CustomerService {

 constructor(private firebase: AngularFireDatabase) { }
         customerList: AngularFireList<any>;

         form = new FormGroup({
     $key: new FormControl(null),
     Name: new FormControl('', Validators.required),
     Department: new FormControl('', Validators.required),
     Tesk: new FormControl('', Validators.required),
     Dateofdue: new FormControl('')
         });

         getCustomers(){
                 this.customerList = this.firebase.list('customers');
                 return this.customerList.snapshotChanges();
         }
         insertCustomer(customer){
                 this.customerList.push({
                         Name: customer.Name,
                         Department: customer.Department,
                         Tesk: customer.Tesk,
                         dateofdue:customer.dateofdue
                  });
         }
}