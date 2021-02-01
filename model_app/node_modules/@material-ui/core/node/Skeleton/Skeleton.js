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

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("../styles");

const styles = theme => {
  const radiusUnit = (0, _styles.unstable_getUnit)(theme.shape.borderRadius) || 'px';
  const radiusValue = (0, _styles.unstable_toUnitless)(theme.shape.borderRadius);
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'block',
      // Create a "on paper" color with sufficient contrast retaining the color
      backgroundColor: (0, _styles.alpha)(theme.palette.text.primary, theme.palette.mode === 'light' ? 0.11 : 0.13),
      height: '1.2em'
    },

    /* Styles applied to the root element if `variant="text"`. */
    text: {
      marginTop: 0,
      marginBottom: 0,
      height: 'auto',
      transformOrigin: '0 55%',
      transform: 'scale(1, 0.60)',
      borderRadius: `${radiusValue}${radiusUnit}/${Math.round(radiusValue / 0.6 * 10) / 10}${radiusUnit}`,
      '&:empty:before': {
        content: '"\\00a0"'
      }
    },

    /* Styles applied to the root element if `variant="rectangular"`. */
    rectangular: {},

    /* Styles applied to the root element if `variant="circular"`. */
    circular: {
      borderRadius: '50%'
    },

    /* Styles applied to the root element if `animation="pulse"`. */
    pulse: {
      animation: '$pulse 1.5s ease-in-out 0.5s infinite'
    },
    '@keyframes pulse': {
      '0%': {
        opacity: 1
      },
      '50%': {
        opacity: 0.4
      },
      '100%': {
        opacity: 1
      }
    },

    /* Styles applied to the root element if `animation="wave"`. */
    wave: {
      position: 'relative',
      overflow: 'hidden',
      '&::after': {
        animation: '$wave 1.6s linear 0.5s infinite',
        background: `linear-gradient(90deg, transparent, ${theme.palette.action.hover}, transparent)`,
        content: '""',
        position: 'absolute',
        transform: 'translateX(-100%)',
        // Avoid flash during server-side hydration
        bottom: 0,
        left: 0,
        right: 0,
        top: 0
      }
    },
    '@keyframes wave': {
      '0%': {
        transform: 'translateX(-100%)'
      },
      '60%': {
        // +0.5s of delay between each loop
        transform: 'translateX(100%)'
      },
      '100%': {
        transform: 'translateX(100%)'
      }
    },

    /* Styles applied when the component is passed children. */
    withChildren: {
      '& > *': {
        visibility: 'hidden'
      }
    },

    /* Styles applied when the component is passed children and no width. */
    fitContent: {
      maxWidth: 'fit-content'
    },

    /* Styles applied when the component is passed children and no height. */
    heightAuto: {
      height: 'auto'
    }
  };
};

exports.styles = styles;
const Skeleton = /*#__PURE__*/React.forwardRef(function Skeleton(props, ref) {
  const {
    animation = 'pulse',
    classes,
    className,
    component: Component = 'span',
    height,
    style,
    variant = 'text',
    width
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, ["animation", "classes", "className", "component", "height", "style", "variant", "width"]);
  const themeVariantsClasses = (0, _styles.useThemeVariants)((0, _extends2.default)({}, props, {
    animation,
    component: Component,
    variant
  }), 'MuiSkeleton');
  const hasChildren = Boolean(other.children);
  return /*#__PURE__*/React.createElement(Component, (0, _extends2.default)({
    ref: ref,
    className: (0, _clsx.default)(classes.root, classes[variant], themeVariantsClasses, className, hasChildren && [classes.withChildren, !width && classes.fitContent, !height && classes.heightAuto], animation !== false && classes[animation])
  }, other, {
    style: (0, _extends2.default)({
      width,
      height
    }, style)
  }));
});
process.env.NODE_ENV !== "production" ? Skeleton.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The animation.
   * If `false` the animation effect is disabled.
   * @default 'pulse'
   */
  animation: _propTypes.default.oneOf(['pulse', 'wave', false]),

  /**
   * Optional children to infer width and height from.
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
   * Height of the skeleton.
   * Useful when you don't want to adapt the skeleton to a text element but for instance a card.
   */
  height: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /**
   * @ignore
   */
  style: _propTypes.default.object,

  /**
   * The type of content that will be rendered.
   * @default 'text'
   */
  variant: _propTypes.default
  /* @typescript-to-proptypes-ignore */
  .oneOfType([_propTypes.default.oneOf(['circular', 'rectangular', 'text']), _propTypes.default.string]),

  /**
   * Width of the skeleton.
   * Useful when the skeleton is inside an inline element with no width of its own.
   */
  width: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
} : void 0;

var _default = (0, _styles.withStyles)(styles, {
  name: 'MuiSkeleton'
})(Skeleton);

exports.default = _default;