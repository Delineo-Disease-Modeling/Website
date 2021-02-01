import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useThemeVariants } from '@material-ui/styles';
import withStyles from '../styles/withStyles';
import { alpha } from '../styles/colorManipulator';
export var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      margin: 0,
      // Reset browser default style.
      flexShrink: 0,
      borderWidth: 0,
      borderStyle: 'solid',
      borderColor: theme.palette.divider,
      borderBottomWidth: 'thin'
    },

    /* Styles applied to the root element if `absolute={true}`. */
    absolute: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%'
    },

    /* Styles applied to the root element if `variant="inset"`. */
    inset: {
      marginLeft: 72
    },

    /* Styles applied to the root element if `variant="fullWidth"`. */
    fullWidth: {},

    /* Styles applied to the root element if `light={true}`. */
    light: {
      borderColor: alpha(theme.palette.divider, 0.08)
    },

    /* Styles applied to the root element if `variant="middle"`. */
    middle: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2)
    },

    /* Styles applied to the root element if `orientation="vertical"`. */
    vertical: {
      height: '100%',
      borderBottomWidth: 0,
      borderRightWidth: 'thin'
    },

    /* Styles applied to the root element if `flexItem={true}`. */
    flexItem: {
      alignSelf: 'stretch',
      height: 'auto'
    },

    /* Styles applied to the root element if divider have text. */
    withChildren: {
      display: 'flex',
      whiteSpace: 'nowrap',
      textAlign: 'center',
      border: 0,
      '&::before, &::after': {
        position: 'relative',
        width: '100%',
        borderColor: theme.palette.divider,
        borderTop: 'thin',
        borderLeft: 0,
        borderRight: 0,
        borderBottom: 0,
        borderStyle: 'solid',
        top: '50%',
        content: '""',
        transform: 'translateY(50%)'
      }
    },

    /* Styles applied to the root element if divider have text and `orientation="vertical"`. */
    withChildrenVertical: {
      flexDirection: 'column',
      '&::before, &::after': {
        height: '100%',
        top: '0%',
        left: '50%',
        borderColor: theme.palette.divider,
        borderTop: 0,
        borderLeft: 'thin',
        borderStyle: 'solid',
        transform: 'translateX(0%)'
      }
    },

    /* Styles applied to the root element if `textAlign="right" orientation="horizontal"`. */
    textAlignRight: {
      '&::before': {
        width: '90%'
      },
      '&::after': {
        width: '10%'
      }
    },

    /* Styles applied to the root element if `textAlign="left" orientation="horizontal"`. */
    textAlignLeft: {
      '&::before': {
        width: '10%'
      },
      '&::after': {
        width: '90%'
      }
    },

    /* Styles applied to the span children element if `orientation="horizontal"`. */
    wrapper: {
      display: 'inline-block',
      paddingLeft: theme.spacing(1.2),
      paddingRight: theme.spacing(1.2)
    },

    /* Styles applied to the span children element if `orientation="vertical"`. */
    wrapperVertical: {
      paddingTop: theme.spacing(1.2),
      paddingBottom: theme.spacing(1.2)
    }
  };
};
var Divider = /*#__PURE__*/React.forwardRef(function Divider(props, ref) {
  var _props$absolute = props.absolute,
      absolute = _props$absolute === void 0 ? false : _props$absolute,
      classes = props.classes,
      className = props.className,
      children = props.children,
      _props$component = props.component,
      Component = _props$component === void 0 ? children ? 'div' : 'hr' : _props$component,
      _props$flexItem = props.flexItem,
      flexItem = _props$flexItem === void 0 ? false : _props$flexItem,
      _props$light = props.light,
      light = _props$light === void 0 ? false : _props$light,
      _props$orientation = props.orientation,
      orientation = _props$orientation === void 0 ? 'horizontal' : _props$orientation,
      _props$role = props.role,
      role = _props$role === void 0 ? Component !== 'hr' ? 'separator' : undefined : _props$role,
      _props$textAlign = props.textAlign,
      textAlign = _props$textAlign === void 0 ? 'center' : _props$textAlign,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'fullWidth' : _props$variant,
      other = _objectWithoutProperties(props, ["absolute", "classes", "className", "children", "component", "flexItem", "light", "orientation", "role", "textAlign", "variant"]);

  var themeVariantsClasses = useThemeVariants(_extends({}, props, {
    absolute: absolute,
    component: Component,
    flexItem: flexItem,
    light: light,
    orientation: orientation,
    role: role,
    textAlign: textAlign,
    variant: variant
  }), 'MuiDivider');
  return /*#__PURE__*/React.createElement(Component, _extends({
    className: clsx(classes.root, classes[variant], themeVariantsClasses, className, orientation === 'vertical' ? [classes.vertical, children && classes.withChildrenVertical] : {
      'right': classes.textAlignRight,
      'left': classes.textAlignLeft
    }[textAlign], absolute && classes.absolute, flexItem && classes.flexItem, light && classes.light, children && classes.withChildren),
    role: role,
    ref: ref
  }, other), children ? /*#__PURE__*/React.createElement("span", {
    className: clsx(classes.wrapper, orientation === 'vertical' && classes.wrapperVertical)
  }, children) : null);
});
process.env.NODE_ENV !== "production" ? Divider.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * Absolutely position the element.
   * @default false
   */
  absolute: PropTypes.bool,

  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,

  /**
   * If `true`, a vertical divider will have the correct height when used in flex container.
   * (By default, a vertical divider will have a calculated height of `0px` if it is the child of a flex container.)
   * @default false
   */
  flexItem: PropTypes.bool,

  /**
   * If `true`, the divider will have a lighter color.
   * @default false
   */
  light: PropTypes.bool,

  /**
   * The divider orientation.
   * @default 'horizontal'
   */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),

  /**
   * @ignore
   */
  role: PropTypes.string,

  /**
   * The text alignment.
   * @default 'center'
   */
  textAlign: PropTypes.oneOf(['center', 'left', 'right']),

  /**
   * The variant to use.
   * @default 'fullWidth'
   */
  variant: PropTypes
  /* @typescript-to-proptypes-ignore */
  .oneOfType([PropTypes.oneOf(['fullWidth', 'inset', 'middle']), PropTypes.string])
} : void 0;
export default withStyles(styles, {
  name: 'MuiDivider'
})(Divider);