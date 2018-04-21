/* 
Controller({
    init:(){
        this.view
        this.model
        this.xxx()
        this.yyy()
    },
    xxx(){}
    yyy(){}
})
*/
window.Controller = function (options) {
    let init = options.init;

    let object = {
        view: null,
        model: null,
        init: function (view, model) {
            this.view = view;
            this.model = model;
            this.model.init();
            init.call(this, view, model);
            this.bindEvents.call(this);
        }
    };
    console.log('objcet', object);
    console.log('options', options);
    for (let key in options) {
        if (key !== 'init') {
            object[key] = options[key];
        }
    }
    console.log('新的object', object);
    return object;
};