import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { Card } from 'src/app/models/Card';
import { Transaction } from 'src/app/models/Transaction';
import { TransactionService } from 'src/app/services/TransactionService';
import { ModalPaymentComponent } from '../modal-payment/modal-payment.component';
import { ModalReceiptPaymentComponent } from '../modal-receipt-payment/modal-receipt-payment.component';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit, OnDestroy {

  @Input() username: string;
  @Input() userId: number;
  @Input() name: string;
  @Input() avatarUrl: string;

  // this will be only used for mock purposes
  userCardsMock: Card[];

  private readonly destroy$ = new Subject();

  constructor(private transactionService: TransactionService, private dialog: MatDialog) { }

  ngOnInit() {

    this.userCardsMock = [
      {
        card_number: '1111111111111111',
        cvv: 789,
        expiry_date: '01/18',
      },
      {
        card_number: '4111111111111234',
        cvv: 123,
        expiry_date: '01/20',
      },
      {
        card_number: '2222222222222222',
        cvv: 442,
        expiry_date: '05/20',
      }
    ];
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalPaymentComponent,{
      disableClose: true,
      data: { name: this.name, cards: this.userCardsMock }
    });

    dialogRef.afterClosed().pipe(
      takeUntil(this.destroy$),
      tap(formValue => {
        if (formValue.sentTransaction) {
          const transaction = this.transformTransaction(formValue.form);
          this.sendTransaction(transaction);
        }
      })
    ).subscribe();
  }

  transformTransaction(formValue: any): Transaction {
    const { card, value } = formValue.value;
    const transactionObj: Transaction = {
      card_number: card.card_number,
      cvv: card.cvv,
      expiry_date: card.expiry_date,
      destination_user_id: this.userId,
      value
    };

    console.log(transactionObj);
    return transactionObj;
  }

  sendTransaction(transaction: Transaction): void {
    this.transactionService.sendTransaction(transaction).pipe(
      takeUntil(this.destroy$),
      tap(response => {

        // Mock Example of Error API
        if (transaction.cvv.toString() === '123') {
          response.success = false;
        }

        this.dialog.open(ModalReceiptPaymentComponent, {
          data: {sentTransaction: response.success}
        });
      })
    ).subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
