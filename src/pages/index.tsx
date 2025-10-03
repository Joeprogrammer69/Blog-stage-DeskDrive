import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Navbar from "./components/navbarblog";
import posts from "@/posts.json";
import Link from "next/link";

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
                <Card.Title className="fw-semibold text-secondary">Over mijn stage</Card.Title>
                <Card.Text>
                  Mijn stage is bij Deskdrive, het is eigenlijk werkplekleren dus ik moet hier vooral leren en werken zoals de werknemers die er werken, allesinds dat is het doel ervan
                  . Dit doe ik bij Deskdrive en het loopt van september tot januari. Deze website moet vooral tonen hoe ik ben uitgebloiet van een student naar een werknemer, wat ik allemaal heb geleerd,
                  wat beter kan en wat ik allemaal heb gedaan.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <h3 className="mb-3 text-dark">Laatste Blogpost</h3>
            {latestPosts.map((post) => (
              <Link key={post.id} href={`/blogspage/${post.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                <Card className="mb-4 shadow border-0" style={{ cursor: "pointer" }}>
                 <Card.Body>
                   <Card.Title className="fw-bold">{post.title}</Card.Title>
                     <Card.Subtitle className="mb-2 text-muted">
                       {formatDate(post.date)} – {post.category}
                     </Card.Subtitle>
                     <Card.Text>{post.text}</Card.Text>
                 </Card.Body>
               </Card>
           </Link>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
