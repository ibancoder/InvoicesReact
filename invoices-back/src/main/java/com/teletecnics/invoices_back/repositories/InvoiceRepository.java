package com.teletecnics.invoices_back.repositories;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.teletecnics.invoices_back.model.Invoice;

public interface InvoiceRepository extends JpaRepository<Invoice, String> {

    List<Invoice> findByClienteContainingIgnoreCase(String cliente);

    List<Invoice> findByCobrada(boolean cobrada);

    List<Invoice> findByCliente(String cliente);

    List<Invoice> findByFechaBetween(LocalDate startDate, LocalDate endDate);

    List<Invoice> findByClienteContainingIgnoreCaseAndCobrada(String cliente, boolean cobrada);

    Page<Invoice> findByCobrada(boolean cobrada, Pageable pageable);

}
