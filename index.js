const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('DevOps Task 1: CI/CD Pipeline Executed Successfully!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
