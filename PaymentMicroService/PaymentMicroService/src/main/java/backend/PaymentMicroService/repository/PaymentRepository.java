package backend.PaymentMicroService.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import backend.PaymentMicroService.entity.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Long> {

}