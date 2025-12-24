import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const AboutMePage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Container className="pt-5">
        {/* HEADER */}
        <Row className="text-center mb-5">
          <Col>
            <h2 className="fw-bold text-primary">Over mezelf</h2>

            <img
              src="/steven.jpg"
              alt="Steven"
              onClick={() => setOpen(!open)}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
              style={{
                width: "200px",
                maxWidth: "80%",
                borderRadius: "50%",
                transition: "transform 0.3s ease",
                cursor: "pointer",
              }}
            />

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
                    <p>
                      <strong>Naam:</strong> Steven Van Cleemput
                    </p>
                    <p>
                      <strong>Leeftijd:</strong> 23
                    </p>
                    <p>
                      <strong>Richting:</strong> Graduaat programmeren aan AP
                      hogeschool
                    </p>
                    <p>
                      <strong>Hobby's:</strong> Gamen, music nerd en noob producer,
                      ongedisciplineerde gym bezoeker
                    </p>
                    <p>
                      <strong>Voorbije werkervaring:</strong> Vrijwilligerswerk bij
                      JNM (paar keer) en zomer 2025 shiften bij Action
                    </p>

                    <div className="mt-2">
                      <a
                        href="https://www.linkedin.com/in/steven-van-cleemput-50a9a32a0/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        LinkedIn profiel
                      </a>
                    </div>

                    <p className="mt-2">
                      <strong>Gsmnummer:</strong> 0487 14 85 50
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <hr className="w-25 mx-auto" />
          </Col>
        </Row>

        {/* CARDS */}
        <Row className="mb-5 justify-content-center">
          {/* Eerste kaart */}
          <Col md={5} className="mb-4">
            <Card className="shadow-sm border-0 text-center h-100">
              <Card.Body>
                <Card.Title className="fw-semibold text-secondary">
                  Over <a href="https://deskdrive.com/">Deskdrive</a>
                </Card.Title>

                <Card.Text>
                  Deskdrive is een bedrijf met expertise in CRM en ERP. Ze hebben
                  een platform waarmee ze alle noden op één plaats bijhouden
                  zoals klantenbeheer en facturaties. Het bedrijf is gelegen in
                  Zandhoven en heeft een gezellig team van ongeveer 6-7 personen.
                </Card.Text>
              </Card.Body>

              <div className="d-flex justify-content-center pb-3">
                <img
                  src="/Layer_1.jpg"
                  alt="Deskdrive logo"
                  style={{ maxWidth: "50%", height: "auto" }}
                />
              </div>
            </Card>
          </Col>

          {/* Tweede kaart */}
       <Col md={5} className="mb-4">
  <Card className="shadow-sm border-0 text-center h-100">
    <Card.Body>
      <Card.Title className="fw-semibold text-secondary">
        Mijn rol en bedoeling stage
      </Card.Title>

      {/* Plain text */}
      <Card.Text className="text-start">
        Vanaf september 2025 tot januari 2026 ben ik er vooral om bij te leren en
        ervaring op te doen binnen een IT-bedrijf. Ik kreeg taken met verschillende
        moeilijkheidsgraden en werkte mee aan kleinere projecten waarbij ook klanten
        betrokken waren.
      </Card.Text>

      {/* List outside Card.Text */}
      <div className="text-start ms-3">
        <ul>
          <li>Selenium testen schrijven in Java</li>
          <li>Templates maken (o.a. PDF's en e-mails)</li>
          <li>Drivers en handlers schrijven in Java</li>
          <li>Klanten helpen met technische problemen</li>
        </ul>
      </div>
      </Card.Body>
  </Card>
    </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutMePage;
