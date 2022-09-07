const multer = require('multer');

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png',
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, __basedir + '/../client/public/uploads/posts/');
  },
  filename: (req, file, callback) => {
    const fileName = req.body.posterId + Date.now() + '.jpg';
    console.log(fileName);
    callback(null, fileName);
  },
});

module.exports = multer({ storage: storage }).single('file');
