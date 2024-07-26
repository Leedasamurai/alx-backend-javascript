import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';

const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    const data = {};
    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const stream = fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (row) => {
          const field = row.field;
          if (!data[field]) {
            data[field] = [];
          }
          data[field].push(row.firstname);
        })
        .on('end', () => {
          resolve(data);
        })
        .on('error', (error) => {
          reject(new Error('Cannot load the database'));
        });
    });
  });
};

export default readDatabase;
