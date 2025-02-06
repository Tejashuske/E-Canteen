package com.server.service;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.server.entity.Cart;
import com.server.entity.Menu;
import com.server.entity.User;

@Service
public class StudentServiceImpl implements StudentService{
	
	@Autowired
	SessionFactory hibernateFactory;

	@Override
	public boolean login(User user) {
		return false;
	}
	
	@Override
	public boolean addToCartList(Long id) {
		try (Session hibernateSession = hibernateFactory.openSession()) {
			Menu menu = hibernateSession.get(Menu.class, id);
			// This part is remainig want to change the id of the cart. Getting it from the session variable
			Cart cart = hibernateSession.get(Cart.class, id);
	        if (menu == null) {
	            return false;
	        }

	        hibernateSession.beginTransaction();
	        
	        List<Menu> menuList = cart.getMenuList();
	        menuList.add(menu);
	        
	        hibernateSession.merge(cart);
	        hibernateSession.getTransaction().commit();
	        return true;
	    } catch (Exception e) {
	        e.printStackTrace();
	        return false;
	    }
	}

	@Override
	public boolean removeFromCartList(Long id) {
		try (Session hibernateSession = hibernateFactory.openSession()) {
			Menu menu = hibernateSession.get(Menu.class, id);
			// This part is remainig want to change the id of the cart. Getting it from the session variable
			Cart cart = hibernateSession.get(Cart.class, id);
	        if (menu == null) {
	            return false;
	        }

	        hibernateSession.beginTransaction();
	        
	        List<Menu> menuList = cart.getMenuList();
	        menuList.remove(menu);
	        
	        hibernateSession.merge(cart);
	        hibernateSession.getTransaction().commit();
	        return true;
	    } catch (Exception e) {
	        e.printStackTrace();
	        return false;
	    }
	}

	

}
