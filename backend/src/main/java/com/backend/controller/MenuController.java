package com.backend.controller;

import com.backend.model.Menu;
import com.backend.model.MenuCategory;
import com.backend.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/menus")
@CrossOrigin(origins = "http://localhost:3000")
public class MenuController {

    @Autowired
    private MenuService menuService;

    @PostMapping
    public ResponseEntity<Menu> addMenuItem(@RequestBody Menu menu) {
        Menu createdMenu = menuService.addMenuItem(menu);
        return ResponseEntity.ok(createdMenu);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Menu> updateMenuItem(@PathVariable Long id, @RequestBody Menu menu) {
        Menu updatedMenu = menuService.updateMenuItem(id, menu);
        if (updatedMenu != null) {
            return ResponseEntity.ok(updatedMenu);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMenuItem(@PathVariable Long id) {
        menuService.deleteMenuItem(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping
    public ResponseEntity<List<Menu>> getAllMenuItems() {
        List<Menu> menuItems = menuService.getAllMenuItems();
        return ResponseEntity.ok(menuItems);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Menu> getMenuItemById(@PathVariable Long id) {
        Menu menu = menuService.getMenuItemById(id);
        if (menu != null) {
            return ResponseEntity.ok(menu);
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/category/{category}")
    public ResponseEntity<List<Menu>> getMenuItemsByCategory(@PathVariable MenuCategory category) {
        List<Menu> menuItems = menuService.getMenuItemsByCategory(category);
        return ResponseEntity.ok(menuItems);
    }
}
