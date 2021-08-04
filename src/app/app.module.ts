import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { ModalPaymentComponent } from './components/modal-payment/modal-payment.component';
import { ModalReceiptPaymentComponent } from './components/modal-receipt-payment/modal-receipt-payment.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalPaymentComponent,
    ModalReceiptPaymentComponent,
    UserInfoComponent,
    HomeComponent,
    HeaderComponent,
    ButtonComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CurrencyMaskModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule
  ],
  entryComponents: [ModalPaymentComponent, ModalReceiptPaymentComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
