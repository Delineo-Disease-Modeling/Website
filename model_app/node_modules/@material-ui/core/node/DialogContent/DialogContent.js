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

const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    flex: '1 1 auto',
    WebkitOverflowScrolling: 'touch',
    // Add iOS momentum scrolling.
    overflowY: 'auto',
    padding: '8px 24px',
    '&:first-child': {
      // dialog without title
      paddingTop: 20
    }
  },

  /* Styles applied to the root element if `dividers={true}`. */
  dividers: {
    padding: '16px 24px',
    borderTop: `1px solid ${theme.palette.divider}`,
    borderBottom: `1px solid ${theme.palette.divider}`
  }
});

exports.styles = styles;
const DialogContent = /*#__PURE__*/React.forwardRef(function DialogContent(props, ref) {
  const {
    classes,
    className,
    dividers = false
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, ["classes", "className", "dividers"]);
  return /*#__PURE__*/React.createElement("div", (0, _extends2.default)({
    className: (0, _clsx.default)(classes.root, className, dividers && classes.dividers),
    ref: ref
  }, other));
});
process.env.NODE_ENV !== "production" ? DialogContent.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
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
   * Display the top and bottom dividers.
   * @default false
   */
  dividers: _propTypes.default.bool
} : void 0;

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiDialogContent'
})(DialogContent);

exports.default = _default;