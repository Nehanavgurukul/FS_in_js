const fs = require('fs')

fs.writeFile('writeasync.txt', 'Hello World', (err) => {
	if (err) {
		console.error(err)
		return
	}
	console.log('wrote to file successfully')
})