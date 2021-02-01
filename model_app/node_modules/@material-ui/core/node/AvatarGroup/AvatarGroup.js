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

var _reactIs = require("react-is");

var _clsx = _interopRequireDefault(require("clsx"));

var _utils = require("@material-ui/utils");

var _styles = require("../styles");

var _Avatar = _interopRequireDefault(require("../Avatar"));

const SPACINGS = {
  small: -16,
  medium: null
};

const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    flexDirection: 'row-reverse'
  },

  /* Styles applied to the avatar elements. */
  avatar: {
    border: `2px solid ${theme.palette.background.default}`,
    boxSizing: 'content-box',
    marginLeft: -8,
    '&:last-child': {
      marginLeft: 0
    }
  }
});

exports.styles = styles;
const AvatarGroup = /*#__PURE__*/React.forwardRef(function AvatarGroup(props, ref) {
  const {
    children: childrenProp,
    classes,
    className,
    max = 5,
    spacing = 'medium',
    variant = 'circular'
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, ["children", "classes", "className", "max", "spacing", "variant"]);
  const clampedMax = max < 2 ? 2 : max;
  const children = React.Children.toArray(childrenProp).filter(child => {
    if (process.env.NODE_ENV !== 'production') {
      if ((0, _reactIs.isFragment)(child)) {
        console.error(["Material-UI: The AvatarGroup component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
      }
    }

    return /*#__PURE__*/React.isValidElement(child);
  });
  const extraAvatars = children.length > clampedMax ? children.length - clampedMax + 1 : 0;
  const marginLeft = spacing && SPACINGS[spacing] !== undefined ? SPACINGS[spacing] : -spacing;
  return /*#__PURE__*/React.createElement("div", (0, _extends2.default)({
    className: (0, _clsx.default)(classes.root, className),
    ref: ref
  }, other), extraAvatars ? /*#__PURE__*/React.createElement(_Avatar.default, {
    className: classes.avatar,
    style: {
      marginLeft
    },
    variant: variant
  }, "+", extraAvatars) : null, children.slice(0, children.length - extraAvatars).reverse().map(child => {
    return /*#__PURE__*/React.cloneElement(child, {
      className: (0, _clsx.default)(child.props.className, classes.avatar),
      style: (0, _extends2.default)({
        marginLeft
      }, child.props.style),
      variant: child.props.variant || variant
    });
  }));
});
process.env.NODE_ENV !== "production" ? AvatarGroup.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The avatars to stack.
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
   * Max avatars to show before +x.
   * @default 5
   */
  max: (0, _utils.chainPropTypes)(_propTypes.default.number, props => {
    if (props.max < 2) {
      throw new Error(['Material-UI: The prop `max` should be equal to 2 or above.', 'A value below is clamped to 2.'].join('\n'));
    }
  }),

  /**
   * Spacing between avatars.
   * @default 'medium'
   */
  spacing: _propTypes.default.oneOfType([_propTypes.default.oneOf(['medium', 'small']), _propTypes.default.number]),

  /**
   * The shape of the avatars.
   * @default 'circular'
   */
  variant: _propTypes.default
  /* @typescript-to-proptypes-ignore */
  .oneOfType([_propTypes.default.oneOf(['circular', 'rounded', 'square']), _propTypes.default.string])
} : void 0;

var _default = (0, _styles.withStyles)(styles, {
  name: 'MuiAvatarGroup'
})(AvatarGroup);

exports.default = _default;