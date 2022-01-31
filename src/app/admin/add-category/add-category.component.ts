import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent implements OnInit {
  showcontainer!: boolean;
  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.showcontainer = !this.showcontainer;
  }
}
