import { useState } from "react";
import type { PaymentFormData, PaymentErrors, PaymentField } from "../types/payment"

export const usePaymentForm = () => {
  const [formData, setFormData] = useState<PaymentFormData>({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
  });
  const [errors, setErrors] = useState<PaymentErrors>({});

  const updateField = (
    name: PaymentField,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear field error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  const validateField = (
    name: PaymentField,
    value: string) => {
    switch (name) {
      case "cardNumber":
        const cleanCardNumber = value.replace(/\s/g, "");
        if (!cleanCardNumber.match(/^\d{13,19}$/)) {
          return "Numéro de carte invalide";
        }
        break;

      case "expiryDate":
        if (!value.match(/^\d{2}\/\d{2}$/)) {
          return "Format de date invalide (MM/AA)";
        }
        // Validation de la date d'expiration
        const [month, year] = value.split("/");
        const currentDate = new Date();
        const expiryDate = new Date(2000 + parseInt(year), parseInt(month) - 1);
        if (expiryDate < currentDate) {
          return "Carte expirée";
        }
        break;

      case "cvv":
        if (!value.match(/^\d{3,4}$/)) {
          return "Code de sécurité invalide";
        }
        break;

      case "cardholderName":
        if (!value.trim()) {
          return "Nom du titulaire requis";
        }
        if (value.trim().length < 2) {
          return "Nom trop court";
        }
        break;

      default:
        return null;
    }
    return null;
  };

  const validateForm = (): boolean => {
    const newErrors: PaymentErrors = {};
    let isValid = true;

    (Object.keys(formData) as PaymentField[]).forEach((fieldName) => {
      const error = validateField(fieldName, formData[fieldName]);
      if (error) {
        newErrors[fieldName] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(" ");
    } else {
      return v;
    }
  };

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    if (v.length >= 2) {
      return v.substring(0, 2) + "/" + v.substring(2, 4);
    }
    return v;
  };

  const resetForm = (): void => {
    setFormData({
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      cardholderName: "",
    });
    setErrors({});
  };

  return {
    formData,
    errors,
    updateField,
    validateField,
    validateForm,
    formatCardNumber,
    formatExpiryDate,
    resetForm,
  };
};
