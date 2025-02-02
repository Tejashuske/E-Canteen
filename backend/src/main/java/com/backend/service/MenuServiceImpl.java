package com.backend.service;

import com.backend.model.Menu;
import com.backend.model.MenuCategory;
import com.backend.repository.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MenuServiceImpl implements MenuService {

    @Autowired
    private MenuRepository menuRepository;

    @Override
    public Menu addMenuItem(Menu menu) {
        return menuRepository.save(menu);
    }

    @Override
    public Menu updateMenuItem(Long id, Menu menuDetails) {
        Optional<Menu> optionalMenu = menuRepository.findById(id);
        if (optionalMenu.isPresent()) {
            Menu menu = optionalMenu.get();
            menu.setName(menuDetails.getName());
            menu.setDescription(menuDetails.getDescription());
            menu.setPrice(menuDetails.getPrice());
            menu.setCategory(menuDetails.getCategory());
            menu.setAvailable(menuDetails.isAvailable());
            return menuRepository.save(menu);
        }
        return null;
    }

    @Override
    public void deleteMenuItem(Long id) {
        menuRepository.deleteById(id);
    }

    @Override
    public List<Menu> getAllMenuItems() {
        return menuRepository.findAll();
    }

    @Override
    public Menu getMenuItemById(Long id) {
        return menuRepository.findById(id).orElse(null);
    }

    @Override
    public List<Menu> getMenuItemsByCategory(MenuCategory category) {
        return menuRepository.findByCategory(category);
    }

}
