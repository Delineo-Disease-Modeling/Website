"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _withStyles = _interopRequireDefault(require("../styles/withStyles"));

const styles = theme => ({
  thumb: {
    '&$open': {
      '& $offset': {
        transform: 'scale(1) translateY(-10px)'
      }
    }
  },
  open: {},
  offset: (0, _extends2.default)({
    zIndex: 1
  }, theme.typography.body2, {
    fontSize: theme.typography.pxToRem(12),
    lineHeight: 1.2,
    transition: theme.transitions.create(['transform'], {
      duration: theme.transitions.duration.shortest
    }),
    top: -34,
    transformOrigin: 'bottom center',
    transform: 'scale(0)',
    position: 'absolute'
  }),
  circle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: 'currentColor',
    transform: 'rotate(-45deg)'
  },
  label: {
    color: theme.palette.primary.contrastText,
    transform: 'rotate(45deg)',
    textAlign: 'center'
  }
});
/**
 * @ignore - internal component.
 */


function ValueLabel(props) {
  const {
    children,
    classes,
    className,
    open,
    value
  } = props;
  return /*#__PURE__*/React.cloneElement(children, {
    className: (0, _clsx.default)(children.props.className, classes.thumb, open && classes.open)
  }, /*#__PURE__*/React.createElement("span", {
    className: (0, _clsx.default)(classes.offset, className)
  }, /*#__PURE__*/React.createElement("span", {
    className: classes.circle
  }, /*#__PURE__*/React.createElement("span", {
    className: classes.label
  }, value))));
}

var _default = (0, _withStyles.default)(styles, {
  name: 'PrivateValueLabel'
})(ValueLabel);

exports.default = _default;