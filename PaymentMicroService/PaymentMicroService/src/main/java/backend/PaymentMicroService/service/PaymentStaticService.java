package backend.PaymentMicroService.service;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import backend.PaymentMicroService.dto.PaymentDTO;
import backend.PaymentMicroService.entity.Payment;
import backend.PaymentMicroService.repository.PaymentRepository;

@Service("staticPaymentService")
public class PaymentStaticService implements PaymentService {

		@Autowired
		PaymentRepository paymentRepository;

		@Override
		public Payment processPayment(PaymentDTO paymentDTO) {
			
			Payment payment = new Payment();
	        payment.setOrderId(paymentDTO.getOrderId());
	        payment.setPaymentId(paymentDTO.getPaymentId() != null ? paymentDTO.getPaymentId() : UUID.randomUUID().toString());
	        payment.setStatus("paid"); // Static payments are always successful
	        payment.setAmount(paymentDTO.getAmount());
	        payment.setCurrency(paymentDTO.getCurrency());
	        payment.setPaymentMethod(paymentDTO.getPaymentMethod());

	        return paymentRepository.save(payment);
		}
	}