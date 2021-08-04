import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import {
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MAT_DIALOG_DATA,
} from "@angular/material";
import { By } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CurrencyMaskModule } from "ng2-currency-mask";
import { ButtonComponent } from "../button/button.component";

import { ModalPaymentComponent } from "./modal-payment.component";

describe("ModalPaymentComponent", () => {
  let component: ModalPaymentComponent;
  let fixture: ComponentFixture<ModalPaymentComponent>;

  const model = {
    name: 'Kevin Uehara',
    cards: [
      {
        card_number: '1111111111111111',
        cvv: 789,
        expiry_date: '01/18',
      }
    ]
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalPaymentComponent, ButtonComponent],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: model
        },
      ],
      imports: [
        BrowserAnimationsModule,
        MatDialogModule,
        MatInputModule,
        MatSelectModule,
        FormsModule,
        CurrencyMaskModule,
        ReactiveFormsModule,
        MatIconModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create Modal Payment Component", () => {
    expect(component).toBeTruthy();
  });

  it("should validate name Modal", () => {
    const title = fixture.debugElement.queryAll(By.css('.payment-user-label'));
    expect(title[0].nativeElement.textContent.trim()).toEqual('Pagamento para Kevin Uehara');
  })
});
