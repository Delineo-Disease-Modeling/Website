"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _capitalize = _interopRequireDefault(require("../utils/capitalize"));

var _withStyles = _interopRequireDefault(require("../styles/withStyles"));

var _useTheme = _interopRequireDefault(require("../styles/useTheme"));

const styles = theme => {
  const hidden = {
    display: 'none'
  };
  return theme.breakpoints.keys.reduce((acc, key) => {
    acc[`only${(0, _capitalize.default)(key)}`] = {
      [theme.breakpoints.only(key)]: hidden
    };
    acc[`${key}Up`] = {
      [theme.breakpoints.up(key)]: hidden
    };
    acc[`${key}Down`] = {
      [theme.breakpoints.down(key)]: hidden
    };
    return acc;
  }, {});
};
/**
 * @ignore - internal component.
 */


function HiddenCss(props) {
  const {
    children,
    classes,
    className,
    only
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, ["children", "classes", "className", "only"]);
  const theme = (0, _useTheme.default)();

  if (process.env.NODE_ENV !== 'production') {
    const unknownProps = Object.keys(other).filter(propName => {
      const isUndeclaredBreakpoint = !theme.breakpoints.keys.some(breakpoint => {
        return `${breakpoint}Up` === propName || `${breakpoint}Down` === propName;
      });
      return isUndeclaredBreakpoint;
    });

    if (unknownProps.length > 0) {
      console.error(`Material-UI: Unsupported props received by \`<Hidden implementation="css" />\`: ${unknownProps.join(', ')}. Did you forget to wrap this component in a ThemeProvider declaring these breakpoints?`);
    }
  }

  const clsx = [];

  if (className) {
    clsx.push(className);
  }

  for (let i = 0; i < theme.breakpoints.keys.length; i += 1) {
    const breakpoint = theme.breakpoints.keys[i];
    const breakpointUp = props[`${breakpoint}Up`];
    const breakpointDown = props[`${breakpoint}Down`];

    if (breakpointUp) {
      clsx.push(classes[`${breakpoint}Up`]);
    }

    if (breakpointDown) {
      clsx.push(classes[`${breakpoint}Down`]);
    }
  }

  if (only) {
    const onlyBreakpoints = Array.isArray(only) ? only : [only];
    onlyBreakpoints.forEach(breakpoint => {
      clsx.push(classes[`only${(0, _capitalize.default)(breakpoint)}`]);
    });
  }

  return /*#__PURE__*/React.createElement("div", {
    className: clsx.join(' ')
  }, children);
}

process.env.NODE_ENV !== "production" ? HiddenCss.propTypes = {
  /**
   * The content of the component.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * Specify which implementation to use.  'js' is the default, 'css' works better for
   * server-side rendering.
   */
  implementation: _propTypes.default.oneOf(['js', 'css']),

  /**
   * If `true`, screens this size and down are hidden.
   */
  lgDown: _propTypes.default.bool,

  /**
   * If `true`, screens this size and up are hidden.
   */
  lgUp: _propTypes.default.bool,

  /**
   * If `true`, screens this size and down are hidden.
   */
  mdDown: _propTypes.default.bool,

  /**
   * If `true`, screens this size and up are hidden.
   */
  mdUp: _propTypes.default.bool,

  /**
   * Hide the given breakpoint(s).
   */
  only: _propTypes.default.oneOfType([_propTypes.default.oneOf(['xs', 'sm', 'md', 'lg', 'xl']), _propTypes.default.arrayOf(_propTypes.default.oneOf(['xs', 'sm', 'md', 'lg', 'xl']))]),

  /**
   * If `true`, screens this size and down are hidden.
   */
  smDown: _propTypes.default.bool,

  /**
   * If `true`, screens this size and up are hidden.
   */
  smUp: _propTypes.default.bool,

  /**
   * If `true`, screens this size and down are hidden.
   */
  xlDown: _propTypes.default.bool,

  /**
   * If `true`, screens this size and up are hidden.
   */
  xlUp: _propTypes.default.bool,

  /**
   * If `true`, screens this size and down are hidden.
   */
  xsDown: _propTypes.default.bool,

  /**
   * If `true`, screens this size and up are hidden.
   */
  xsUp: _propTypes.default.bool
} : void 0;

var _default = (0, _withStyles.default)(styles, {
  name: 'PrivateHiddenCss'
})(HiddenCss);

exports.default = _default;