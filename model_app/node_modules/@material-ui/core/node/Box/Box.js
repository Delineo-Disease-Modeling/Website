"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _styleFunction = _interopRequireDefault(require("./styleFunction"));

var _experimentalStyled = _interopRequireDefault(require("../styles/experimentalStyled"));

function omit(input, fields) {
  const output = {};
  Object.keys(input).forEach(prop => {
    if (fields.indexOf(prop) === -1) {
      output[prop] = input[prop];
    }
  });
  return output;
}

let warnedOnce = false;
/**
 * @ignore - do not document.
 */

const BoxRoot = /*#__PURE__*/React.forwardRef(function StyledComponent(props, ref) {
  const {
    children,
    clone,
    className,
    component: Component = 'div'
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, ["children", "clone", "className", "component"]);
  const spread = omit(other, _styleFunction.default.filterProps);

  if (process.env.NODE_ENV !== 'production') {
    if (!warnedOnce && Object.keys(spread).length !== Object.keys(other).length) {
      warnedOnce = true;
      console.warn('Material-UI: You are using deprecated props on the Box component.\n' + 'You should move the properties inside the `sx` prop. For example:\n' + '<Box m={2} /> should become <Box sx={{ m: 2 }} />');
    }
  }

  if (clone) {
    return /*#__PURE__*/React.cloneElement(children, (0, _extends2.default)({
      className: (0, _clsx.default)(children.props.className, className)
    }, spread));
  }

  if (typeof children === 'function') {
    return children((0, _extends2.default)({
      className
    }, spread));
  }

  return /*#__PURE__*/React.createElement(Component, (0, _extends2.default)({
    ref: ref,
    className: className
  }, spread), children);
});
process.env.NODE_ENV !== "production" ? BoxRoot.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func]),
  className: _propTypes.default.string,
  clone: _propTypes.default.bool,
  component: _propTypes.default.elementType
} : void 0;
/**
 * @ignore - do not document.
 */

const Box = (0, _experimentalStyled.default)(BoxRoot, {}, {
  muiName: 'MuiBox'
})(_styleFunction.default);
var _default = Box;
exports.default = _default;