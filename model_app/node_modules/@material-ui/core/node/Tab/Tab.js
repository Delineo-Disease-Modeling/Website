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

var _ButtonBase = _interopRequireDefault(require("../ButtonBase"));

var _capitalize = _interopRequireDefault(require("../utils/capitalize"));

var _unsupportedProp = _interopRequireDefault(require("../utils/unsupportedProp"));

const styles = theme => ({
  /* Styles applied to the root element. */
  root: (0, _extends2.default)({}, theme.typography.button, {
    maxWidth: 264,
    minWidth: 72,
    position: 'relative',
    minHeight: 48,
    flexShrink: 0,
    padding: '6px 12px',
    [theme.breakpoints.up('sm')]: {
      padding: '6px 24px'
    },
    overflow: 'hidden',
    whiteSpace: 'normal',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      minWidth: 160
    }
  }),

  /* Styles applied to the root element if both `icon` and `label` are provided. */
  labelIcon: {
    minHeight: 72,
    paddingTop: 9,
    '& $wrapper > *:first-child': {
      marginBottom: 6
    }
  },

  /* Styles applied to the root element if the parent [`Tabs`](/api/tabs/) has `textColor="inherit"`. */
  textColorInherit: {
    color: 'inherit',
    opacity: 0.7,
    '&$selected': {
      opacity: 1
    },
    '&$disabled': {
      opacity: theme.palette.action.disabledOpacity
    }
  },

  /* Styles applied to the root element if the parent [`Tabs`](/api/tabs/) has `textColor="primary"`. */
  textColorPrimary: {
    color: theme.palette.text.secondary,
    '&$selected': {
      color: theme.palette.primary.main
    },
    '&$disabled': {
      color: theme.palette.text.disabled
    }
  },

  /* Styles applied to the root element if the parent [`Tabs`](/api/tabs/) has `textColor="secondary"`. */
  textColorSecondary: {
    color: theme.palette.text.secondary,
    '&$selected': {
      color: theme.palette.secondary.main
    },
    '&$disabled': {
      color: theme.palette.text.disabled
    }
  },

  /* Pseudo-class applied to the root element if `selected={true}` (controlled by the Tabs component). */
  selected: {},

  /* Pseudo-class applied to the root element if `disabled={true}` (controlled by the Tabs component). */
  disabled: {},

  /* Styles applied to the root element if `fullWidth={true}` (controlled by the Tabs component). */
  fullWidth: {
    flexShrink: 1,
    flexGrow: 1,
    flexBasis: 0,
    maxWidth: 'none'
  },

  /* Styles applied to the root element if `wrapped={true}`. */
  wrapped: {
    fontSize: theme.typography.pxToRem(12),
    lineHeight: 1.5
  },

  /* Styles applied to the `icon` and `label`'s wrapper element. */
  wrapper: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'column'
  }
});

exports.styles = styles;
const Tab = /*#__PURE__*/React.forwardRef(function Tab(props, ref) {
  const {
    classes,
    className,
    disabled = false,
    disableFocusRipple = false,
    // eslint-disable-next-line react/prop-types
    fullWidth,
    icon,
    // eslint-disable-next-line react/prop-types
    indicator,
    label,
    onChange,
    onClick,
    onFocus,
    // eslint-disable-next-line react/prop-types
    selected,
    // eslint-disable-next-line react/prop-types
    selectionFollowsFocus,
    // eslint-disable-next-line react/prop-types
    textColor = 'inherit',
    value,
    wrapped = false
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, ["classes", "className", "disabled", "disableFocusRipple", "fullWidth", "icon", "indicator", "label", "onChange", "onClick", "onFocus", "selected", "selectionFollowsFocus", "textColor", "value", "wrapped"]);

  const handleClick = event => {
    if (!selected && onChange) {
      onChange(event, value);
    }

    if (onClick) {
      onClick(event);
    }
  };

  const handleFocus = event => {
    if (selectionFollowsFocus && !selected && onChange) {
      onChange(event, value);
    }

    if (onFocus) {
      onFocus(event);
    }
  };

  return /*#__PURE__*/React.createElement(_ButtonBase.default, (0, _extends2.default)({
    focusRipple: !disableFocusRipple,
    className: (0, _clsx.default)(classes.root, classes[`textColor${(0, _capitalize.default)(textColor)}`], className, disabled && classes.disabled, selected && classes.selected, label && icon && classes.labelIcon, fullWidth && classes.fullWidth, wrapped && classes.wrapped),
    ref: ref,
    role: "tab",
    "aria-selected": selected,
    disabled: disabled,
    onClick: handleClick,
    onFocus: handleFocus,
    tabIndex: selected ? 0 : -1
  }, other), /*#__PURE__*/React.createElement("span", {
    className: classes.wrapper
  }, icon, label), indicator);
});
process.env.NODE_ENV !== "production" ? Tab.propTypes = {
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
   * If `true`, the tab is disabled.
   * @default false
   */
  disabled: _propTypes.default.bool,

  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: _propTypes.default.bool,

  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `focusVisibleClassName`.
   * @default false
   */
  disableRipple: _propTypes.default.bool,

  /**
   * The icon element.
   */
  icon: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.string]),

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
  onFocus: _propTypes.default.func,

  /**
   * You can provide your own value. Otherwise, we fallback to the child position index.
   */
  value: _propTypes.default.any,

  /**
   * Tab labels appear in a single row.
   * They can use a second line if needed.
   * @default false
   */
  wrapped: _propTypes.default.bool
} : void 0;

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiTab'
})(Tab);

exports.default = _default;