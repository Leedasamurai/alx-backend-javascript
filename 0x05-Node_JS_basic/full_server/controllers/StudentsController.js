import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const filePath = process.argv[2];
      const data = await readDatabase(filePath);
      const response = ['This is the list of our students'];
      for (const [field, students] of Object.entries(data).sort()) {
        response.push(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
      }
      res.status(200).send(response.join('\n'));
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const major = req.params.major;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    try {
      const filePath = process.argv[2];
      const data = await readDatabase(filePath);
      const students = data[major];
      res.status(200).send(`List: ${students.join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
