"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _withStyles = _interopRequireDefault(require("../styles/withStyles"));

var _TableContext = _interopRequireDefault(require("./TableContext"));

const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    display: 'table',
    width: '100%',
    borderCollapse: 'collapse',
    borderSpacing: 0,
    '& caption': (0, _extends2.default)({}, theme.typography.body2, {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
      textAlign: 'left',
      captionSide: 'bottom'
    })
  },

  /* Styles applied to the root element if `stickyHeader={true}`. */
  stickyHeader: {
    borderCollapse: 'separate'
  }
});

exports.styles = styles;
const defaultComponent = 'table';
const Table = /*#__PURE__*/React.forwardRef(function Table(props, ref) {
  const {
    classes,
    className,
    component: Component = defaultComponent,
    padding = 'default',
    size = 'medium',
    stickyHeader = false
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, ["classes", "className", "component", "padding", "size", "stickyHeader"]);
  const table = React.useMemo(() => ({
    padding,
    size,
    stickyHeader
  }), [padding, size, stickyHeader]);
  return /*#__PURE__*/React.createElement(_TableContext.default.Provider, {
    value: table
  }, /*#__PURE__*/React.createElement(Component, (0, _extends2.default)({
    role: Component === defaultComponent ? null : 'table',
    ref: ref,
    className: (0, _clsx.default)(classes.root, className, stickyHeader && classes.stickyHeader)
  }, other)));
});
process.env.NODE_ENV !== "production" ? Table.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the table, normally `TableHead` and `TableBody`.
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
   * Allows TableCells to inherit padding of the Table.
   * @default 'default'
   */
  padding: _propTypes.default.oneOf(['checkbox', 'default', 'none']),

  /**
   * Allows TableCells to inherit size of the Table.
   * @default 'medium'
   */
  size: _propTypes.default.oneOf(['medium', 'small']),

  /**
   * Set the header sticky.
   *
   * ⚠️ It doesn't work with IE11.
   * @default false
   */
  stickyHeader: _propTypes.default.bool
} : void 0;

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiTable'
})(Table);

exports.default = _default;