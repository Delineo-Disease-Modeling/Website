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

var _styles = require("@material-ui/styles");

var _withStyles = _interopRequireDefault(require("../styles/withStyles"));

var _Person = _interopRequireDefault(require("../internal/svg-icons/Person"));

const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    width: 40,
    height: 40,
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.pxToRem(20),
    lineHeight: 1,
    borderRadius: '50%',
    overflow: 'hidden',
    userSelect: 'none'
  },

  /* Styles applied to the root element if not `src` or `srcSet`. */
  colorDefault: {
    color: theme.palette.background.default,
    backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[400] : theme.palette.grey[600]
  },

  /* Styles applied to the root element if `variant="circular"`. */
  circular: {},

  /* Styles applied to the root element if `variant="rounded"`. */
  rounded: {
    borderRadius: theme.shape.borderRadius
  },

  /* Styles applied to the root element if `variant="square"`. */
  square: {
    borderRadius: 0
  },

  /* Styles applied to the img element if either `src` or `srcSet` is defined. */
  img: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    // Handle non-square image. The property isn't supported by IE11.
    objectFit: 'cover',
    // Hide alt text.
    color: 'transparent',
    // Hide the image broken icon, only works on Chrome.
    textIndent: 10000
  },

  /* Styles applied to the fallback icon */
  fallback: {
    width: '75%',
    height: '75%'
  }
});

exports.styles = styles;

function useLoaded({
  src,
  srcSet
}) {
  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => {
    if (!src && !srcSet) {
      return undefined;
    }

    setLoaded(false);
    let active = true;
    const image = new Image();
    image.src = src;

    if (srcSet) {
      image.srcset = srcSet;
    }

    image.onload = () => {
      if (!active) {
        return;
      }

      setLoaded('loaded');
    };

    image.onerror = () => {
      if (!active) {
        return;
      }

      setLoaded('error');
    };

    return () => {
      active = false;
    };
  }, [src, srcSet]);
  return loaded;
}

const Avatar = /*#__PURE__*/React.forwardRef(function Avatar(props, ref) {
  const {
    alt,
    children: childrenProp,
    classes,
    className,
    component: Component = 'div',
    imgProps,
    sizes,
    src,
    srcSet,
    variant = 'circular'
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, ["alt", "children", "classes", "className", "component", "imgProps", "sizes", "src", "srcSet", "variant"]);
  const themeVariantsClasses = (0, _styles.useThemeVariants)((0, _extends2.default)({}, props, {
    component: Component,
    variant
  }), 'MuiAvatar');
  let children = null; // Use a hook instead of onError on the img element to support server-side rendering.

  const loaded = useLoaded({
    src,
    srcSet
  });
  const hasImg = src || srcSet;
  const hasImgNotFailing = hasImg && loaded !== 'error';

  if (hasImgNotFailing) {
    children = /*#__PURE__*/React.createElement("img", (0, _extends2.default)({
      alt: alt,
      src: src,
      srcSet: srcSet,
      sizes: sizes,
      className: classes.img
    }, imgProps));
  } else if (childrenProp != null) {
    children = childrenProp;
  } else if (hasImg && alt) {
    children = alt[0];
  } else {
    children = /*#__PURE__*/React.createElement(_Person.default, {
      className: classes.fallback
    });
  }

  return /*#__PURE__*/React.createElement(Component, (0, _extends2.default)({
    className: (0, _clsx.default)(classes.root, classes.system, classes[variant], themeVariantsClasses, className, !hasImgNotFailing && classes.colorDefault),
    ref: ref
  }, other), children);
});
process.env.NODE_ENV !== "production" ? Avatar.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * Used in combination with `src` or `srcSet` to
   * provide an alt attribute for the rendered `img` element.
   */
  alt: _propTypes.default.string,

  /**
   * Used to render icon or text elements inside the Avatar if `src` is not set.
   * This can be an element, or just a string.
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
   * Attributes applied to the `img` element if the component is used to display an image.
   * It can be used to listen for the loading error event.
   */
  imgProps: _propTypes.default.object,

  /**
   * The `sizes` attribute for the `img` element.
   */
  sizes: _propTypes.default.string,

  /**
   * The `src` attribute for the `img` element.
   */
  src: _propTypes.default.string,

  /**
   * The `srcSet` attribute for the `img` element.
   * Use this attribute for responsive image display.
   */
  srcSet: _propTypes.default.string,

  /**
   * The shape of the avatar.
   * @default 'circular'
   */
  variant: _propTypes.default
  /* @typescript-to-proptypes-ignore */
  .oneOfType([_propTypes.default.oneOf(['circular', 'rounded', 'square']), _propTypes.default.string])
} : void 0;

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiAvatar'
})(Avatar);

exports.default = _default;