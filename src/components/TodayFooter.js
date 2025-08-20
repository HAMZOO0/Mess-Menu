import React from "react";

function TodayFooter() {
   return (
      <>
         <footer className="fixed-bottom page-footer font-small bg-dark text-light">
            <div
               className="footer-copyright py-2 px-3"
               style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  fontSize: "0.85rem",
                  background: "linear-gradient(90deg, #2c3e50, #34495e)",
                  borderTop: "2px solid #3498db",
               }}
            >
               <div className="d-flex justify-content-between align-items-center flex-wrap">
                  <span className="me-3">
                     © 2025 Hamza Sajid | Forked from{" "}
                     <a
                        id="footerLink"
                        rel="noreferrer"
                        target="_blank"
                        href="https://github.com/fatehmehmood123/Mess-Menu"
                        className="text-info text-decoration-none"
                        style={{ fontWeight: "500" }}
                     >
                        fatehmehmood123/Mess-Menu
                     </a>
                  </span>
                  <div className="d-flex gap-3">
                     <a
                        id="footerLink"
                        rel="noreferrer"
                        target="_blank"
                        href="https://github.com/HAMZOO0/Mess-Menu"
                        className="text-warning text-decoration-none"
                        style={{ fontWeight: "500" }}
                     >
                        🔗 Github
                     </a>
                     <a
                        id="footerLink"
                        rel="noreferrer"
                        target="_blank"
                        href="mailto:hamzakhan174722@gmail.com"
                        className="text-success text-decoration-none"
                        style={{ fontWeight: "500" }}
                     >
                        ✉️ Contact
                     </a>
                  </div>
               </div>
            </div>
         </footer>
      </>
   );
}

export default TodayFooter;
