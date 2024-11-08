const pdf = require('html-pdf')
var fs = require('fs');

class PDFWriter {

  static WritePDF(filename, html) {
    const file = fs.readFileSync(html, 'utf8');
    const options = { format: 'Letter' };
    pdf.create(file, options).toFile(filename, function(err, res) {
      if (err) return console.log(err);
      console.log(res);
    });
  }
}

module.exports = PDFWriter