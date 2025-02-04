package com.server.configuration;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@EnableJpaRepositories(basePackages = "com.server.repository")
@EntityScan(basePackages = "com.server.entity")
public class JpaConfig {
    // Your configuration class
}
