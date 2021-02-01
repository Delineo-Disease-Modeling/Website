import _typeof from "@babel/runtime/helpers/esm/typeof";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import { borders, display, flexbox, grid, positions, palette, shadows, sizing, spacing, typography, handleBreakpoints } from '@material-ui/system';
import { deepmerge } from '@material-ui/utils';

function objectsHaveSameKeys() {
  for (var _len = arguments.length, objects = new Array(_len), _key = 0; _key < _len; _key++) {
    objects[_key] = arguments[_key];
  }

  var allKeys = objects.reduce(function (keys, object) {
    return keys.concat(Object.keys(object));
  }, []);
  var union = new Set(allKeys);
  return objects.every(function (object) {
    return union.size === Object.keys(object).length;
  });
}

var filterProps = [].concat(_toConsumableArray(borders.filterProps), _toConsumableArray(display.filterProps), _toConsumableArray(flexbox.filterProps), _toConsumableArray(grid.filterProps), _toConsumableArray(positions.filterProps), _toConsumableArray(palette.filterProps), _toConsumableArray(shadows.filterProps), _toConsumableArray(sizing.filterProps), _toConsumableArray(spacing.filterProps), _toConsumableArray(typography.filterProps), ['sx']);

var getThemeValue = function getThemeValue(prop, value, theme) {
  var _inputProps;

  var inputProps = (_inputProps = {}, _defineProperty(_inputProps, prop, value), _defineProperty(_inputProps, "theme", theme), _inputProps);

  if (borders.filterProps.indexOf(prop) !== -1) {
    return borders(inputProps);
  }

  if (display.filterProps.indexOf(prop) !== -1) {
    return display(inputProps);
  }

  if (flexbox.filterProps.indexOf(prop) !== -1) {
    return flexbox(inputProps);
  }

  if (grid.filterProps.indexOf(prop) !== -1) {
    return grid(inputProps);
  }

  if (positions.filterProps.indexOf(prop) !== -1) {
    return positions(inputProps);
  }

  if (palette.filterProps.indexOf(prop) !== -1) {
    return palette(inputProps);
  }

  if (shadows.filterProps.indexOf(prop) !== -1) {
    return shadows(inputProps);
  }

  if (sizing.filterProps.indexOf(prop) !== -1) {
    return sizing(inputProps);
  }

  if (spacing.filterProps.indexOf(prop) !== -1) {
    return spacing(inputProps);
  }

  if (typography.filterProps.indexOf(prop) !== -1) {
    return typography(inputProps);
  }

  return _defineProperty({}, prop, value);
};

export var styleFunctionSx = function styleFunctionSx(styles, theme) {
  if (!styles) return null;

  if (typeof styles === 'function') {
    return styles(theme);
  }

  if (_typeof(styles) !== 'object') {
    // value
    return styles;
  }

  var css = {};
  Object.keys(styles).forEach(function (styleKey) {
    if (_typeof(styles[styleKey]) === 'object') {
      if (filterProps.indexOf(styleKey) !== -1) {
        css = deepmerge(css, getThemeValue(styleKey, styles[styleKey], theme));
      } else {
        var breakpointsValues = handleBreakpoints({
          theme: theme
        }, styles[styleKey], function (x) {
          return _defineProperty({}, styleKey, x);
        });

        if (objectsHaveSameKeys(breakpointsValues, styles[styleKey])) {
          var transformedValue = styleFunctionSx(styles[styleKey], theme);
          css[styleKey] = transformedValue;
        } else {
          css = deepmerge(css, breakpointsValues);
        }
      }
    } else if (typeof styles[styleKey] === 'function') {
      css = deepmerge(css, _defineProperty({}, styleKey, styles[styleKey](theme)));
    } else {
      css = deepmerge(css, getThemeValue(styleKey, styles[styleKey], theme));
    }
  });
  return css;
};

var styleFunction = function styleFunction(props) {
  var result = {};
  Object.keys(props).forEach(function (prop) {
    if (filterProps.indexOf(prop) !== -1 && prop !== 'sx') {
      result = deepmerge(result, getThemeValue(prop, props[prop], props.theme));
    }
  });
  var sxValue = styleFunctionSx(props.sx, props.theme);
  return deepmerge(result, sxValue);
};

styleFunction.filterProps = filterProps;
export default styleFunction;