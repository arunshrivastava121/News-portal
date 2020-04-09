function initTinyMce(){
  debugger
    tinymce.remove();
    tinymce.init({
      selector: '.tinymce',
      plugins: "image",
      menubar: "insert",
      toolbar: 'image link | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent'
    });
  }