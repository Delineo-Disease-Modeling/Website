import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import * as React from 'react';
import PropTypes from 'prop-types';
import { isFragment } from 'react-is';
import clsx from 'clsx';
import { chainPropTypes } from '@material-ui/utils';
import { withStyles } from '../styles';
import Avatar from '../Avatar';
var SPACINGS = {
  small: -16,
  medium: null
};
export var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'flex',
      flexDirection: 'row-reverse'
    },

    /* Styles applied to the avatar elements. */
    avatar: {
      border: "2px solid ".concat(theme.palette.background.default),
      boxSizing: 'content-box',
      marginLeft: -8,
      '&:last-child': {
        marginLeft: 0
      }
    }
  };
};
var AvatarGroup = /*#__PURE__*/React.forwardRef(function AvatarGroup(props, ref) {
  var childrenProp = props.children,
      classes = props.classes,
      className = props.className,
      _props$max = props.max,
      max = _props$max === void 0 ? 5 : _props$max,
      _props$spacing = props.spacing,
      spacing = _props$spacing === void 0 ? 'medium' : _props$spacing,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'circular' : _props$variant,
      other = _objectWithoutProperties(props, ["children", "classes", "className", "max", "spacing", "variant"]);

  var clampedMax = max < 2 ? 2 : max;
  var children = React.Children.toArray(childrenProp).filter(function (child) {
    if (process.env.NODE_ENV !== 'production') {
      if (isFragment(child)) {
        console.error(["Material-UI: The AvatarGroup component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
      }
    }

    return /*#__PURE__*/React.isValidElement(child);
  });
  var extraAvatars = children.length > clampedMax ? children.length - clampedMax + 1 : 0;
  var marginLeft = spacing && SPACINGS[spacing] !== undefined ? SPACINGS[spacing] : -spacing;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: clsx(classes.root, className),
    ref: ref
  }, other), extraAvatars ? /*#__PURE__*/React.createElement(Avatar, {
    className: classes.avatar,
    style: {
      marginLeft: marginLeft
    },
    variant: variant
  }, "+", extraAvatars) : null, children.slice(0, children.length - extraAvatars).reverse().map(function (child) {
    return /*#__PURE__*/React.cloneElement(child, {
      className: clsx(child.props.className, classes.avatar),
      style: _extends({
        marginLeft: marginLeft
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
   * Max avatars to show before +x.
   * @default 5
   */
  max: chainPropTypes(PropTypes.number, function (props) {
    if (props.max < 2) {
      throw new Error(['Material-UI: The prop `max` should be equal to 2 or above.', 'A value below is clamped to 2.'].join('\n'));
    }
  }),

  /**
   * Spacing between avatars.
   * @default 'medium'
   */
  spacing: PropTypes.oneOfType([PropTypes.oneOf(['medium', 'small']), PropTypes.number]),

  /**
   * The shape of the avatars.
   * @default 'circular'
   */
  variant: PropTypes
  /* @typescript-to-proptypes-ignore */
  .oneOfType([PropTypes.oneOf(['circular', 'rounded', 'square']), PropTypes.string])
} : void 0;
export default withStyles(styles, {
  name: 'MuiAvatarGroup'
})(AvatarGroup);