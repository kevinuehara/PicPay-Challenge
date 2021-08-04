import { Component, Inject, Optional } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Card } from "src/app/models/Card";

@Component({
  selector: "app-modal-payment",
  templateUrl: "./modal-payment.component.html",
  styleUrls: ["./modal-payment.component.scss"],
})
export class ModalPaymentComponent {
  public name: string;
  public cards: Card[];
  
  userForm = this.fb.group({
    value: ['', Validators.required],
    card: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    @Optional() private dialogRef: MatDialogRef<ModalPaymentComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.cards = data.cards;
    this.name = data.name;
    this.userForm.get('card').patchValue(this.cards[0]);
  }

  sendTransaction(): void {
    this.dialogRef.close({ sentTransaction: true, form: this.userForm });
  }

  close() {
    this.dialogRef.close({ sentTransaction: false });
  }
}
