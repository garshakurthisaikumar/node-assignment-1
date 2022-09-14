const fs = require('fs/promises');

const myFileWriter = async (fileName, fileContent) => {
	// write code here
    const data = await fs.writeFile(fileName, fileContent);
	// dont chnage function name
}

const myFileReader = async (fileName) => {
    const data = await fs.readFile(fileName, "utf-8");
    console.log(data);
	// write code here
	// dont chnage function name
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
    const data = await fs.appendFile(fileName, fileContent);
    console.log(data);

	// dont chnage function name
}

const myFileDeleter = async (fileName) => {
	// write code here

    const data = await fs.unlink(fileName);

	// dont chnage function name
}

myFileWriter("file.txt", "data in the file");

myFileReader("file.txt");

myFileUpdater("file.txt", " updatethe data");

myFileDeleter("file.txt");

module.exports = {myFileWriter, myFileUpdater, myFileReader, myFileDeleter }