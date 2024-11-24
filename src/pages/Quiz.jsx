import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Test } from "../component";

function Quiz() {
  const { title } = useParams();
  const {
    data:quizzes,
    isPending,
    error,
  } = useFetch(`http://localhost:3000/quizzes?title${title}`);
  console.log(quizzes);
  useEffect(() => {
    document.title = "Quiz" + " " + title;
  }, [title]);
  return (
    <section className="quiz-container container">
      {isPending && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      {quizzes && <Test question={quizzes.data[0]}/>}
    </section>
  );
}

export default Quiz;
