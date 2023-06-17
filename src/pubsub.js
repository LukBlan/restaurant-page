export {emit, subscribe}

const event = {};
function subscribe(eventName, handler) {
  event[eventName] = event[eventName] || [];
  event[eventName].push(handler);
}

function emit(eventName, data) {
  event[eventName].forEach(handler => handler(data));
}