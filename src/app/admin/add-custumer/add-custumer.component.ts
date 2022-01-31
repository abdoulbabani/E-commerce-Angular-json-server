import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { user } from 'src/app/Modal';

@Component({
  selector: 'app-add-custumer',
  templateUrl: './add-custumer.component.html',
  styleUrls: ['./add-custumer.component.scss'],
})
export class AddCustumerComponent implements OnInit {
  users: user[] = [];
  constructor(private userservice: UserService) {}

  ngOnInit(): void {
    this.userservice.getAllUsers().subscribe((data: any) => {
      this.users = data;
      console.log(this.users);
    });
  }
}
