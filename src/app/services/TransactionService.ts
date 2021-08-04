import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Transaction } from "../models/Transaction";

@Injectable({
    providedIn: 'root'
})
export class TransactionService {

    private BASE_URL_TRANSACTION_ENPOINT = 'https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989';

    constructor(private http: HttpClient) {}

    sendTransaction(transactionPayload: Transaction): Observable<any> {
        return this.http.post<any>(this.BASE_URL_TRANSACTION_ENPOINT, transactionPayload);
    }
}