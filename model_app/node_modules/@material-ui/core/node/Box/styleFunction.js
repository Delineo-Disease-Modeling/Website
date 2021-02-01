"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styleFunctionSx = void 0;

var _system = require("@material-ui/system");

var _utils = require("@material-ui/utils");

function objectsHaveSameKeys(...objects) {
  const allKeys = objects.reduce((keys, object) => keys.concat(Object.keys(object)), []);
  const union = new Set(allKeys);
  return objects.every(object => union.size === Object.keys(object).length);
}

const filterProps = [..._system.borders.filterProps, ..._system.display.filterProps, ..._system.flexbox.filterProps, ..._system.grid.filterProps, ..._system.positions.filterProps, ..._system.palette.filterProps, ..._system.shadows.filterProps, ..._system.sizing.filterProps, ..._system.spacing.filterProps, ..._system.typography.filterProps, 'sx'];

const getThemeValue = (prop, value, theme) => {
  const inputProps = {
    [prop]: value,
    theme
  };

  if (_system.borders.filterProps.indexOf(prop) !== -1) {
    return (0, _system.borders)(inputProps);
  }

  if (_system.display.filterProps.indexOf(prop) !== -1) {
    return (0, _system.display)(inputProps);
  }

  if (_system.flexbox.filterProps.indexOf(prop) !== -1) {
    return (0, _system.flexbox)(inputProps);
  }

  if (_system.grid.filterProps.indexOf(prop) !== -1) {
    return (0, _system.grid)(inputProps);
  }

  if (_system.positions.filterProps.indexOf(prop) !== -1) {
    return (0, _system.positions)(inputProps);
  }

  if (_system.palette.filterProps.indexOf(prop) !== -1) {
    return (0, _system.palette)(inputProps);
  }

  if (_system.shadows.filterProps.indexOf(prop) !== -1) {
    return (0, _system.shadows)(inputProps);
  }

  if (_system.sizing.filterProps.indexOf(prop) !== -1) {
    return (0, _system.sizing)(inputProps);
  }

  if (_system.spacing.filterProps.indexOf(prop) !== -1) {
    return (0, _system.spacing)(inputProps);
  }

  if (_system.typography.filterProps.indexOf(prop) !== -1) {
    return (0, _system.typography)(inputProps);
  }

  return {
    [prop]: value
  };
};

const styleFunctionSx = (styles, theme) => {
  if (!styles) return null;

  if (typeof styles === 'function') {
    return styles(theme);
  }

  if (typeof styles !== 'object') {
    // value
    return styles;
  }

  let css = {};
  Object.keys(styles).forEach(styleKey => {
    if (typeof styles[styleKey] === 'object') {
      if (filterProps.indexOf(styleKey) !== -1) {
        css = (0, _utils.deepmerge)(css, getThemeValue(styleKey, styles[styleKey], theme));
      } else {
        const breakpointsValues = (0, _system.handleBreakpoints)({
          theme
        }, styles[styleKey], x => ({
          [styleKey]: x
        }));

        if (objectsHaveSameKeys(breakpointsValues, styles[styleKey])) {
          const transformedValue = styleFunctionSx(styles[styleKey], theme);
          css[styleKey] = transformedValue;
        } else {
          css = (0, _utils.deepmerge)(css, breakpointsValues);
        }
      }
    } else if (typeof styles[styleKey] === 'function') {
      css = (0, _utils.deepmerge)(css, {
        [styleKey]: styles[styleKey](theme)
      });
    } else {
      css = (0, _utils.deepmerge)(css, getThemeValue(styleKey, styles[styleKey], theme));
    }
  });
  return css;
};

exports.styleFunctionSx = styleFunctionSx;

const styleFunction = props => {
  let result = {};
  Object.keys(props).forEach(prop => {
    if (filterProps.indexOf(prop) !== -1 && prop !== 'sx') {
      result = (0, _utils.deepmerge)(result, getThemeValue(prop, props[prop], props.theme));
    }
  });
  const sxValue = styleFunctionSx(props.sx, props.theme);
  return (0, _utils.deepmerge)(result, sxValue);
};

styleFunction.filterProps = filterProps;
var _default = styleFunction;
exports.default = _default;