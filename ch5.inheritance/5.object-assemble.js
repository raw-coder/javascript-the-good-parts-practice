const eventuality = function (that) {
  let registry = {};
  that.fire = function (event) {
    let array,
      func,
      handler,
      i,
      type = typeof event === 'string' ? event : event.type;
    if (registry.hasOwnProperty(type)) {
      array = registry[type];
      for (i = 0; i < array.length; i += 1) {
        handler = array[i];
        func = handler.method;
        if (typeof func === 'string') {
          func = this[func];
        }
        func.apply(this, handler.parameters || [event]);
      }
    }
    return this;
  }
  that.on = function (type, method, parameters) {
    let handler = {
      method,
      parameters,
    };
    if(registry.hasOwnProperty(type)) {
      registry[type].push(handler);
    } else {
      registry[type] = [handler];
    }
    return this;
  }
  return that;
}

