import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatIconModule, MAT_DIALOG_DATA } from '@angular/material';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ModalReceiptPaymentComponent } from './modal-receipt-payment.component';

describe('ModalReceiptPaymentComponent', () => {
  let component: ModalReceiptPaymentComponent;
  let fixture: ComponentFixture<ModalReceiptPaymentComponent>;

  const model = {
    sentTransaction: true
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalReceiptPaymentComponent],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: model
        },
      ],
      imports: [
        BrowserAnimationsModule,
        MatDialogModule,
        MatIconModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalReceiptPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Modal Receipt Payment Component', () => {
    expect(component).toBeTruthy();
  });

  it('should success pay user', () => {
    const message = fixture.debugElement.queryAll(By.css('.content span'));
    expect(message[0].nativeElement.textContent.trim()).toEqual('O pagamento foi concluido com sucesso.');
  });
});
