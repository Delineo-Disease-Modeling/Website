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

var _ListContext = _interopRequireDefault(require("../List/ListContext"));

var _withStyles = _interopRequireDefault(require("../styles/withStyles"));

const styles = {
  /* Styles applied to the root element. */
  root: {
    position: 'absolute',
    right: 16,
    top: '50%',
    transform: 'translateY(-50%)'
  },

  /* Styles applied to the root element when the parent `ListItem` has `disableGutters={true}`. */
  disableGutters: {
    right: 0
  }
};
/**
 * Must be used as the last child of ListItem to function properly.
 */

exports.styles = styles;
const ListItemSecondaryAction = /*#__PURE__*/React.forwardRef(function ListItemSecondaryAction(props, ref) {
  const {
    classes,
    className
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, ["classes", "className"]);
  const context = React.useContext(_ListContext.default);
  return /*#__PURE__*/React.createElement("div", (0, _extends2.default)({
    className: (0, _clsx.default)(classes.root, className, context.disableGutters && classes.disableGutters),
    ref: ref
  }, other));
});
process.env.NODE_ENV !== "production" ? ListItemSecondaryAction.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component, normally an `IconButton` or selection control.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: _propTypes.default.object,

  /**
   * @ignore
   */
  className: _propTypes.default.string
} : void 0;
ListItemSecondaryAction.muiName = 'ListItemSecondaryAction';

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiListItemSecondaryAction'
})(ListItemSecondaryAction);

exports.default = _default;