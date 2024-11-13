package com.spring_kafka.service;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service

public class UserConsumerService
{
	
@KafkaListener(topics={"my-topic"})

public void consumeUserdata(String name ,int age) 
{
	 System.out.println("Received message: " + name+"  "+ age);
}
}
