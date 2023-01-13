package com.example.demo.repository;

import com.example.demo.model.Appointments;
import com.example.demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AppointmentsRepository extends JpaRepository<Appointments, Long> {
    public List<Appointments> findByUser_Name(final String Name);

}