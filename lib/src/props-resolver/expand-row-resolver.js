"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (ExtendBase) {
  return function (_ExtendBase) {
    _inherits(ExpandRowResolver, _ExtendBase);

    function ExpandRowResolver() {
      _classCallCheck(this, ExpandRowResolver);

      return _possibleConstructorReturn(this, (ExpandRowResolver.__proto__ || Object.getPrototypeOf(ExpandRowResolver)).apply(this, arguments));
    }

    _createClass(ExpandRowResolver, [{
      key: "resolveExpandRowProps",
      value: function resolveExpandRowProps() {
        var _props = this.props,
            expandRow = _props.expandRow,
            expanded = _props.expanded,
            onRowExpand = _props.onRowExpand,
            onAllRowExpand = _props.onAllRowExpand,
            isAnyExpands = _props.isAnyExpands;

        if (expandRow) {
          return _extends({}, expandRow, {
            expanded: expanded,
            onRowExpand: onRowExpand,
            onAllRowExpand: onAllRowExpand,
            isAnyExpands: isAnyExpands,
            nonExpandable: expandRow.nonExpandable || []
          });
        }
        return null;
      }
    }]);

    return ExpandRowResolver;
  }(ExtendBase);
};