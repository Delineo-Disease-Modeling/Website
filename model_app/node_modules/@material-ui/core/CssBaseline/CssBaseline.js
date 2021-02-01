import _extends from "@babel/runtime/helpers/esm/extends";
import * as React from 'react';
import PropTypes from 'prop-types';
import { exactProp } from '@material-ui/utils';
import withStyles from '../styles/withStyles';
export const html = {
  WebkitFontSmoothing: 'antialiased',
  // Antialiasing.
  MozOsxFontSmoothing: 'grayscale',
  // Antialiasing.
  // Change from `box-sizing: content-box` so that `width`
  // is not affected by `padding` or `border`.
  boxSizing: 'border-box',
  // Fix font resize problem in iOS
  WebkitTextSizeAdjust: '100%'
};
export const body = theme => _extends({
  color: theme.palette.text.primary
}, theme.typography.body2, {
  backgroundColor: theme.palette.background.default,
  '@media print': {
    // Save printer ink.
    backgroundColor: theme.palette.common.white
  }
});
export const styles = theme => ({
  '@global': {
    html,
    '*, *::before, *::after': {
      boxSizing: 'inherit'
    },
    'strong, b': {
      fontWeight: theme.typography.fontWeightBold
    },
    body: _extends({
      margin: 0
    }, body(theme), {
      // Add support for document.body.requestFullScreen().
      // Other elements, if background transparent, are not supported.
      '&::backdrop': {
        backgroundColor: theme.palette.background.default
      }
    })
  }
});
/**
 * Kickstart an elegant, consistent, and simple baseline to build upon.
 */

function CssBaseline(props) {
  const {
    children = null
  } = props;
  return /*#__PURE__*/React.createElement(React.Fragment, null, children);
}

process.env.NODE_ENV !== "production" ? CssBaseline.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * You can wrap a node.
   * @default null
   */
  children: PropTypes.node
} : void 0;

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line no-useless-concat
  CssBaseline['propTypes' + ''] = exactProp(_extends({}, CssBaseline.propTypes, {
    // classes is injected by withStyles but .propTypes on the actual component are part of the public API
    classes: PropTypes.any
  }));
}

export default withStyles(styles, {
  name: 'MuiCssBaseline'
})(CssBaseline);