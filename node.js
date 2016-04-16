var r = request.post('http://service.com/upload', function optionalCallback(err, httpResponse, body) {
    if (err) {
        return console.error('upload failed:', err);
    }
    console.log('Upload successful!  Server responded with:', body);
})
var form = r.form()
form.append('my_field1', 'my_value23_321')
form.append('my_field2', '123123sdas')
form.append('my_file', fs.createReadStream(path.join(__dirname, 'doodle.png')))
