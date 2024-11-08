class Processor {

  static Process(data) {
    const result = data.split('\n')
    const rows = [] 

    result.forEach(row => {
      const arr = row.split(',')
      rows.push(arr)
    });
    
    return rows    
  }
}

module.exports = Processor