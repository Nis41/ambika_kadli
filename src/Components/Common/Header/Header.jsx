import React, { Component } from "react";
import Logo from "./Logo/Logo";
import DesktopNavigation from "./Navigation/DesktopNavigation/DesktopNavigation";
import NavButton from "./Navigation/MobileNavigation/NavButton";
import MobileNavLinks from "./Navigation/MobileNavigation/MobileNavLinks";
import ProductsDropdown from "./Navigation/DesktopNavigation/ProductsDropdown";
import disableScroll from "disable-scroll";

import "./Header.css";

class Header extends Component {
  state = {
    isSliderOpen: false,
    scrolled: false,
    isCollapseOpen: false,
    productsModalOpen: false,
  };

  sliderOpener = () => {
    this.setState({ isSliderOpen: true });
    disableScroll.on();
  };
  sliderCloser = () => {
    this.setState({ isSliderOpen: false });
    disableScroll.off();
  };

  collapseToggler = () => {
    this.setState({ isCollapseOpen: !this.state.isCollapseOpen });
  };

  productsDropdownOpener = () => {
    this.setState({ productsModalOpen: true });
  };

  productsDropdownCloser = () => {
    this.setState({ productsModalOpen: false });
  };

  render() {
    return (
      <div className={this.state.scrolled ? `scrolledHeader` : `header`}>
        <NavButton sliderOpener={this.sliderOpener} />
        <Logo />
        <DesktopNavigation
          productsDropdownOpener={this.productsDropdownOpener}
          productsDropdownCloser={this.productsDropdownCloser}
          productsModalOpen={this.state.productsModalOpen}
        />
        <ProductsDropdown
          productsModalOpen={this.state.productsModalOpen}
          productsDropdownOpener={this.productsDropdownOpener}
          productsDropdownCloser={this.productsDropdownCloser}
          categories={this.props.categories}
          movingToProductsFromNav={this.props.movingToProductsFromNav}
        />
        <MobileNavLinks
          isSliderOpen={this.state.isSliderOpen}
          sliderCloser={this.sliderCloser}
          isCollapseOpen={this.state.isCollapseOpen}
          collapseToggler={this.collapseToggler}
          categories={this.props.categories}
          movingToProductsFromNav={this.props.movingToProductsFromNav}
        />
      </div>
    );
  }
}

export default Header;
