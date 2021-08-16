import { IconButton } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

export default function ToTopArrow() {
  useEffect(() => {
    //Get the button:
    let mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }

    // When the user clicks on the button, scroll to the top of the document
  });
  function topFunction() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <IconButton
      onClick={() => topFunction()}
      id="myBtn"
      title="Go to top"
      icon={<FaArrowAltCircleUp />}
      display="none"
      position="fixed"
      bottom="20px"
      right="30px"
      zIndex="99"
      border="none"
      outline="none"
      backgroundColor="transparent"
      color="white"
      cursor="pointer"
      borderRadius="10px"
      fontSize="40px"
      _hover={{ color: "red" }}
    >
      Top
    </IconButton>
  );
}
