import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useQuiz } from "../../QuizContext/Database";
import { QuizType } from "../../QuizContext/Database.type";
// type Data={
//   quizData:
// }
export const CategoryArray: React.FC = () => {
  const {quizData} = useQuiz();
  return (
    <div className="category-card-container">
      {" "}
      {quizData?.map((quiz: QuizType) => {
        return (
          <Card className="category-card" key={quiz.name}>
            <Link to="/instruction" state={quiz} className="cta-link">
              <Card.Img
                variant="top"
                src={quiz.image}
                className="category-image"
              />
              <Card.Body>
                <Card.Title className="category-title">{quiz.name}</Card.Title>
                <Card.Text className="category-description">
                  {quiz.description.slice(0, 150)}...
                </Card.Text>
                <Card.Text className="category-tags">
                  <div>#{quiz.difficulty}</div>
                  <div>#{quiz.category}</div>
                </Card.Text>
              </Card.Body>
            </Link>
          </Card>
        );
      })}
    </div>
  );
};
