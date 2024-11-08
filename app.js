const Reader = require('./Reader')
const Processor = require('./Processor')
const Table = require('./Table')
const HtmlParser = require('./HmlParser')
const Writer = require('./Writer')
const pdfWriter = require('./PDFWriter')

const reader = new Reader()
const writer = new Writer()

async function main() {
  const data = await reader.Read('./users.csv')
  const processedData = Processor.Process(data)
  const users = new Table(processedData)

  var html = await HtmlParser.Parse(users)
  
  const pathFileName = `./output/${Date.now()}`

  writer.writer(`${pathFileName}.html`, html)
  pdfWriter.WritePDF(`${pathFileName}.pdf`, `${pathFileName}.html`)
}

main()