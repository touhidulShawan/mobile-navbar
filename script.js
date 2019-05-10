//Mobile Search box content
const show_mobile_search = () => {
  const mobile_search_var = document.getElementById("show_mobile_search");

  if (mobile_search_var.style.display === "block") {
    mobile_search_var.style.display = "none";
    mobile_search_var.style.marginTop = "-999999999px";
    document.getElementById("mobile_search_icon").className =
      "lnr lnr-magnifier";
  } else {
    mobile_search_var.style.display = "block";
    mobile_search_var.style.marginTop = "1px";
    document.getElementById("mobile_search_icon").className = "lnr lnr-cross";
  }
};

// Mobile Profile Content

const show_mobile_profile = () => {
  const mobile_profile_var = document.getElementById("show_mobile_profile");

  if (mobile_profile_var.style.display === "block") {
    mobile_profile_var.style.display = "none";
    mobile_profile_var.style.marginRight = "-999999999px";
    document.getElementById("mobile_profile_icon").className = "lnr lnr-user";
  } else {
    mobile_profile_var.style.display = "block";
    mobile_profile_var.style.marginRight = "0px";
    document.getElementById("mobile_profile_icon").className = "lnr lnr-cross";
  }
};

// Mobile Cart Content

const show_mobile_cart = () => {
  const mobile_cart_var = document.getElementById("show_mobile_cart");

  if (mobile_cart_var.style.display === "block") {
    mobile_cart_var.style.display = "none";
    mobile_cart_var.style.marginRight = "-999999999px";
    document.getElementById("mobile_cart_icon").className = "lnr lnr-cart";
  } else {
    mobile_cart_var.style.display = "block";
    mobile_cart_var.style.marginRight = "0px";
    document.getElementById("mobile_cart_icon").className = "lnr lnr-cross";
  }
};

// Show hamburger menu

const show_hamburger_menu = () => {
  const hamburger_menu_var = document.getElementById("show_hamburger_menu");

  if (hamburger_menu_var.style.display === "block") {
    hamburger_menu_var.style.display = "none";
    hamburger_menu_var.style.marginLeft = "-9999999px";
    document.getElementById("hamburger_menu_icon").className = "lnr lnr-menu";
  } else {
    hamburger_menu_var.style.display = "block";
    hamburger_menu_var.style.marginLeft = "0px";
    document.getElementById("hamburger_menu_icon").className = "lnr lnr-cross";
  }
};
