import { Card } from "react-bootstrap";
import Bank from "./19043065.jpg" ;
import "./styles.css";

export default function Home() {
  return (
    <div class="bank">
      <Card class="card" style={{ width: "31rem", height: "10rem" }}>
        <Card.Img variant="top" src={Bank} />
        <Card.Body>
          <Card.Title class="bank-1">Welcome To,</Card.Title>
          <Card.Title class="bank-1">Bad Bank.</Card.Title>
         
        </Card.Body>
      </Card>
    </div>
  );
}
