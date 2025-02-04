import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Home.css";
const Home = () => {
  return (
    <>
    <div className="home-container row">
   
    <section class="page-heading">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1>Our Menus</h1>
                </div>
            </div>
        </div>
    </section>



    <section class="breakfast-menu">
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-md-offset-1">
                    <div class="breakfast-menu-content">
                        <div class="row">
                            <div class="col-md-5">
                                <div class="left-image">
                                    <img src="src/assets/img/breakfast_menu.jpg" alt="Breakfast"/>
                                </div>
                            </div>
                            <div class="col-md-7">
                                <h2>Breakfast Menu</h2>
                                <div id="owl-breakfast" class="owl-carousel owl-theme">
                                    <div class="item col-md-12">
                                        <div class="food-item">
                                            <img src="src/assets/img/breakfast_item.jpg" alt=""/>
                                            <div class="price">Rs35</div>
                                            <div class="text-content">
                                                <h4>item 1</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item col-md-12">
                                        <div class="food-item">
                                            <img src="src/assets/img/breakfast_item2.jpg" alt=""/>
                                            <div class="price">Rs72</div>
                                            <div class="text-content">
                                                <h4>item 2</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item col-md-12">
                                        <div class="food-item">
                                            <img src="src/assets/img/breakfast_item3.jpg" alt=""/>
                                            <div class="price">Rs115</div>
                                            <div class="text-content">
                                                <h4>item 3</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>



    <section class="lunch-menu">
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-md-offset-1">
                    <div class="lunch-menu-content">
                        <div class="row">
                            <div class="col-md-7">
                                <h2>Lunch Menu</h2>
                                <div id="owl-lunch" class="owl-carousel owl-theme">
                                    <div class="item col-md-12">
                                        <div class="food-item">
                                            <img src="src/assets/img/lunch_item.jpg" alt=""/>
                                            <div class="price">Rs6.50</div>
                                            <div class="text-content">
                                                <h4>item 1</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item col-md-12">
                                        <div class="food-item">
                                            <img src="src/assets/img/lunch_item2.jpg" alt=""/>
                                            <div class="price">Rs11.75</div>
                                            <div class="text-content">
                                                <h4>item 2</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item col-md-12">
                                        <div class="food-item">
                                            <img src="src/assets/img/lunch_item3.jpg" alt=""/>
                                            <div class="price">Rs.16.50</div>
                                            <div class="text-content">
                                                <h4>item 3</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-5">
                                <div class="left-image">
                                    <img src="src/assets/img/lunch_menu.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="dinner-menu">
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-md-offset-1">
                    <div class="dinner-menu-content">
                        <div class="row">
                            <div class="col-md-5">
                                <div class="left-image">
                                    <img src="src/assets/img/dinner_menu.jpg" alt=""/>
                                </div>
                            </div>
                            <div class="col-md-7">
                                <h2>Snacks Menu</h2>
                                <div id="owl-dinner" class="owl-carousel owl-theme">
                                    <div class="item col-md-12">
                                        <div class="food-item">
                                            <img src="src/assets/img/dinner_item.jpg" alt=""/>
                                            <div class="price">Rs8</div>
                                            <div class="text-content">
                                                <h4>item 1</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item col-md-12">
                                        <div class="food-item">
                                            <img src="src/assets/img/dinner_item2.jpg" alt=""/>
                                            <div class="price">Rs.12.50</div>
                                            <div class="text-content">
                                                <h4>item 2</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item col-md-12">
                                        <div class="food-item">
                                            <img src="src/assets/img/dinner_item3.jpg" alt=""/>
                                            <div class="price">16Rs</div>
                                            <div class="text-content">
                                                <h4>item 3</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
    </>
  )
}

export default Home;