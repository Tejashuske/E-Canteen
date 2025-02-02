package com.backend.service;

import com.backend.model.Menu;
import com.backend.model.MenuCategory;

import java.util.List;

public interface MenuService {

    Menu addMenuItem(Menu menu);

    Menu updateMenuItem(Long id, Menu menu);

    void deleteMenuItem(Long id);

    List<Menu> getAllMenuItems();

    Menu getMenuItemById(Long id);

	List<Menu> getMenuItemsByCategory(MenuCategory category);
}
