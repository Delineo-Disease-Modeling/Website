"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _withStyles = _interopRequireDefault(require("../styles/withStyles"));

var _Tablelvl2Context = _interopRequireDefault(require("../Table/Tablelvl2Context"));

const styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'table-row-group'
  }
};
exports.styles = styles;
const tablelvl2 = {
  variant: 'body'
};
const defaultComponent = 'tbody';
const TableBody = /*#__PURE__*/React.forwardRef(function TableBody(props, ref) {
  const {
    classes,
    className,
    component: Component = defaultComponent
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, ["classes", "className", "component"]);
  return /*#__PURE__*/React.createElement(_Tablelvl2Context.default.Provider, {
    value: tablelvl2
  }, /*#__PURE__*/React.createElement(Component, (0, _extends2.default)({
    className: (0, _clsx.default)(classes.root, className),
    ref: ref,
    role: Component === defaultComponent ? null : 'rowgroup'
  }, other)));
});
process.env.NODE_ENV !== "production" ? TableBody.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component, normally `TableRow`.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: _propTypes.default.object,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: _propTypes.default.elementType
} : void 0;

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiTableBody'
})(TableBody);

exports.default = _default;