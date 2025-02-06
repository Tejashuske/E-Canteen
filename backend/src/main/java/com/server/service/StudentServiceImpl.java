package com.server.service;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.server.entity.Cart;
import com.server.entity.Menu;

import jakarta.servlet.http.HttpSession;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private SessionFactory hibernateFactory;

    @Autowired
    private HttpSession session; // Inject HttpSession

    @Override
    public boolean addToCartList(Long menuId) {
        try (Session hibernateSession = hibernateFactory.openSession()) {
            Menu menu = hibernateSession.get(Menu.class, menuId);
            if (menu == null) {
                return false;
            }

            // 🔹 Get Cart from session instead of DB
            Cart cart = (Cart) session.getAttribute("cart");
            if (cart == null) {
                return false;
            }

            hibernateSession.beginTransaction();
            List<Menu> menuList = cart.getMenuList();
            menuList.add(menu);
            hibernateSession.merge(cart); // Persist changes
            hibernateSession.getTransaction().commit();
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean removeFromCartList(Long menuId) {
        try (Session hibernateSession = hibernateFactory.openSession()) {
            Menu menu = hibernateSession.get(Menu.class, menuId);
            if (menu == null) {
                return false;
            }

            // 🔹 Get Cart from session
            Cart cart = (Cart) session.getAttribute("cart");
            if (cart == null) {
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
