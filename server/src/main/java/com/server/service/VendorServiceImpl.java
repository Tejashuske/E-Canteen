package com.server.service;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.server.entity.Menu;
import com.server.repository.MenuRepository;

@Service
public class VendorServiceImpl implements VendorService{

	@Autowired
	SessionFactory hibernateFactory;
	
	@Autowired
	MenuRepository repository;
	
	@Override
	public boolean addMenu(Menu menu) {
	    try (Session hibernateSession = hibernateFactory.openSession()) {
	        hibernateSession.beginTransaction();

	        hibernateSession.persist(menu);

	        hibernateSession.getTransaction().commit();
	        return true;
	    } catch (Exception ex) {
	        ex.printStackTrace();
	        return false;
	    }
	}

	@Override
	public boolean removeMenu(Long id) {
		try (Session hibernateSession = hibernateFactory.openSession()) {
			Menu menu = hibernateSession.get(Menu.class, id);
            hibernateSession.beginTransaction();
            hibernateSession.remove(menu);
            hibernateSession.getTransaction().commit();
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
	}

	@Override
	public boolean updateMenu(Long id, Menu menu) {
		try (Session hibernateSession = hibernateFactory.openSession()) {
	        Menu menuEntity = hibernateSession.get(Menu.class, id);

	        if (menuEntity == null) {
	            return false;
	        }

	        hibernateSession.beginTransaction();
	        
	        menuEntity.setName(menu.getName());
	        menuEntity.setDescription(menu.getDescription());
	        menuEntity.setPrice(menu.getPrice());
	        
	        hibernateSession.merge(menuEntity);
	        hibernateSession.getTransaction().commit();
	        return true;
	    } catch (Exception e) {
	        e.printStackTrace();
	        return false;
	    }
	}

	@Override
	public Menu getMenu(Long id) {
		try (Session hibernateSession = hibernateFactory.openSession()) {
	    	Menu menu = hibernateSession.get(Menu.class, id);
	        return menu;
	    } catch (Exception e) {
	        e.printStackTrace();
	        return null; 
	    }
	}

	@Override
	public List<Menu> getAllMenu() {
		return repository.findAll();
	}

	
}
