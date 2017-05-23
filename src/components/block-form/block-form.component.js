function blockFormController() {
  console.log('block');
}


angular .module('blockForm')
        .component('blockForm', {
          templateUrl: "./components/block-form/block-form.template.html",
          controller: blockFormController
        });
