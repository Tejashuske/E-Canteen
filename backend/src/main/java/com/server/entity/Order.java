package com.server.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "orders") // ✅ Renamed table to avoid conflict
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderId;

    @Column(name = "student_name") // ✅ Corrected column annotation
    private String studentName;

    private Long total;

    // Getters and Setters
    public Long getOrderId() { return orderId; }
    public void setOrderId(Long orderId) { this.orderId = orderId; }

    public String getStudentName() { return studentName; }
    public void setStudentName(String studentName) { this.studentName = studentName; }

    public Long getTotal() { return total; }
    public void setTotal(Long total) { this.total = total; }


}
