import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from "react-bootstrap";


export default function ContactUs() {
    const teamMembers = [
        {
          id: 1,
          name: "Mrs. M. M. P. D. Samarasekara",
          title: "Head - Research Unit",
          email: "researchunit@itum.mrt.ac.lk",
          image: "https://irc.itum.mrt.ac.lk/mmpds.jpg", 
        },
        {
          id: 2,
          name: "Dr. (Mrs.) Kalpana Galappaththi",
          title: "Conference Chair",
          email: "kgalappaththi@itum.mrt.ac.lk",
          image: "https://irc.itum.mrt.ac.lk/kg.jpg",
        },
        {
          id: 3,
          name: "Dr. (Mrs.) N. P. K. Semananda",
          title: "Conference Co-chair",
          email: "premilas@itum.mrt.ac.lk",
          image: "https://irc.itum.mrt.ac.lk/npks.jpg",
        },
        {
          id: 4,
          name: "Dr. (Mrs.) P. B. T. K. Premarathne",
          title: "Conference Co-chair",
          email: "kpremarathne@itum.mrt.ac.lk",
          image: "https://irc.itum.mrt.ac.lk/pbtkp.jpg",
        },
        {
          id: 5,
          name: "Dr. (Ms.) Nadeeka D. Tissera",
          title: "Conference Secretary",
          email: "nadeekat@itum.mrt.ac.lk",
          image: "https://irc.itum.mrt.ac.lk/ndt.jpg",
        },
      ];
    
  return (
    <div>
      <Container className="py-5 text-center">
      {/* Page Title */}
      <h1 className="display-4 mb-5 fw-bold">Contact Us</h1>

      {/* Team Members Grid */}
      <Row className="justify-content-center">
        {teamMembers.map((member) => (
          <Col key={member.id} md={6} lg={4} className="mb-4">
            <Card className="h-100 shadow-sm border-0 text-center">
              <div className="d-flex justify-content-center mt-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-circle"
                  style={{
                    width: "220px",
                    height: "220px",
                    objectFit: "cover",
                    border: "3px solidrgb(31, 141, 56)",
                  }}
                />
              </div>
              <Card.Body>
                <Card.Title className="fw-bold">{member.title}</Card.Title>
                <Card.Text>{member.name}</Card.Text>
              </Card.Body>
              <Card.Footer className="bg-white border-0">
                <a
                  href={`mailto:${member.email}`}
                  className="text-decoration-none text-success fw-bold"
                >
                  ✉ {member.email}
                </a>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  )
}
