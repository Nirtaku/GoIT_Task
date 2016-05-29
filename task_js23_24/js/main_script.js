require.config({
    paths: {
        'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery',
    },
    shim: {
        'jquery': {
            exports: 'jQuery',
        }
    }
});

require( ['model', 'view', 'controller', 'jquery'],
         function (model, view, controller,  $) {
            var toDoList = ['Pass all exams GoIT','Create resume','Star work in IT compaby'];
            var modelObj = new model.model(toDoList);
            var viewObj = new view.view(modelObj);
            new controller.controller(modelObj, viewObj);
     }
);
       
