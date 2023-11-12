// 3. Extract File

// Write a function that receives a single string - the path to a file (the '\' character is escaped)

// Your task is to subtract the file name and its extension. (Beware of files like template.bak.pptx, as template.bak should be the file name, while pptx is the extension).
function extract(arr) {
  let elements = arr.split("\\");
  let file = elements[elements.length - 1];
  let fileArr = file.split(".");
  let fileExtention = fileArr.pop();
  console.log(`File name: ${fileArr.join(".")}`);
  console.log(`File extension: ${fileExtention}`);
}
extract("C:\\Internal\\training-internal\\Template.pptx");
