const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Разрешить CORS
app.use(cors({
  origin: 'http://127.0.0.1:5500',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

// Увеличить лимит размера запроса
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Путь к файлу данных
const dataFilePath = path.join(__dirname, 'structure.json');

// Загрузить данные из файла
const loadData = () => {
  if (fs.existsSync(dataFilePath)) {
    const rawData = fs.readFileSync(dataFilePath);
    return JSON.parse(rawData);
  }
  return {
    structure: {

    }
  };
};

// Сохранить данные в файл
const saveData = (data) => {
  fs.writeFileSync(dataFilePath, JSON.stringify(data));
};

// Роут для получения данных
app.get('/api/data', (req, res) => {
  const data = loadData();
  res.json(data);
});

// Роут для обновления данных
app.post('/api/update', (req, res) => {
  const updatedData = req.body;

  
  if (!updatedData || !updatedData.structure || !updatedData.structure.columns) {
    return res.status(400).json({ success: false, message: 'Некорректные данные' });
  }

  // Сохраняем данные в файл
  saveData(updatedData);

  // Возвращаем JSON
  res.json({ success: true, message: 'Данные обновлены!' });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});