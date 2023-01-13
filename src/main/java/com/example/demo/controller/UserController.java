package com.example.demo.controller;

import com.example.demo.model.Appointments;
import com.example.demo.model.User;
import com.example.demo.repository.AppointmentsRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AppointmentsRepository appointmentsRepository;

    @GetMapping("users")
    public List < User > getUsers() {
        return this.userRepository.findAll();
    }

    @GetMapping("appointments/{name}")
    public List <Appointments> getAppointments(@PathVariable String name) {
        return this.appointmentsRepository.findByUser_Name(name);
    }
}