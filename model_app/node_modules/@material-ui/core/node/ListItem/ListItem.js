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

var _utils = require("@material-ui/utils");

var _withStyles = _interopRequireDefault(require("../styles/withStyles"));

var _colorManipulator = require("../styles/colorManipulator");

var _ButtonBase = _interopRequireDefault(require("../ButtonBase"));

var _isMuiElement = _interopRequireDefault(require("../utils/isMuiElement"));

var _useEnhancedEffect = _interopRequireDefault(require("../utils/useEnhancedEffect"));

var _useForkRef = _interopRequireDefault(require("../utils/useForkRef"));

var _ListContext = _interopRequireDefault(require("../List/ListContext"));

const styles = theme => ({
  /* Styles applied to the (normally root) `component` element. May be wrapped by a `container`. */
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
    textDecoration: 'none',
    width: '100%',
    boxSizing: 'border-box',
    textAlign: 'left',
    paddingTop: 8,
    paddingBottom: 8,
    '&$focusVisible': {
      backgroundColor: theme.palette.action.focus
    },
    '&$selected': {
      backgroundColor: (0, _colorManipulator.alpha)(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      '&$focusVisible': {
        backgroundColor: (0, _colorManipulator.alpha)(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
      }
    },
    '&$disabled': {
      opacity: theme.palette.action.disabledOpacity
    }
  },

  /* Styles applied to the `container` element if `children` includes `ListItemSecondaryAction`. */
  container: {
    position: 'relative'
  },

  /* Pseudo-class applied to the `component`'s `focusVisibleClassName` prop if `button={true}`. */
  focusVisible: {},

  /* Styles applied to the `component` element if dense. */
  dense: {
    paddingTop: 4,
    paddingBottom: 4
  },

  /* Styles applied to the `component` element if `alignItems="flex-start"`. */
  alignItemsFlexStart: {
    alignItems: 'flex-start'
  },

  /* Pseudo-class applied to the inner `component` element if `disabled={true}`. */
  disabled: {},

  /* Styles applied to the inner `component` element if `divider={true}`. */
  divider: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundClip: 'padding-box'
  },

  /* Styles applied to the inner `component` element unless `disableGutters={true}`. */
  gutters: {
    paddingLeft: 16,
    paddingRight: 16
  },

  /* Styles applied to the inner `component` element if `button={true}`. */
  button: {
    transition: theme.transitions.create('background-color', {
      duration: theme.transitions.duration.shortest
    }),
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: theme.palette.action.hover,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    },
    '&$selected:hover': {
      backgroundColor: (0, _colorManipulator.alpha)(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: (0, _colorManipulator.alpha)(theme.palette.primary.main, theme.palette.action.selectedOpacity)
      }
    }
  },

  /* Styles applied to the `component` element if `children` includes `ListItemSecondaryAction`. */
  secondaryAction: {
    // Add some space to avoid collision as `ListItemSecondaryAction`
    // is absolutely positioned.
    paddingRight: 48
  },

  /* Pseudo-class applied to the root element if `selected={true}`. */
  selected: {}
});
/**
 * Uses an additional container component if `ListItemSecondaryAction` is the last child.
 */


