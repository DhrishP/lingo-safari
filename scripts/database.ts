import fs from 'fs';
import path from 'path';


const InsertData = async () => {
    console.log('Inserting data...');
    const QuestionPath = path.join(__dirname, "data.json");
    const Questiondata = fs.readFileSync(QuestionPath, "utf-8");




}

InsertData()