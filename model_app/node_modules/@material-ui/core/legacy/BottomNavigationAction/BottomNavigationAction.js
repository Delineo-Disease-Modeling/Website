import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import withStyles from '../styles/withStyles';
import ButtonBase from '../ButtonBase';
import unsupportedProp from '../utils/unsupportedProp';
export var styles = function styles(theme) {
  return {
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
  };
};
var BottomNavigationAction = /*#__PURE__*/React.forwardRef(function BottomNavigationAction(props, ref) {
  var classes = props.classes,
      className = props.className,
      icon = props.icon,
      label = props.label,
      onChange = props.onChange,
      onTouchStart = props.onTouchStart,
      onTouchEnd = props.onTouchEnd,
      onClick = props.onClick,
      selected = props.selected,
      showLabel = props.showLabel,
      value = props.value,
      other = _objectWithoutProperties(props, ["classes", "className", "icon", "label", "onChange", "onTouchStart", "onTouchEnd", "onClick", "selected", "showLabel", "value"]);

  var touchStartPos = React.useRef();
  var touchTimer = React.useRef();
  React.useEffect(function () {
    return function () {
      clearTimeout(touchTimer.current);
    };
  }, [touchTimer]);

  var handleTouchStart = function handleTouchStart(event) {
    if (onTouchStart) {
      onTouchStart(event);
    }

    var _event$touches$ = event.touches[0],
        clientX = _event$touches$.clientX,
        clientY = _event$touches$.clientY;
    touchStartPos.current = {
      clientX: clientX,
      clientY: clientY
    };
  };

  var handleTouchEnd = function handleTouchEnd(event) {
    if (onTouchEnd) onTouchEnd(event);
    var target = event.target;
    var _event$changedTouches = event.changedTouches[0],
        clientX = _event$changedTouches.clientX,
        clientY = _event$changedTouches.clientY;

    if (Math.abs(clientX - touchStartPos.current.clientX) < 10 && Math.abs(clientY - touchStartPos.current.clientY) < 10) {
      touchTimer.current = setTimeout(function () {
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

  var handleChange = function handleChange(event) {
    clearTimeout(touchTimer.current);

    if (onChange) {
      onChange(event, value);
    }

    if (onClick) {
      onClick(event);
    }
  };

  return /*#__PURE__*/React.createElement(ButtonBase, _extends({
    ref: ref,
    className: clsx(classes.root, className, selected ? classes.selected : !showLabel && classes.iconOnly),
    focusRipple: true,
    onClick: handleChange,
    onTouchStart: handleTouchStart,
    onTouchEnd: handleTouchEnd
  }, other), /*#__PURE__*/React.createElement("span", {
    className: classes.wrapper
  }, icon, /*#__PURE__*/React.createElement("span", {
    className: clsx(classes.label, selected ? classes.selected : !showLabel && classes.iconOnly)
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
  children: unsupportedProp,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * The icon element.
   */
  icon: PropTypes.node,

  /**
   * The label element.
   */
  label: PropTypes.node,

  /**
   * @ignore
   */
  onChange: PropTypes.func,

  /**
   * @ignore
   */
  onClick: PropTypes.func,

  /**
   * @ignore
   */
  onTouchEnd: PropTypes.func,

  /**
   * @ignore
   */
  onTouchStart: PropTypes.func,

  /**
   * If `true`, the `BottomNavigationAction` will show its label.
   * By default, only the selected `BottomNavigationAction`
   * inside `BottomNavigation` will show its label.
   *
   * The prop defaults to the value (`false`) inherited from the parent BottomNavigation component.
   */
  showLabel: PropTypes.bool,

  /**
   * You can provide your own value. Otherwise, we fallback to the child position index.
   */
  value: PropTypes.any
} : void 0;
export default withStyles(styles, {
  name: 'MuiBottomNavigationAction'
})(BottomNavigationAction);