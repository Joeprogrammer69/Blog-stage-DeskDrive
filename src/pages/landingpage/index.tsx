import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Navbar from "../components/navbarblog";
import posts from "@/posts.json";

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const LandingPage = () => {
  const latestPosts = posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 1);

  return (
    <div style={{ backgroundColor: "#f4f6f9", minHeight: "100vh" }}>
      

      <Container className="pt-5">
        <Row className="text-center mb-5">
          <Col>
            <h2 className="fw-bold text-primary">Blog Deskdrive</h2>
            <p className="text-muted fs-5">
              Op deze website kan je verschillende blogs vinden die ik bijgehouden heb
              tijdens mijn werkplekleren.
            </p>
            <hr className="w-25 mx-auto" />
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={{ span: 8, offset: 2 }}>
            <Card className="shadow-sm border-0">
              <Card.Body>
                <Card.Title className="fw-semibold text-secondary">Over Deskdrive</Card.Title>
                <Card.Text>
                  Deskdrive is een bedrijf met expertise in CRM en ERP, zo hebben ze
                  een platform waarmee ze alle noden op één plaats bijhouden zoals
                  klantenbeheer en facturaties. Het is gelegen in Zandhoven en heeft een
                  gezellig team van net onder 10 man.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <h3 className="mb-3 text-dark">Laatste Blogpost</h3>
            {latestPosts.map((post) => (
              <Card key={post.id} className="mb-4 shadow border-0 " onClick={() => window.location.href = '/blogs/' + post.id} style={{ cursor: 'pointer' }}>
                <Card.Body>
                  <Card.Title className="fw-bold">{post.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {formatDate(post.date)} – {post.category}
                  </Card.Subtitle>
                  <Card.Text>{post.text || post.text}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
