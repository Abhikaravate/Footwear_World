import React from "react";

const Footer = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const styles = {
    footPanel1: {
      backgroundColor: "#333",
      color: "white",
      textAlign: "center",
      padding: "10px",
      cursor: "pointer",
    },
    footPanel2: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      backgroundColor: "#f4f4f4",
      padding: "30px",
    },
    footerColumn: {
      display: "flex",
      flexDirection: "column",
      margin: "10px",
      minWidth: "150px",
    },
    footerHeading: {
      fontWeight: "bold",
      marginBottom: "10px",
    },
    footerLink: {
      textDecoration: "none",
      color: "#555",
      marginBottom: "6px",
    },
    footerLinkHover: {
      color: "#000",
    },
  };

  // Optional: Can add hover effect using CSS-in-JS libraries like styled-components or Tailwind

  const footerLinks = {
    Support: [
      { text: "Contact Us", href: "https://www.puma.com/Contact" },
      { text: "Shoe Care", href: "https://www.puma.com/ShoeCare" },
      { text: "News", href: "https://www.puma.com/Shoes" },
      { text: "FAQs", href: "#" },
      { text: "Promotions & Sale", href: "#" },
      { text: "My Account", href: "#" },
      { text: "Track Order", href: "#" },
      { text: "Exchange & Return Policy", href: "#" },
    ],
    Legal: [
      { text: "Privacy Policy", href: "#" },
      { text: "Tech Glossary", href: "#" },
      { text: "Terms & Conditions", href: "#" },
      { text: "Initiate Return / Exchange", href: "#" },
    ],
    Explore: [
      { text: "Running Shoes", href: "#" },
      { text: "Sitemap", href: "#" },
      { text: "Cookie Settings", href: "#" },
    ],
    "Follow Us": [
      { text: "Facebook", href: "https://www.facebook.com/PUMA" },
      { text: "Twitter", href: "https://twitter.com/PUMA" },
      { text: "Instagram", href: "https://www.instagram.com/puma/" },
    ],
    "Customer Service": [
      { text: "Help Center", href: "https://www.puma.com/help" },
      { text: "Returns & Exchanges", href: "https://www.puma.com/returns" },
    ],
  };

  return (
    <footer>
      <div style={styles.footPanel1} onClick={handleBackToTop}>
        Back to Top
      </div>

      <div style={styles.footPanel2}>
        {Object.entries(footerLinks).map(([heading, links], idx) => (
          <div style={styles.footerColumn} key={idx}>
            <p style={styles.footerHeading}>{heading}</p>
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                style={styles.footerLink}
              >
                {link.text}
              </a>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
