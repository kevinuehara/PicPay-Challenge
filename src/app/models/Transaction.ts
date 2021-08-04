export interface Transaction {
    card_number: string;
    cvv: string;
    expiry_date: string;
    destination_user_id: number;
    value: number;
}