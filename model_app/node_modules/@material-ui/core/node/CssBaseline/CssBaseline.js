"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = exports.body = exports.html = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("@material-ui/utils");

var _withStyles = _interopRequireDefault(require("../styles/withStyles"));

const html = {
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
exports.html = html;

const body = theme => (0, _extends2.default)({
  color: theme.palette.text.primary
}, theme.typography.body2, {
  backgroundColor: theme.palette.background.default,
  '@media print': {
    // Save printer ink.
    backgroundColor: theme.palette.common.white
  }
});

exports.body = body;

const styles = theme => ({
  '@global': {
    html,
    '*, *::before, *::after': {
      boxSizing: 'inherit'
    },
    'strong, b': {
      fontWeight: theme.typography.fontWeightBold
    },
    body: (0, _extends2.default)({
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


exports.styles = styles;

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
  children: _propTypes.default.node
} : void 0;

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line no-useless-concat
  CssBaseline['propTypes' + ''] = (0, _utils.exactProp)((0, _extends2.default)({}, CssBaseline.propTypes, {
    // classes is injected by withStyles but .propTypes on the actual component are part of the public API
    classes: _propTypes.default.any
  }));
}

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiCssBaseline'
})(CssBaseline);

exports.default = _default;