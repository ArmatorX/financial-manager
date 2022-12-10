import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

type ShortDate = 'today' | 'tomorrow' | 'lastSelected';
@Component({
  selector: 'app-create-cash-flow',
  templateUrl: './create-cash-flow.page.html',
  styleUrls: ['./create-cash-flow.page.scss'],
})
export class CreateCashFlowPage implements OnInit {
  form: UntypedFormGroup = this.formBuilder.group({
    amount: [0, [Validators.required, Validators.min(0.01)]],
    date: [],
    comment: ['']
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  pickDate(shortDate: ShortDate) {
    switch(shortDate) {
      
    }
  }
}
