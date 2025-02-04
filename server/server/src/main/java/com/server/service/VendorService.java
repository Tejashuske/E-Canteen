package com.server.service;

import java.util.List;

import com.server.entity.Menu;

public interface VendorService {

	boolean addMenu(Menu menu);
	boolean removeMenu(Long id);
	boolean updateMenu(Long id, Menu menu);
	Menu getMenu(Long id);
	List<Menu> getAllMenu();
}
