import React from "react";
import Radium, { StyleRoot } from "radium";
function Footer() {
   const style = {
      // Adding media query..
      "@media (max-width: 500px)": {
         display: "none",
      },
   };
   return (
      <>
         <StyleRoot>
            <footer className="fixed-bottom page-footer font-small">
               <div style={style} className="footer-copyright text-center py-3">
                  © 2025 Copyright: Hamza Sajid
                  <a id="footerLink" rel="noreferrer" target="_blank" href="https://github.com/HAMZOO0/Mess-Menu">
                     {" "}
                     Github
                  </a>
                  <a id="footerLink" rel="noreferrer" target="_blank" href="mailto:fatehmehmood123@gmail.com">
                     {" "}
                     Contact Us
                  </a>
               </div>
            </footer>
         </StyleRoot>
      </>
   );
}
export default Radium(Footer);
