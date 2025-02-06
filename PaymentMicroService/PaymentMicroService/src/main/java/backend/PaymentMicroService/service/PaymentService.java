package backend.PaymentMicroService.service;

import backend.PaymentMicroService.dto.PaymentDTO;
import backend.PaymentMicroService.entity.Payment;

public interface PaymentService {
	Payment processPayment(PaymentDTO paymentDTO);
}