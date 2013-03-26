
exports.helpExpress =  function (app) {
    app._modules = [];
    app.useModule = useModule;
    app.hook = hook;
};


function useModule (mod) {
    this._modules.push(mod);
}

function hook (method/*, args*/) {
    var args = Array.prototype.slice.call(arguments, 1);
    args.unshift(this);
    var app = this;
    this._modules.forEach(function(mod) {
        if('function' === typeof(mod[method])) {
            mod[method].apply(app, args);
        }
    });
}
