package com.teletecnics.invoices_back.model;

import java.math.BigDecimal;
import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "invoices")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

public class Invoice {

    @Id
    private String id;
    @Column(nullable = false)
    private LocalDate fecha;
    @Column(name = "cliente", nullable = false)
    private String cliente;
    @Column(name = "price", precision = 12, scale = 2, nullable = false)
    private BigDecimal price;
    @Column(name = "iva", precision = 5, scale = 2)
    private BigDecimal iva;
    @Column(name = "total", precision = 12, scale = 2, nullable = false)
    private BigDecimal total;
    @Column(name = "cobrada")
    private boolean cobrada;

}
