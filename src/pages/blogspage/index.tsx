import { useState } from "react";
import posts from "@/posts.json";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { AnimatePresence, motion } from "framer-motion";

const categories = [
  "teambuilding",
  "code",
  "lessons learned",
  "fails",
  "wins",
  "reflectie",
];

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [expandedKey, setExpandedKey] = useState<string | null>(null);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
    setExpandedKey(null);
  };

  const toggleExpand = (key: string) => {
    setExpandedKey((prev) => (prev === key ? null : key));
  };

  const filteredPosts =
    (selectedCategory === ""
      ? posts
      : posts.filter((post) => post.category === selectedCategory)
    ).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <Container
      className="pt-5"
      style={{ backgroundColor: "#f4f6f9", minHeight: "100vh" }}
    >
      <Row className="mb-4">
        <Col>
          <h2 className="fw-bold text-primary text-center">Blogs</h2>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={3} className="mb-4">
          <h5>Filter op categorie</h5>
          <Form.Select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">Alle categorieën</option>
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </Form.Select>
        </Col>

        <Col xs={12} md={9}>
          {filteredPosts.length === 0 && <p>Geen posts gevonden...</p>}

          {filteredPosts.map((post, index) => {
            const itemKey = `${String(post.id)}-${index}`;

            return (
              <Card
                key={itemKey}
                className="mb-3 shadow-sm"
                style={{ cursor: "pointer" }}
                onClick={() => toggleExpand(itemKey)}
              >
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>

                  <AnimatePresence initial={false}>
                    {expandedKey === itemKey && (
                      <motion.div
                        key={`content-${itemKey}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        style={{ overflow: "hidden" }}
                      >
                        <Card.Subtitle className="mb-2 text-muted">
                          {formatDate(post.date)} – {post.category}
                        </Card.Subtitle>

                        
                        {post.img && (
                          <Card.Img
                            src={post.img}
                            alt={post.title}
                            className="mb-3"
                          />
                        )}

                        <Card.Text>{post.text}</Card.Text>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card.Body>
              </Card>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default BlogPage;
