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

var _ButtonBase = _interopRequireDefault(require("../ButtonBase"));

var _unsupportedProp = _interopRequireDefault(require("../utils/unsupportedProp"));

const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    transition: theme.transitions.create(['color', 'padding-top'], {
      duration: theme.transitions.duration.short
    }),
    padding: '6px 12px 8px',
    minWidth: 80,
    maxWidth: 168,
    color: theme.palette.text.secondary,
    flex: '1',
    '&$iconOnly': {
      paddingTop: 16
    },
    '&$selected': {
      paddingTop: 6,
      color: theme.palette.primary.main
    }
  },

  /* Pseudo-class applied to the root element if selected. */
  selected: {},

  /* Pseudo-class applied to the root element if `showLabel={false}` and not selected. */
  iconOnly: {},

  /* Styles applied to the span element that wraps the icon and label. */
  wrapper: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'column'
  },

  /* Styles applied to the label's span element. */
  label: {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.pxToRem(12),
    opacity: 1,
    transition: 'font-size 0.2s, opacity 0.2s',
    transitionDelay: '0.1s',
    '&$iconOnly': {
      opacity: 0,
      transitionDelay: '0s'
    },
    '&$selected': {
      fontSize: theme.typography.pxToRem(14)
    }
  }
});

exports.styles = styles;
const BottomNavigationAction = /*#__PURE__*/React.forwardRef(function BottomNavigationAction(props, ref) {
  const {
    classes,
    className,
    icon,
    label,
    onChange,
    onTouchStart,
    onTouchEnd,
    onClick,
    // eslint-disable-next-line react/prop-types -- private, always overridden by BottomNavigation
    selected,
    showLabel,
    value
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, ["classes", "className", "icon", "label", "onChange", "onTouchStart", "onTouchEnd", "onClick", "selected", "showLabel", "value"]);
  const touchStartPos = React.useRef();
  const touchTimer = React.useRef();
  React.useEffect(() => {
    return () => {
      clearTimeout(touchTimer.current);
    };
  }, [touchTimer]);

  const handleTouchStart = event => {
    if (onTouchStart) {
      onTouchStart(event);
    }

    const {
      clientX,
      clientY
    } = event.touches[0];
    touchStartPos.current = {
      clientX,
      clientY
    };
  };

  const handleTouchEnd = event => {
    if (onTouchEnd) onTouchEnd(event);
    const target = event.target;
    const {
      clientX,
      clientY
    } = event.changedTouches[0];

    if (Math.abs(clientX - touchStartPos.current.clientX) < 10 && Math.abs(clientY - touchStartPos.current.clientY) < 10) {
      touchTimer.current = setTimeout(() => {
        // Simulate the native tap behavior on mobile.
        // On the web, a tap won't trigger a click if a container is scrolling.
        //
        // Note that the synthetic behavior won't trigger a native <a> nor
        // it will trigger a click at all on iOS.
        target.dispatchEvent(new Event('click', {
          bubbles: true
        }));
      }, 10);
    }
  };

  const handleChange = event => {
    clearTimeout(touchTimer.current);

    if (onChange) {
      onChange(event, value);
    }

    if (onClick) {
      onClick(event);
    }
  };

  return /*#__PURE__*/React.createElement(_ButtonBase.default, (0, _extends2.default)({
    ref: ref,
    className: (0, _clsx.default)(classes.root, className, selected ? classes.selected : !showLabel && classes.iconOnly),
    focusRipple: true,
    onClick: handleChange,
    onTouchStart: handleTouchStart,
    onTouchEnd: handleTouchEnd
  }, other), /*#__PURE__*/React.createElement("span", {
    className: classes.wrapper
  }, icon, /*#__PURE__*/React.createElement("span", {
    className: (0, _clsx.default)(classes.label, selected ? classes.selected : !showLabel && classes.iconOnly)
  }, label)));
});
process.env.NODE_ENV !== "production" ? BottomNavigationAction.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: _unsupportedProp.default,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: _propTypes.default.object,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The icon element.
   */
  icon: _propTypes.default.node,

  /**
   * The label element.
   */
  label: _propTypes.default.node,

  /**
   * @ignore
   */
  onChange: _propTypes.default.func,

  /**
   * @ignore
   */
  onClick: _propTypes.default.func,

  /**
   * @ignore
   */
  onTouchEnd: _propTypes.default.func,

  /**
   * @ignore
   */
  onTouchStart: _propTypes.default.func,

  /**
   * If `true`, the `BottomNavigationAction` will show its label.
   * By default, only the selected `BottomNavigationAction`
   * inside `BottomNavigation` will show its label.
   *
   * The prop defaults to the value (`false`) inherited from the parent BottomNavigation component.
   */
  showLabel: _propTypes.default.bool,

  /**
   * You can provide your own value. Otherwise, we fallback to the child position index.
   */
  value: _propTypes.default.any
} : void 0;

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiBottomNavigationAction'
})(BottomNavigationAction);

exports.default = _default;