exports.styles = styles;
const ListItem = /*#__PURE__*/React.forwardRef(function ListItem(props, ref) {
  const {
    alignItems = 'center',
    autoFocus = false,
    button = false,
    children: childrenProp,
    classes,
    className,
    component: componentProp,
    ContainerComponent = 'li',
    ContainerProps: {
      className: ContainerClassName
    } = {},
    dense = false,
    disabled = false,
    disableGutters = false,
    divider = false,
    focusVisibleClassName,
    selected = false
  } = props,
        ContainerProps = (0, _objectWithoutPropertiesLoose2.default)(props.ContainerProps, ["className"]),
        other = (0, _objectWithoutPropertiesLoose2.default)(props, ["alignItems", "autoFocus", "button", "children", "classes", "className", "component", "ContainerComponent", "ContainerProps", "dense", "disabled", "disableGutters", "divider", "focusVisibleClassName", "selected"]);
  const context = React.useContext(_ListContext.default);
  const childContext = {
    dense: dense || context.dense || false,
    alignItems,
    disableGutters
  };
  const listItemRef = React.useRef(null);
  (0, _useEnhancedEffect.default)(() => {
    if (autoFocus) {
      if (listItemRef.current) {
        listItemRef.current.focus();
      } else if (process.env.NODE_ENV !== 'production') {
        console.error('Material-UI: Unable to set focus to a ListItem whose component has not been rendered.');
      }
    }
  }, [autoFocus]);
  const children = React.Children.toArray(childrenProp);
  const hasSecondaryAction = children.length && (0, _isMuiElement.default)(children[children.length - 1], ['ListItemSecondaryAction']);
  const handleRef = (0, _useForkRef.default)(listItemRef, ref);
  const componentProps = (0, _extends2.default)({
    className: (0, _clsx.default)(classes.root, className, childContext.dense && classes.dense, !disableGutters && classes.gutters, divider && classes.divider, disabled && classes.disabled, button && classes.button, alignItems !== "center" && classes.alignItemsFlexStart, hasSecondaryAction && classes.secondaryAction, selected && classes.selected),
    disabled
  }, other);
  let Component = componentProp || 'li';

  if (button) {
    componentProps.component = componentProp || 'div';
    componentProps.focusVisibleClassName = (0, _clsx.default)(classes.focusVisible, focusVisibleClassName);
    Component = _ButtonBase.default;
  }

  if (hasSecondaryAction) {
    // Use div by default.
    Component = !componentProps.component && !componentProp ? 'div' : Component; // Avoid nesting of li > li.

    if (ContainerComponent === 'li') {
      if (Component === 'li') {
        Component = 'div';
      } else if (componentProps.component === 'li') {
        componentProps.component = 'div';
      }
    }

    return /*#__PURE__*/React.createElement(_ListContext.default.Provider, {
      value: childContext
    }, /*#__PURE__*/React.createElement(ContainerComponent, (0, _extends2.default)({
      className: (0, _clsx.default)(classes.container, ContainerClassName),
      ref: handleRef
    }, ContainerProps), /*#__PURE__*/React.createElement(Component, componentProps, children), children.pop()));
  }

  return /*#__PURE__*/React.createElement(_ListContext.default.Provider, {
    value: childContext
  }, /*#__PURE__*/React.createElement(Component, (0, _extends2.default)({
    ref: handleRef
  }, componentProps), children));
});
process.env.NODE_ENV !== "production" ? ListItem.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * Defines the `align-items` style property.
   * @default 'center'
   */
  alignItems: _propTypes.default.oneOf(['center', 'flex-start']),

  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus: _propTypes.default.bool,

  /**
   * If `true`, the list item is a button (using `ButtonBase`). Props intended
   * for `ButtonBase` can then be applied to `ListItem`.
   * @default false
   */
  button: _propTypes.default.bool,

  /**
   * The content of the component. If a `ListItemSecondaryAction` is used it must
   * be the last child.
   */
  children: (0, _utils.chainPropTypes)(_propTypes.default.node, props => {
    const children = React.Children.toArray(props.children); // React.Children.toArray(props.children).findLastIndex(isListItemSecondaryAction)

    let secondaryActionIndex = -1;

    for (let i = children.length - 1; i >= 0; i -= 1) {
      const child = children[i];

      if ((0, _isMuiElement.default)(child, ['ListItemSecondaryAction'])) {
        secondaryActionIndex = i;
        break;
      }
    } //  is ListItemSecondaryAction the last child of ListItem


    if (secondaryActionIndex !== -1 && secondaryActionIndex !== children.length - 1) {
      return new Error('Material-UI: You used an element after ListItemSecondaryAction. ' + 'For ListItem to detect that it has a secondary action ' + 'you must pass it as the last child to ListItem.');
    }

    return null;
  }),

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
   * The container component used when a `ListItemSecondaryAction` is the last child.
   * @default 'li'
   */
  ContainerComponent: _utils.elementTypeAcceptingRef,

  /**
   * Props applied to the container component if used.
   * @default {}
   */
  ContainerProps: _propTypes.default.object,

  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent List component.
   * @default false
   */
  dense: _propTypes.default.bool,

  /**
   * If `true`, the list item is disabled.
   * @default false
   */
  disabled: _propTypes.default.bool,

  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: _propTypes.default.bool,

  /**
   * If `true`, a 1px light border is added to the bottom of the list item.
   * @default false
   */
  divider: _propTypes.default.bool,

  /**
   * @ignore
   */
  focusVisibleClassName: _propTypes.default.string,

  /**
   * Use to apply selected styling.
   * @default false
   */
  selected: _propTypes.default.bool
} : void 0;

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiListItem'
})(ListItem);

exports.default = _default;