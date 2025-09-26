import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Navbar from "../components/navbarblog";
import posts from "@/posts.json";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";



const AboutMePage = () => {
  
 const [open, setOpen] = useState(false);
  return (
    <div style={{ backgroundColor: "#f4f6f9", minHeight: "100vh" }}>
      

       <Container className="pt-5">
      <Row className="text-center mb-5">
        <Col>
        <h2 className="fw-bold text-primary">Over mezelf</h2>
          <img
            src="/steven.jpg"
           style={{
                 width: "200px",
                 borderRadius: "50%",
                 transition: "transform 0.3s ease",
                 cursor: "pointer"
                 }}
            className="zoom-img"
            onClick={() => setOpen(!open)}
          >
           
          </img>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-3"
              >
                <div className="text-start mx-auto d-inline-block bg-light p-4 rounded-3 shadow-sm">
                  <p><strong>Naam:</strong> Steven Van Cleemput</p>
                  <p><strong>Leeftijd:</strong> 23</p>
                  <p><strong>Richting:</strong> Graduaat programmeren aan AP hogeschool</p>
                  <p>
                    <strong>Hobby's:</strong> Gamen, music nerd en noob producer, 
                    ongedisciplineerde gym bezoeker
                  </p>
                  <p><strong>Voorbije werkervaring</strong>Vrijwilligerswerk bij JNM peer keer gedaan en in de zomer van 2025 shiften ingevuld bij de Acion</p>
                  <p>
                    <a
                      href="https://www.linkedin.com/in/steven-van-cleemput-50a9a32a0/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn profiel
                    </a>
                    <p><strong>Gsmnummer:</strong>0487148550</p>
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <hr className="w-25 mx-auto" />
        </Col>
      </Row>
   

       <Row className="mb-5">
  <Col md={{ span: 8, offset: 2 }}>
    <Card className="shadow-sm border-0 text-center">
      <Card.Body>
        <Card.Title className="fw-semibold text-secondary">Over Deskdrive</Card.Title>
        <Card.Text>
          Deskdrive is een bedrijf met expertise in CRM en ERP, zo hebben ze
          een platform waarmee ze alle noden op één plaats bijhouden zoals
          klantenbeheer en facturaties. Het is gelegen in Zandhoven en heeft een
          gezellig team van net onder 10 man.
          <br /><br />
          Hier ben ik een stagiar van september 2025 tot januari 2026. Mijn rol is de klantenwebpagina bij te vullen met de nodige info
          en om bij te leren terwijl ik ook iets bijvoeg door met klanten te werken.
        </Card.Text>
      </Card.Body>
      <div className="d-flex justify-content-center pb-3">
         <img src="/Layer_1.jpg" style={{ maxWidth: "50%", height: "auto" }} />
      </div>
    </Card>
  </Col>
      </Row>


        
       </Container>
    </div>
  );
};

export default AboutMePage;
