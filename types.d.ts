type QuestionProps = {
  answer: string;
  options: string[];
  statement: string;
  id: string;
  difficulty: string;
  coins: number;
  language: string;
  type:"mcq"|"open_ended"
  TeacherId:string?
};
