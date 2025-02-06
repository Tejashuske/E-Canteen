package backend.PaymentMicroService.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import backend.PaymentMicroService.dto.PaymentDTO;
import backend.PaymentMicroService.entity.Payment;
import backend.PaymentMicroService.service.PaymentStaticService;

@RestController
@RequestMapping("/payment")
public class PaymentController {

	@Autowired
	PaymentStaticService staticPay;
	
	/*
	 * @Autowired PaymentGatewayService gatewayPay;
	 */
	
	@PostMapping("/static")
	public ResponseEntity<Payment> saveStaticPayment(@RequestBody PaymentDTO paymentDTO) {
        Payment savedPayment = staticPay.processPayment(paymentDTO);
        return ResponseEntity.ok(savedPayment);
    }
	
	//@PostMapping("gateway")
}