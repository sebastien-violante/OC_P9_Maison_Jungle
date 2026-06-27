// Type issu des champs du formulaire
export interface PaymentFormData {
    cardNumber: string;
    expiryDate: string;
    cvv: string;
    cardholderName: string;
}

// Ajout du montant de la commande
export interface PaymentData extends PaymentFormData {
    amount: number;
}

// Création d'un objet erreur avec les mêmes clés que le formulaire mais optionnelles
export type PaymentField = keyof PaymentFormData
export type PaymentErrors = Partial<Record<PaymentField, string>>

// Typage du résultat du paiement
export interface PaymentResult {
    transactionId: string;
    amount: number;
    status: 'success' | 'failed';
}

