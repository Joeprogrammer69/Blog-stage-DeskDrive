import { useRouter } from "next/router";
import posts from "@/posts.json";
import { Container, Row, Col, Card } from "react-bootstrap";

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const BlogDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  
  const post = posts.find((p) => String(p.id) === String(id));

  if (!post) {
    return (
      <Container className="pt-5">
        <Row>
          <Col>
            <h2 className="text-danger">Blog niet gevonden</h2>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container className="pt-5" style={{ backgroundColor: "#f4f6f9", minHeight: "100vh" }}>
      <Row className="mb-4">
        <Col md={{ span: 8, offset: 2 }}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <Card.Title className="fw-bold">{post.title}</Card.Title>
              <Card.Subtitle className="mb-3 text-muted">
                {formatDate(post.date)} – {post.category}
              </Card.Subtitle>
              <Card.Text>{post.text}</Card.Text>
            </Card.Body>
          </Card>
          <button  onClick={() => router.push(`/blogspage/${post.id - 1}`)}>Vorige blog</button>
          <button  onClick={() => router.push(`/blogspage/${post.id + 1}`)}>Volgende blog</button>
        </Col>
        
      </Row>
    </Container>
  );
};

export default BlogDetail;
