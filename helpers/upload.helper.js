import formidable from "formidable";

class HelperUpload {
  static async uploadImage(req) {
    const form = new formidable.IncomingForm();
    form.multiples = true;
    form.maxFieldsSize = 10 * 1024 * 1024;
    const body = {};
    let image = [];
    form.uploadDir = "./public/images/";
    form
      .parse(req)
      .on("fileBegin", function (name, file) {
        file.path = file.path + ".jpeg";
      })
      .on("file", function (name, file) {
        console.log(file.path);
        image.push(file.path);
      })
      .on("field", function (name, field) {
        body[name] = field;
      })
      .on("error", function (err) {
        throw err;
      })
      .on("end", async function () {
        return image;
      });
  }
}

export default HelperUpload;
