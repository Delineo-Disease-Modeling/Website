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

var _colorManipulator = require("../styles/colorManipulator");

const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    color: 'inherit',
    display: 'table-row',
    verticalAlign: 'middle',
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    '&$hover:hover': {
      backgroundColor: theme.palette.action.hover
    },
    '&$selected, &$selected:hover': {
      backgroundColor: (0, _colorManipulator.alpha)(theme.palette.secondary.main, theme.palette.action.selectedOpacity)
    }
  },

  /* Pseudo-class applied to the root element if `selected={true}`. */
  selected: {},

  /* Pseudo-class applied to the root element if `hover={true}`. */
  hover: {},

  /* Styles applied to the root element if table variant="head". */
  head: {},

  /* Styles applied to the root element if table variant="footer". */
  footer: {}
});

exports.styles = styles;
const defaultComponent = 'tr';
/**
 * Will automatically set dynamic row height
 * based on the material table element parent (head, body, etc).
 */

const TableRow = /*#__PURE__*/React.forwardRef(function TableRow(props, ref) {
  const {
    classes,
    className,
    component: Component = defaultComponent,
    hover = false,
    selected = false
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, ["classes", "className", "component", "hover", "selected"]);
  const tablelvl2 = React.useContext(_Tablelvl2Context.default);
  return /*#__PURE__*/React.createElement(Component, (0, _extends2.default)({
    ref: ref,
    className: (0, _clsx.default)(classes.root, className, tablelvl2 && {
      'head': classes.head,
      'footer': classes.footer
    }[tablelvl2.variant], hover && classes.hover, selected && classes.selected),
    role: Component === defaultComponent ? null : 'row'
  }, other));
});
process.env.NODE_ENV !== "production" ? TableRow.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * Should be valid <tr> children such as `TableCell`.
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
  component: _propTypes.default.elementType,

  /**
   * If `true`, the table row will shade on hover.
   * @default false
   */
  hover: _propTypes.default.bool,

  /**
   * If `true`, the table row will have the selected shading.
   * @default false
   */
  selected: _propTypes.default.bool
} : void 0;

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiTableRow'
})(TableRow);

exports.default = _default;