import Card from "react-bootstrap/Card";
import { Database } from "../../QuizDatabase/Database";
import { QuizType } from "../../QuizDatabase/Database.type";
export const CategoryArray :React.FC = () => {
  return (
    <div className="category-card-container">
      {" "}
      {Database.map((quiz: QuizType) => {
        return (
          <Card className="category-card" key={quiz.name}>
            <Card.Img
              variant="top"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
              className="category-image"
            />
            <Card.Body>
              <Card.Title className="category-title">{quiz.name}</Card.Title>
              <Card.Text className="category-description">
                {quiz.name}
              </Card.Text>
              <Card.Text className="category-tags">
                <div>#{quiz.difficulty}</div>
                <div>#{quiz.category}</div>
              </Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};
