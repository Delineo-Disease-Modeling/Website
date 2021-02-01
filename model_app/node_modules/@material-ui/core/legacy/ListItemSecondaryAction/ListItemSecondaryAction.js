import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import ListContext from '../List/ListContext';
import withStyles from '../styles/withStyles';
export var styles = {
  /* Styles applied to the root element. */
  root: {
    position: 'absolute',
    right: 16,
    top: '50%',
    transform: 'translateY(-50%)'
  },

  /* Styles applied to the root element when the parent `ListItem` has `disableGutters={true}`. */
  disableGutters: {
    right: 0
  }
};
/**
 * Must be used as the last child of ListItem to function properly.
 */

var ListItemSecondaryAction = /*#__PURE__*/React.forwardRef(function ListItemSecondaryAction(props, ref) {
  var classes = props.classes,
      className = props.className,
      other = _objectWithoutProperties(props, ["classes", "className"]);

  var context = React.useContext(ListContext);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: clsx(classes.root, className, context.disableGutters && classes.disableGutters),
    ref: ref
  }, other));
});
process.env.NODE_ENV !== "production" ? ListItemSecondaryAction.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component, normally an `IconButton` or selection control.
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * @ignore
   */
  className: PropTypes.string
} : void 0;
ListItemSecondaryAction.muiName = 'ListItemSecondaryAction';
export default withStyles(styles, {
  name: 'MuiListItemSecondaryAction'
})(ListItemSecondaryAction);