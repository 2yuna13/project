import { Card, Button, Row, Col } from "react-bootstrap";
import * as Api from "../../api";
function AwardCard({ award, isEditable, setIsEditing }) {
  const handleDelete = async () => {
    try {
      await Api.delete("awards", award.id);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Card.Text>
      <Row className="align-items-center">
        <Col>
          <span>{award.title}</span>
          <br />
          <span className="text-muted">{award.description}</span>
        </Col>
        {isEditable && (
          <Col xs lg="1">
            <Button
              variant="outline-info"
              size="sm"
              onClick={() => setIsEditing((prev) => !prev)}
              className="mr-3"
            >
              편집
            </Button>
          </Col>
        )}
        {isEditable && (
          <Col xs lg="1">
            <Button variant="outline-danger" size="sm" onClick={handleDelete}>
              삭제
            </Button>
          </Col>
          
        )}
      </Row>
    </Card.Text>
  );
}

export default AwardCard;
