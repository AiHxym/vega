import {changeset, isChangeSet} from 'vega-dataflow';

function dataref(view, name) {
  var data = view._runtime.data;
  if (!data.hasOwnProperty(name)) {
    view.error('Unrecognized data set: ' + name);
  }
  return data[name];
}

export function data(name) {
  return dataref(this, name).values.value;
}

export function change(name, changes) {
  if (!isChangeSet(changes)) {
    this.error('Second argument to changes must be a changeset.');
  }
  var dataset = dataref(this, name);
  dataset.modified = true;
  return this.pulse(dataset.input, changes);
}

export function insert(name, _) {
  return change(name, changeset().insert(_));
}

export function remove(name, _) {
  return change(name, changeset().remove(_));
}