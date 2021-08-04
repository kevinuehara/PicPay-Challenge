import { Component, Inject, Optional } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: 'app-modal-receipt-payment',
  templateUrl: './modal-receipt-payment.component.html',
  styleUrls: ['./modal-receipt-payment.component.scss']
})
export class ModalReceiptPaymentComponent {

  isSentTransaction = false;

  constructor(
    @Optional() private dialogRef: MatDialogRef<ModalReceiptPaymentComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {

    this.isSentTransaction = data.sentTransaction;
  }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }
}
