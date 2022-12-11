import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { IonDatetime, ModalController } from '@ionic/angular';

type ShortDate = 'today' | 'yesterday' | 'lastSelected';
@Component({
  selector: 'app-create-cash-flow',
  templateUrl: './create-cash-flow.page.html',
  styleUrls: ['./create-cash-flow.page.scss'],
})
export class CreateCashFlowPage implements OnInit {
  hasClickedCustomButtons = false;
  form: UntypedFormGroup = this.formBuilder.group({
    amount: ['', [Validators.required, Validators.min(0.01)]],
    date: [''],
    comment: ['']
  });

  constructor(private formBuilder: FormBuilder, private modalController: ModalController) { }

  ngOnInit() {
    this.form.patchValue({
      amount: '2.00',
      date: '1996-11-24',
      comment: 'Conchasumadre'
    })
  }

  pickDate(shortDate: ShortDate) {
    // TODO: When you re-open the datepicker modal, it doesn't show the selected date
    this.hasClickedCustomButtons = true;
    const today = new Date();
    switch(shortDate) {
      case 'today':
        this.form.patchValue({ date: today.toJSON().slice(0,10) });
        break;
      case 'yesterday':
        today.setDate(today.getDate() - 1);
        this.form.patchValue({ date: today.toJSON().slice(0,10) });
        break;
    }
    this.modalController.dismiss();
  }

  async selectDate(datepicker: IonDatetime) {
    // TODO: Doesn't work when you change the month and pick the same date
    if (this.hasClickedCustomButtons) {
      this.hasClickedCustomButtons = false;
      datepicker.reset();
      return;
    }
    const previousDayValue = datepicker.value.slice(-2);
    await datepicker.confirm();
    if (previousDayValue !== datepicker.value.slice(-2)) {
      this.modalController.dismiss();
    }
  }
}
