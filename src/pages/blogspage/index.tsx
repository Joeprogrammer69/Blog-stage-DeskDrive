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
  const [showAllWeeks, setShowAllWeeks] = useState<boolean>(false);
  const [visibleMap, setVisibleMap] = useState<{ [key: string]: boolean }>({});

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
    setVisibleMap({});
  };

  const handleShowAllChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setShowAllWeeks(checked);

    if (checked) {
      const allVisible: { [key: string]: boolean } = {};
      posts.forEach((post, index) => {
        allVisible[`${post.id}-${index}`] = true;
      });
      setVisibleMap(allVisible);
    } else {
      setVisibleMap({});
    }
  };

  const toggleExpand = (key: string) => {
    setVisibleMap((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  let filteredPosts = selectedCategory
    ? posts.filter((post) => post.category === selectedCategory)
    : posts;

  filteredPosts = filteredPosts.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

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

      {}
      <Row className="mb-4">
        <Col xs={12} md={6} className="mb-2">
          <Form.Select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">Alle categorieën</option>
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col xs={12} md={6} className="mb-2 d-flex align-items-center">
          <Form.Check
            type="checkbox"
            label="Toon alle weken"
            checked={showAllWeeks}
            onChange={handleShowAllChange}
          />
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          {filteredPosts.length === 0 && <p>Geen posts gevonden...</p>}

          {filteredPosts.map((post, index) => {
            const itemKey = `${post.id}-${index}`;

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
                    {visibleMap[itemKey] && (
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
