import { Component, Input, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) {}
  hide = true;

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    number: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
  });
  @Input() formError: string = '';

  ngOnInit(): void {}
  onFormChange() {
    this.formError = '';
  }
  onSubmit() {
    console.log(this.userForm.value);
    this.userForm.reset({ name: '', number: '', address: '' });
  }
}

