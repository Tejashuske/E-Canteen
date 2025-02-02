package com.backend.repository;

import com.backend.model.Menu;
import com.backend.model.MenuCategory;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MenuRepository extends JpaRepository<Menu, Long> {

    List<Menu> findByCategory(MenuCategory category);
}
