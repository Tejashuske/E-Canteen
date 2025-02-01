package com.backend.model;

//import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//import java.util.ArrayList;
//import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    private String userName;
    private String password;
    private USER_ROLE role = USER_ROLE.ROLE_STUDENT;

	/*
	 * @JsonIgnore
	 * 
	 * @OneToMany(cascade = CascadeType.ALL,mappedBy = "customer") private
	 * List<ItemsOrder> itemsOrders = new ArrayList<>();
	 */

	public String getFullName() {
		return userName;
	}

	public void setFullName(String userName) {
		this.userName = userName;
	}


	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public USER_ROLE getRole() {
		return role;
	}

	public void setRole(USER_ROLE role) {
		this.role = role;
	}

	/*
	 * public List<ItemsOrder> getItemsOrders() { return itemsOrders; }
	 * 
	 * public void setItemsOrders(List<ItemsOrder> itemsOrders) { this.itemsOrders =
	 * itemsOrders; }
	 */
    
    
}
