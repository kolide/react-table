'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactTableDefaults = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _lifecycle = require('./lifecycle');

var _lifecycle2 = _interopRequireDefault(_lifecycle);

var _methods = require('./methods');

var _methods2 = _interopRequireDefault(_methods);

var _defaultProps = require('./defaultProps');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

var _propTypes = require('./propTypes');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//


var ReactTableDefaults = exports.ReactTableDefaults = _defaultProps2.default;

var ReactTable = function (_Methods) {
  _inherits(ReactTable, _Methods);

  function ReactTable(props) {
    _classCallCheck(this, ReactTable);

    var _this = _possibleConstructorReturn(this, (ReactTable.__proto__ || Object.getPrototypeOf(ReactTable)).call(this));

    _this.getResolvedState = _this.getResolvedState.bind(_this);
    _this.getDataModel = _this.getDataModel.bind(_this);
    _this.getSortedData = _this.getSortedData.bind(_this);
    _this.fireFetchData = _this.fireFetchData.bind(_this);
    _this.getPropOrState = _this.getPropOrState.bind(_this);
    _this.getStateOrProp = _this.getStateOrProp.bind(_this);
    _this.filterData = _this.filterData.bind(_this);
    _this.sortData = _this.sortData.bind(_this);
    _this.getMinRows = _this.getMinRows.bind(_this);
    _this.onPageChange = _this.onPageChange.bind(_this);
    _this.onPageSizeChange = _this.onPageSizeChange.bind(_this);
    _this.sortColumn = _this.sortColumn.bind(_this);
    _this.filterColumn = _this.filterColumn.bind(_this);
    _this.resizeColumnStart = _this.resizeColumnStart.bind(_this);
    _this.resizeColumnEnd = _this.resizeColumnEnd.bind(_this);
    _this.resizeColumnMoving = _this.resizeColumnMoving.bind(_this);

    _this.state = {
      page: 0,
      pageSize: props.defaultPageSize,
      sorted: props.defaultSorted,
      expanded: props.defaultExpanded,
      filtered: props.defaultFiltered,
      resized: props.defaultResized,
      currentlyResizing: false,
      skipNextSort: false
    };
    return _this;
  }

  _createClass(ReactTable, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var resolvedState = this.getResolvedState();
      var children = resolvedState.children,
          className = resolvedState.className,
          style = resolvedState.style,
          hasMaxWidth = resolvedState.hasMaxWidth,
          getProps = resolvedState.getProps,
          getTableProps = resolvedState.getTableProps,
          getTheadGroupProps = resolvedState.getTheadGroupProps,
          getTheadGroupTrProps = resolvedState.getTheadGroupTrProps,
          getTheadGroupThProps = resolvedState.getTheadGroupThProps,
          getTheadProps = resolvedState.getTheadProps,
          getTheadTrProps = resolvedState.getTheadTrProps,
          getTheadThProps = resolvedState.getTheadThProps,
          getTheadFilterProps = resolvedState.getTheadFilterProps,
          getTheadFilterTrProps = resolvedState.getTheadFilterTrProps,
          getTheadFilterThProps = resolvedState.getTheadFilterThProps,
          getTbodyProps = resolvedState.getTbodyProps,
          getTrGroupProps = resolvedState.getTrGroupProps,
          getTrProps = resolvedState.getTrProps,
          getTdProps = resolvedState.getTdProps,
          getTfootProps = resolvedState.getTfootProps,
          getTfootTrProps = resolvedState.getTfootTrProps,
          getTfootTdProps = resolvedState.getTfootTdProps,
          getPaginationProps = resolvedState.getPaginationProps,
          getLoadingProps = resolvedState.getLoadingProps,
          getNoDataProps = resolvedState.getNoDataProps,
          getResizerProps = resolvedState.getResizerProps,
          showPagination = resolvedState.showPagination,
          showPaginationTop = resolvedState.showPaginationTop,
          showPaginationBottom = resolvedState.showPaginationBottom,
          manual = resolvedState.manual,
          loadingText = resolvedState.loadingText,
          noDataText = resolvedState.noDataText,
          sortable = resolvedState.sortable,
          multiSort = resolvedState.multiSort,
          resizable = resolvedState.resizable,
          filterable = resolvedState.filterable,
          pivotIDKey = resolvedState.pivotIDKey,
          pivotValKey = resolvedState.pivotValKey,
          pivotBy = resolvedState.pivotBy,
          subRowsKey = resolvedState.subRowsKey,
          aggregatedKey = resolvedState.aggregatedKey,
          originalKey = resolvedState.originalKey,
          indexKey = resolvedState.indexKey,
          groupedByPivotKey = resolvedState.groupedByPivotKey,
          loading = resolvedState.loading,
          pageSize = resolvedState.pageSize,
          page = resolvedState.page,
          sorted = resolvedState.sorted,
          filtered = resolvedState.filtered,
          resized = resolvedState.resized,
          expanded = resolvedState.expanded,
          pages = resolvedState.pages,
          onExpandedChange = resolvedState.onExpandedChange,
          TableComponent = resolvedState.TableComponent,
          TheadComponent = resolvedState.TheadComponent,
          TbodyComponent = resolvedState.TbodyComponent,
          TrGroupComponent = resolvedState.TrGroupComponent,
          TrComponent = resolvedState.TrComponent,
          ThComponent = resolvedState.ThComponent,
          TdComponent = resolvedState.TdComponent,
          TfootComponent = resolvedState.TfootComponent,
          PaginationComponent = resolvedState.PaginationComponent,
          LoadingComponent = resolvedState.LoadingComponent,
          SubComponent = resolvedState.SubComponent,
          NoDataComponent = resolvedState.NoDataComponent,
          ResizerComponent = resolvedState.ResizerComponent,
          ExpanderComponent = resolvedState.ExpanderComponent,
          PivotValueComponent = resolvedState.PivotValueComponent,
          PivotComponent = resolvedState.PivotComponent,
          AggregatedComponent = resolvedState.AggregatedComponent,
          FilterComponent = resolvedState.FilterComponent,
          PadRowComponent = resolvedState.PadRowComponent,
          resolvedData = resolvedState.resolvedData,
          allVisibleColumns = resolvedState.allVisibleColumns,
          headerGroups = resolvedState.headerGroups,
          hasHeaderGroups = resolvedState.hasHeaderGroups,
          sortedData = resolvedState.sortedData,
          currentlyResizing = resolvedState.currentlyResizing;

      // Pagination

      var startRow = pageSize * page;
      var endRow = startRow + pageSize;
      var pageRows = manual ? resolvedData : sortedData.slice(startRow, endRow);
      var minRows = this.getMinRows();
      var padRows = _utils2.default.range(Math.max(minRows - pageRows.length, 0));

      var hasColumnFooter = allVisibleColumns.some(function (d) {
        return d.Footer;
      });
      var hasFilters = filterable || allVisibleColumns.some(function (d) {
        return d.filterable;
      });

      var recurseRowsViewIndex = function recurseRowsViewIndex(rows) {
        var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
        return [rows.map(function (row, i) {
          index += 1;
          var rowWithViewIndex = _extends({}, row, {
            _viewIndex: index
          });
          var newPath = path.concat([i]);
          if (rowWithViewIndex[subRowsKey] && _utils2.default.get(expanded, newPath)) {
            var _recurseRowsViewIndex = recurseRowsViewIndex(rowWithViewIndex[subRowsKey], newPath, index);

            var _recurseRowsViewIndex2 = _slicedToArray(_recurseRowsViewIndex, 2);

            rowWithViewIndex[subRowsKey] = _recurseRowsViewIndex2[0];
            index = _recurseRowsViewIndex2[1];
          }
          return rowWithViewIndex;
        }), index];
      };
      var _recurseRowsViewIndex3 = recurseRowsViewIndex(pageRows);

      var _recurseRowsViewIndex4 = _slicedToArray(_recurseRowsViewIndex3, 1);

      pageRows = _recurseRowsViewIndex4[0];


      var canPrevious = page > 0;
      var canNext = page + 1 < pages;

      var rowMinWidth = _utils2.default.sum(allVisibleColumns.map(function (d) {
        var resizedColumn = resized.find(function (x) {
          return x.id === d.id;
        }) || {};
        return _utils2.default.getFirstDefined(resizedColumn.value, d.width, d.minWidth);
      }));

      var rowIndex = -1;

      var finalState = _extends({}, resolvedState, {
        startRow: startRow,
        endRow: endRow,
        pageRows: pageRows,
        minRows: minRows,
        padRows: padRows,
        hasColumnFooter: hasColumnFooter,
        canPrevious: canPrevious,
        canNext: canNext,
        rowMinWidth: rowMinWidth
      });

      var rootProps = _utils2.default.splitProps(getProps(finalState, undefined, undefined, this));
      var tableProps = _utils2.default.splitProps(getTableProps(finalState, undefined, undefined, this));
      var tBodyProps = _utils2.default.splitProps(getTbodyProps(finalState, undefined, undefined, this));
      var loadingProps = getLoadingProps(finalState, undefined, undefined, this);
      var noDataProps = getNoDataProps(finalState, undefined, undefined, this);
      var resizerProps = getResizerProps(finalState, undefined, undefined, this);

      // Visual Components

      var makeHeaderGroup = function makeHeaderGroup(column, i) {
        var resizedValue = function resizedValue(col) {
          return (resized.find(function (x) {
            return x.id === col.id;
          }) || {}).value;
        };
        var flex = _utils2.default.sum(column.columns.map(function (col) {
          return col.width || resizedValue(col) ? 0 : col.minWidth;
        }));
        var width = _utils2.default.sum(column.columns.map(function (col) {
          return _utils2.default.getFirstDefined(resizedValue(col), col.width, col.minWidth);
        }));
        var maxWidth = _utils2.default.sum(column.columns.map(function (col) {
          return _utils2.default.getFirstDefined(resizedValue(col), col.width, col.maxWidth);
        }));

        var theadGroupThProps = _utils2.default.splitProps(getTheadGroupThProps(finalState, undefined, column, _this2));
        var columnHeaderProps = _utils2.default.splitProps(column.getHeaderProps(finalState, undefined, column, _this2));

        var classes = [column.headerClassName, theadGroupThProps.className, columnHeaderProps.className];

        var styles = _extends({}, column.headerStyle, theadGroupThProps.style, columnHeaderProps.style);

        var rest = _extends({}, theadGroupThProps.rest, columnHeaderProps.rest);

        var flexStyles = {
          flex: hasMaxWidth ? '1 1 ' + _utils2.default.asPx(flex) : flex + ' 0 auto',
          width: _utils2.default.asPx(width),
          maxWidth: _utils2.default.asPx(maxWidth)
        };

        return _react2.default.createElement(
          ThComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes),
            style: _extends({}, styles, flexStyles)
          }, rest),
          _utils2.default.normalizeComponent(column.Header, {
            data: sortedData,
            column: column
          })
        );
      };

      var makeHeaderGroups = function makeHeaderGroups() {
        var theadGroupProps = _utils2.default.splitProps(getTheadGroupProps(finalState, undefined, undefined, _this2));
        var theadGroupTrProps = _utils2.default.splitProps(getTheadGroupTrProps(finalState, undefined, undefined, _this2));
        return _react2.default.createElement(
          TheadComponent,
          _extends({
            className: (0, _classnames2.default)('-headerGroups', theadGroupProps.className),
            style: _extends({}, theadGroupProps.style)
          }, theadGroupProps.rest),
          _react2.default.createElement(
            TrComponent,
            _extends({
              className: theadGroupTrProps.className,
              style: theadGroupTrProps.style
            }, theadGroupTrProps.rest),
            headerGroups.map(makeHeaderGroup)
          )
        );
      };

      var makeHeader = function makeHeader(column, i) {
        var resizedCol = resized.find(function (x) {
          return x.id === column.id;
        }) || {};
        var sort = sorted.find(function (d) {
          return d.id === column.id;
        });
        var show = typeof column.show === 'function' ? column.show() : column.show;
        var width = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.minWidth);
        var maxWidth = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
        var theadThProps = _utils2.default.splitProps(getTheadThProps(finalState, undefined, column, _this2));
        var columnHeaderProps = _utils2.default.splitProps(column.getHeaderProps(finalState, undefined, column, _this2));

        var classes = [column.headerClassName, theadThProps.className, columnHeaderProps.className];

        var styles = _extends({}, column.headerStyle, theadThProps.style, columnHeaderProps.style);

        var rest = _extends({}, theadThProps.rest, columnHeaderProps.rest);

        var isResizable = _utils2.default.getFirstDefined(column.resizable, resizable, false);
        var resizer = isResizable ? _react2.default.createElement(ResizerComponent, _extends({
          onMouseDown: function onMouseDown(e) {
            return _this2.resizeColumnStart(e, column, false);
          },
          onTouchStart: function onTouchStart(e) {
            return _this2.resizeColumnStart(e, column, true);
          }
        }, resizerProps)) : null;

        var isSortable = _utils2.default.getFirstDefined(column.sortable, sortable, false);

        return _react2.default.createElement(
          ThComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes, isResizable && 'rt-resizable-header', sort ? sort.desc ? '-sort-desc' : '-sort-asc' : '', isSortable && '-cursor-pointer', !show && '-hidden', pivotBy && pivotBy.slice(0, -1).includes(column.id) && 'rt-header-pivot'),
            style: _extends({}, styles, {
              flex: hasMaxWidth ? '1 1 ' + _utils2.default.asPx(width) : width + ' 0 auto',
              width: _utils2.default.asPx(width),
              maxWidth: _utils2.default.asPx(maxWidth)
            }),
            toggleSort: function toggleSort(e) {
              if (isSortable) _this2.sortColumn(column, multiSort ? e.shiftKey : false);
            }
          }, rest),
          _react2.default.createElement(
            'div',
            { className: (0, _classnames2.default)(isResizable && 'rt-resizable-header-content') },
            _utils2.default.normalizeComponent(column.Header, {
              data: sortedData,
              column: column
            })
          ),
          resizer
        );
      };

      var makeHeaders = function makeHeaders() {
        var theadProps = _utils2.default.splitProps(getTheadProps(finalState, undefined, undefined, _this2));
        var theadTrProps = _utils2.default.splitProps(getTheadTrProps(finalState, undefined, undefined, _this2));
        return _react2.default.createElement(
          TheadComponent,
          _extends({
            className: (0, _classnames2.default)('-header', theadProps.className),
            style: _extends({}, theadProps.style)
          }, theadProps.rest),
          _react2.default.createElement(
            TrComponent,
            _extends({
              className: theadTrProps.className,
              style: theadTrProps.style
            }, theadTrProps.rest),
            allVisibleColumns.map(makeHeader)
          )
        );
      };

      var makeFilter = function makeFilter(column, i) {
        var resizedCol = resized.find(function (x) {
          return x.id === column.id;
        }) || {};
        var width = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.minWidth);
        var maxWidth = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
        var theadFilterThProps = _utils2.default.splitProps(getTheadFilterThProps(finalState, undefined, column, _this2));
        var columnHeaderProps = _utils2.default.splitProps(column.getHeaderProps(finalState, undefined, column, _this2));

        var classes = [column.headerClassName, theadFilterThProps.className, columnHeaderProps.className];

        var styles = _extends({}, column.headerStyle, theadFilterThProps.style, columnHeaderProps.style);

        var rest = _extends({}, theadFilterThProps.rest, columnHeaderProps.rest);

        var filter = filtered.find(function (filter) {
          return filter.id === column.id;
        });

        var ResolvedFilterComponent = column.Filter || FilterComponent;

        var isFilterable = _utils2.default.getFirstDefined(column.filterable, filterable, false);

        return _react2.default.createElement(
          ThComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes),
            style: _extends({}, styles, {
              flex: hasMaxWidth ? '1 1 ' + _utils2.default.asPx(width) : width + ' 0 auto',
              width: _utils2.default.asPx(width),
              maxWidth: _utils2.default.asPx(maxWidth)
            })
          }, rest),
          isFilterable ? _utils2.default.normalizeComponent(ResolvedFilterComponent, {
            column: column,
            filter: filter,
            onChange: function onChange(value) {
              return _this2.filterColumn(column, value);
            }
          }, _defaultProps2.default.column.Filter) : null
        );
      };

      var makeFilters = function makeFilters() {
        var theadFilterProps = _utils2.default.splitProps(getTheadFilterProps(finalState, undefined, undefined, _this2));
        var theadFilterTrProps = _utils2.default.splitProps(getTheadFilterTrProps(finalState, undefined, undefined, _this2));
        return _react2.default.createElement(
          TheadComponent,
          _extends({
            className: (0, _classnames2.default)('-filters', theadFilterProps.className),
            style: _extends({}, theadFilterProps.style)
          }, theadFilterProps.rest),
          _react2.default.createElement(
            TrComponent,
            _extends({
              className: theadFilterTrProps.className,
              style: theadFilterTrProps.style
            }, theadFilterTrProps.rest),
            allVisibleColumns.map(makeFilter)
          )
        );
      };

      var makePageRow = function makePageRow(row, i) {
        var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

        var rowInfo = {
          original: row[originalKey],
          row: row,
          index: row[indexKey],
          viewIndex: rowIndex += 1,
          pageSize: pageSize,
          page: page,
          level: path.length,
          nestingPath: path.concat([i]),
          aggregated: row[aggregatedKey],
          groupedByPivot: row[groupedByPivotKey],
          subRows: row[subRowsKey]
        };
        var isExpanded = _utils2.default.get(expanded, rowInfo.nestingPath);
        var trGroupProps = getTrGroupProps(finalState, rowInfo, undefined, _this2);
        var trProps = _utils2.default.splitProps(getTrProps(finalState, rowInfo, undefined, _this2));
        return _react2.default.createElement(
          TrGroupComponent,
          _extends({ key: rowInfo.nestingPath.join('_') }, trGroupProps),
          _react2.default.createElement(
            TrComponent,
            _extends({
              className: (0, _classnames2.default)(trProps.className, row._viewIndex % 2 ? '-even' : '-odd'),
              style: trProps.style
            }, trProps.rest),
            allVisibleColumns.map(function (column, i2) {
              var resizedCol = resized.find(function (x) {
                return x.id === column.id;
              }) || {};
              var show = typeof column.show === 'function' ? column.show() : column.show;
              var width = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.minWidth);
              var maxWidth = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
              var tdProps = _utils2.default.splitProps(getTdProps(finalState, rowInfo, column, _this2));
              var columnProps = _utils2.default.splitProps(column.getProps(finalState, rowInfo, column, _this2));

              var classes = [tdProps.className, column.className, columnProps.className];

              var styles = _extends({}, tdProps.style, column.style, columnProps.style);

              var cellInfo = _extends({}, rowInfo, {
                isExpanded: isExpanded,
                column: _extends({}, column),
                value: rowInfo.row[column.id],
                pivoted: column.pivoted,
                expander: column.expander,
                resized: resized,
                show: show,
                width: width,
                maxWidth: maxWidth,
                tdProps: tdProps,
                columnProps: columnProps,
                classes: classes,
                styles: styles
              });

              var value = cellInfo.value;

              var useOnExpanderClick = void 0;
              var isBranch = void 0;
              var isPreview = void 0;

              var onExpanderClick = function onExpanderClick(e) {
                var newExpanded = _utils2.default.clone(expanded);
                if (isExpanded) {
                  newExpanded = _utils2.default.set(newExpanded, cellInfo.nestingPath, false);
                } else {
                  newExpanded = _utils2.default.set(newExpanded, cellInfo.nestingPath, {});
                }

                return _this2.setStateWithData({
                  expanded: newExpanded
                }, function () {
                  return onExpandedChange && onExpandedChange(newExpanded, cellInfo.nestingPath, e);
                });
              };

              // Default to a standard cell
              var resolvedCell = _utils2.default.normalizeComponent(column.Cell, cellInfo, value);

              // Resolve Renderers
              var ResolvedAggregatedComponent = column.Aggregated || (!column.aggregate ? AggregatedComponent : column.Cell);
              var ResolvedExpanderComponent = column.Expander || ExpanderComponent;
              var ResolvedPivotValueComponent = column.PivotValue || PivotValueComponent;
              var DefaultResolvedPivotComponent = PivotComponent || function (props) {
                return _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(ResolvedExpanderComponent, props),
                  _react2.default.createElement(ResolvedPivotValueComponent, props)
                );
              };
              var ResolvedPivotComponent = column.Pivot || DefaultResolvedPivotComponent;

              // Is this cell expandable?
              if (cellInfo.pivoted || cellInfo.expander) {
                // Make it expandable by defualt
                cellInfo.expandable = true;
                useOnExpanderClick = true;
                // If pivoted, has no subRows, and does not have a subComponent,
                // do not make expandable
                if (cellInfo.pivoted && !cellInfo.subRows && !SubComponent) {
                  cellInfo.expandable = false;
                }
              }

              if (cellInfo.pivoted) {
                // Is this column a branch?
                isBranch = rowInfo.row[pivotIDKey] === column.id && cellInfo.subRows;
                // Should this column be blank?
                isPreview = pivotBy.indexOf(column.id) > pivotBy.indexOf(rowInfo.row[pivotIDKey]) && cellInfo.subRows;
                // Pivot Cell Render Override
                if (isBranch) {
                  // isPivot
                  resolvedCell = _utils2.default.normalizeComponent(ResolvedPivotComponent, _extends({}, cellInfo, {
                    value: row[pivotValKey]
                  }), row[pivotValKey]);
                } else if (isPreview) {
                  // Show the pivot preview
                  resolvedCell = _utils2.default.normalizeComponent(ResolvedAggregatedComponent, cellInfo, value);
                } else {
                  resolvedCell = null;
                }
              } else if (cellInfo.aggregated) {
                resolvedCell = _utils2.default.normalizeComponent(ResolvedAggregatedComponent, cellInfo, value);
              }

              if (cellInfo.expander) {
                resolvedCell = _utils2.default.normalizeComponent(ResolvedExpanderComponent, cellInfo, row[pivotValKey]);
                if (pivotBy) {
                  if (cellInfo.groupedByPivot) {
                    resolvedCell = null;
                  }
                  if (!cellInfo.subRows && !SubComponent) {
                    resolvedCell = null;
                  }
                }
              }

              var resolvedOnExpanderClick = useOnExpanderClick ? onExpanderClick : function () {};

              // If there are multiple onClick events, make sure they don't
              // override eachother. This should maybe be expanded to handle all
              // function attributes
              var interactionProps = {
                onClick: resolvedOnExpanderClick
              };

              if (tdProps.rest.onClick) {
                interactionProps.onClick = function (e) {
                  tdProps.rest.onClick(e, function () {
                    return resolvedOnExpanderClick(e);
                  });
                };
              }

              if (columnProps.rest.onClick) {
                interactionProps.onClick = function (e) {
                  columnProps.rest.onClick(e, function () {
                    return resolvedOnExpanderClick(e);
                  });
                };
              }

              // Return the cell
              return _react2.default.createElement(
                TdComponent
                // eslint-disable-next-line react/no-array-index-key
                ,
                _extends({ key: i2 + '-' + column.id,
                  className: (0, _classnames2.default)(classes, !show && 'hidden', cellInfo.expandable && 'rt-expandable', (isBranch || isPreview) && 'rt-pivot'),
                  style: _extends({}, styles, {
                    flex: hasMaxWidth ? '1 1 ' + _utils2.default.asPx(width) : width + ' 0 auto',
                    width: _utils2.default.asPx(width),
                    maxWidth: _utils2.default.asPx(maxWidth)
                  })
                }, tdProps.rest, columnProps.rest, interactionProps),
                resolvedCell
              );
            })
          ),
          rowInfo.subRows && isExpanded && rowInfo.subRows.map(function (d, i) {
            return makePageRow(d, i, rowInfo.nestingPath);
          }),
          SubComponent && !rowInfo.subRows && isExpanded && SubComponent(rowInfo)
        );
      };

      var makePadColumn = function makePadColumn(column, i) {
        var resizedCol = resized.find(function (x) {
          return x.id === column.id;
        }) || {};
        var show = typeof column.show === 'function' ? column.show() : column.show;
        var width = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.minWidth);
        var flex = width;
        var maxWidth = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
        var tdProps = _utils2.default.splitProps(getTdProps(finalState, undefined, column, _this2));
        var columnProps = _utils2.default.splitProps(column.getProps(finalState, undefined, column, _this2));

        var classes = [tdProps.className, column.className, columnProps.className];

        var styles = _extends({}, tdProps.style, column.style, columnProps.style);

        return _react2.default.createElement(
          TdComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes, !show && 'hidden'),
            style: _extends({}, styles, {
              flex: hasMaxWidth ? '1 1 ' + _utils2.default.asPx(flex) : flex + ' 0 auto',
              width: _utils2.default.asPx(width),
              maxWidth: _utils2.default.asPx(maxWidth)
            })
          }, tdProps.rest),
          _utils2.default.normalizeComponent(PadRowComponent)
        );
      };

      var makePadRow = function makePadRow(row, i) {
        var trGroupProps = getTrGroupProps(finalState, undefined, undefined, _this2);
        var trProps = _utils2.default.splitProps(getTrProps(finalState, undefined, undefined, _this2));
        return _react2.default.createElement(
          TrGroupComponent,
          _extends({ key: i }, trGroupProps),
          _react2.default.createElement(
            TrComponent,
            {
              className: (0, _classnames2.default)('-padRow', (pageRows.length + i) % 2 ? '-even' : '-odd', trProps.className),
              style: trProps.style || {}
            },
            allVisibleColumns.map(makePadColumn)
          )
        );
      };

      var makeColumnFooter = function makeColumnFooter(column, i) {
        var resizedCol = resized.find(function (x) {
          return x.id === column.id;
        }) || {};
        var show = typeof column.show === 'function' ? column.show() : column.show;
        var width = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.minWidth);
        var maxWidth = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
        var tFootTdProps = _utils2.default.splitProps(getTfootTdProps(finalState, undefined, undefined, _this2));
        var columnProps = _utils2.default.splitProps(column.getProps(finalState, undefined, column, _this2));
        var columnFooterProps = _utils2.default.splitProps(column.getFooterProps(finalState, undefined, column, _this2));

        var classes = [tFootTdProps.className, column.className, columnProps.className, columnFooterProps.className];

        var styles = _extends({}, tFootTdProps.style, column.style, columnProps.style, columnFooterProps.style);

        return _react2.default.createElement(
          TdComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes, !show && 'hidden'),
            style: _extends({}, styles, {
              flex: hasMaxWidth ? '1 1 ' + _utils2.default.asPx(width) : width + ' 0 auto',
              width: _utils2.default.asPx(width),
              maxWidth: _utils2.default.asPx(maxWidth)
            })
          }, columnProps.rest, tFootTdProps.rest, columnFooterProps.rest),
          _utils2.default.normalizeComponent(column.Footer, {
            data: sortedData,
            column: column
          })
        );
      };

      var makeColumnFooters = function makeColumnFooters() {
        var tFootProps = getTfootProps(finalState, undefined, undefined, _this2);
        var tFootTrProps = _utils2.default.splitProps(getTfootTrProps(finalState, undefined, undefined, _this2));
        return _react2.default.createElement(
          TfootComponent,
          _extends({
            className: tFootProps.className,
            style: _extends({}, tFootProps.style)
          }, tFootProps.rest),
          _react2.default.createElement(
            TrComponent,
            _extends({
              className: (0, _classnames2.default)(tFootTrProps.className),
              style: tFootTrProps.style
            }, tFootTrProps.rest),
            allVisibleColumns.map(makeColumnFooter)
          )
        );
      };

      var makePagination = function makePagination() {
        var paginationProps = _utils2.default.splitProps(getPaginationProps(finalState, undefined, undefined, _this2));
        return _react2.default.createElement(PaginationComponent, _extends({}, resolvedState, {
          pages: pages,
          canPrevious: canPrevious,
          canNext: canNext,
          onPageChange: _this2.onPageChange,
          onPageSizeChange: _this2.onPageSizeChange,
          className: paginationProps.className,
          style: paginationProps.style
        }, paginationProps.rest));
      };

      var makeTable = function makeTable() {
        var pagination = makePagination();
        return _react2.default.createElement(
          'div',
          _extends({
            className: (0, _classnames2.default)('ReactTable', className, rootProps.className),
            style: _extends({}, style, rootProps.style)
          }, rootProps.rest),
          showPagination && showPaginationTop ? _react2.default.createElement(
            'div',
            { className: 'pagination-top' },
            pagination
          ) : null,
          _react2.default.createElement(
            TableComponent,
            _extends({
              className: (0, _classnames2.default)(tableProps.className, currentlyResizing ? 'rt-resizing' : '', hasMaxWidth ? 'rt-maxwidth' : ''),
              style: tableProps.style
            }, tableProps.rest),
            hasHeaderGroups ? makeHeaderGroups() : null,
            makeHeaders(),
            hasFilters ? makeFilters() : null,
            _react2.default.createElement(
              TbodyComponent,
              _extends({
                className: (0, _classnames2.default)(tBodyProps.className),
                style: _extends({}, tBodyProps.style)
              }, tBodyProps.rest),
              pageRows.map(function (d, i) {
                return makePageRow(d, i);
              }),
              padRows.map(makePadRow)
            ),
            hasColumnFooter ? makeColumnFooters() : null
          ),
          showPagination && showPaginationBottom ? _react2.default.createElement(
            'div',
            { className: 'pagination-bottom' },
            pagination
          ) : null,
          !pageRows.length && _react2.default.createElement(
            NoDataComponent,
            noDataProps,
            _utils2.default.normalizeComponent(noDataText)
          ),
          _react2.default.createElement(LoadingComponent, _extends({
            loading: loading,
            loadingText: loadingText
          }, loadingProps))
        );
      };

      // childProps are optionally passed to a function-as-a-child
      return children ? children(finalState, makeTable, this) : makeTable();
    }
  }]);

  return ReactTable;
}((0, _methods2.default)((0, _lifecycle2.default)(_react.Component)));

ReactTable.propTypes = _propTypes2.default;
ReactTable.defaultProps = _defaultProps2.default;
exports.default = ReactTable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdFRhYmxlRGVmYXVsdHMiLCJSZWFjdFRhYmxlIiwicHJvcHMiLCJnZXRSZXNvbHZlZFN0YXRlIiwiYmluZCIsImdldERhdGFNb2RlbCIsImdldFNvcnRlZERhdGEiLCJmaXJlRmV0Y2hEYXRhIiwiZ2V0UHJvcE9yU3RhdGUiLCJnZXRTdGF0ZU9yUHJvcCIsImZpbHRlckRhdGEiLCJzb3J0RGF0YSIsImdldE1pblJvd3MiLCJvblBhZ2VDaGFuZ2UiLCJvblBhZ2VTaXplQ2hhbmdlIiwic29ydENvbHVtbiIsImZpbHRlckNvbHVtbiIsInJlc2l6ZUNvbHVtblN0YXJ0IiwicmVzaXplQ29sdW1uRW5kIiwicmVzaXplQ29sdW1uTW92aW5nIiwic3RhdGUiLCJwYWdlIiwicGFnZVNpemUiLCJkZWZhdWx0UGFnZVNpemUiLCJzb3J0ZWQiLCJkZWZhdWx0U29ydGVkIiwiZXhwYW5kZWQiLCJkZWZhdWx0RXhwYW5kZWQiLCJmaWx0ZXJlZCIsImRlZmF1bHRGaWx0ZXJlZCIsInJlc2l6ZWQiLCJkZWZhdWx0UmVzaXplZCIsImN1cnJlbnRseVJlc2l6aW5nIiwic2tpcE5leHRTb3J0IiwicmVzb2x2ZWRTdGF0ZSIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJoYXNNYXhXaWR0aCIsImdldFByb3BzIiwiZ2V0VGFibGVQcm9wcyIsImdldFRoZWFkR3JvdXBQcm9wcyIsImdldFRoZWFkR3JvdXBUclByb3BzIiwiZ2V0VGhlYWRHcm91cFRoUHJvcHMiLCJnZXRUaGVhZFByb3BzIiwiZ2V0VGhlYWRUclByb3BzIiwiZ2V0VGhlYWRUaFByb3BzIiwiZ2V0VGhlYWRGaWx0ZXJQcm9wcyIsImdldFRoZWFkRmlsdGVyVHJQcm9wcyIsImdldFRoZWFkRmlsdGVyVGhQcm9wcyIsImdldFRib2R5UHJvcHMiLCJnZXRUckdyb3VwUHJvcHMiLCJnZXRUclByb3BzIiwiZ2V0VGRQcm9wcyIsImdldFRmb290UHJvcHMiLCJnZXRUZm9vdFRyUHJvcHMiLCJnZXRUZm9vdFRkUHJvcHMiLCJnZXRQYWdpbmF0aW9uUHJvcHMiLCJnZXRMb2FkaW5nUHJvcHMiLCJnZXROb0RhdGFQcm9wcyIsImdldFJlc2l6ZXJQcm9wcyIsInNob3dQYWdpbmF0aW9uIiwic2hvd1BhZ2luYXRpb25Ub3AiLCJzaG93UGFnaW5hdGlvbkJvdHRvbSIsIm1hbnVhbCIsImxvYWRpbmdUZXh0Iiwibm9EYXRhVGV4dCIsInNvcnRhYmxlIiwibXVsdGlTb3J0IiwicmVzaXphYmxlIiwiZmlsdGVyYWJsZSIsInBpdm90SURLZXkiLCJwaXZvdFZhbEtleSIsInBpdm90QnkiLCJzdWJSb3dzS2V5IiwiYWdncmVnYXRlZEtleSIsIm9yaWdpbmFsS2V5IiwiaW5kZXhLZXkiLCJncm91cGVkQnlQaXZvdEtleSIsImxvYWRpbmciLCJwYWdlcyIsIm9uRXhwYW5kZWRDaGFuZ2UiLCJUYWJsZUNvbXBvbmVudCIsIlRoZWFkQ29tcG9uZW50IiwiVGJvZHlDb21wb25lbnQiLCJUckdyb3VwQ29tcG9uZW50IiwiVHJDb21wb25lbnQiLCJUaENvbXBvbmVudCIsIlRkQ29tcG9uZW50IiwiVGZvb3RDb21wb25lbnQiLCJQYWdpbmF0aW9uQ29tcG9uZW50IiwiTG9hZGluZ0NvbXBvbmVudCIsIlN1YkNvbXBvbmVudCIsIk5vRGF0YUNvbXBvbmVudCIsIlJlc2l6ZXJDb21wb25lbnQiLCJFeHBhbmRlckNvbXBvbmVudCIsIlBpdm90VmFsdWVDb21wb25lbnQiLCJQaXZvdENvbXBvbmVudCIsIkFnZ3JlZ2F0ZWRDb21wb25lbnQiLCJGaWx0ZXJDb21wb25lbnQiLCJQYWRSb3dDb21wb25lbnQiLCJyZXNvbHZlZERhdGEiLCJhbGxWaXNpYmxlQ29sdW1ucyIsImhlYWRlckdyb3VwcyIsImhhc0hlYWRlckdyb3VwcyIsInNvcnRlZERhdGEiLCJzdGFydFJvdyIsImVuZFJvdyIsInBhZ2VSb3dzIiwic2xpY2UiLCJtaW5Sb3dzIiwicGFkUm93cyIsInJhbmdlIiwiTWF0aCIsIm1heCIsImxlbmd0aCIsImhhc0NvbHVtbkZvb3RlciIsInNvbWUiLCJkIiwiRm9vdGVyIiwiaGFzRmlsdGVycyIsInJlY3Vyc2VSb3dzVmlld0luZGV4Iiwicm93cyIsInBhdGgiLCJpbmRleCIsIm1hcCIsInJvdyIsImkiLCJyb3dXaXRoVmlld0luZGV4IiwiX3ZpZXdJbmRleCIsIm5ld1BhdGgiLCJjb25jYXQiLCJnZXQiLCJjYW5QcmV2aW91cyIsImNhbk5leHQiLCJyb3dNaW5XaWR0aCIsInN1bSIsInJlc2l6ZWRDb2x1bW4iLCJmaW5kIiwieCIsImlkIiwiZ2V0Rmlyc3REZWZpbmVkIiwidmFsdWUiLCJ3aWR0aCIsIm1pbldpZHRoIiwicm93SW5kZXgiLCJmaW5hbFN0YXRlIiwicm9vdFByb3BzIiwic3BsaXRQcm9wcyIsInVuZGVmaW5lZCIsInRhYmxlUHJvcHMiLCJ0Qm9keVByb3BzIiwibG9hZGluZ1Byb3BzIiwibm9EYXRhUHJvcHMiLCJyZXNpemVyUHJvcHMiLCJtYWtlSGVhZGVyR3JvdXAiLCJjb2x1bW4iLCJyZXNpemVkVmFsdWUiLCJjb2wiLCJmbGV4IiwiY29sdW1ucyIsIm1heFdpZHRoIiwidGhlYWRHcm91cFRoUHJvcHMiLCJjb2x1bW5IZWFkZXJQcm9wcyIsImdldEhlYWRlclByb3BzIiwiY2xhc3NlcyIsImhlYWRlckNsYXNzTmFtZSIsInN0eWxlcyIsImhlYWRlclN0eWxlIiwicmVzdCIsImZsZXhTdHlsZXMiLCJhc1B4Iiwibm9ybWFsaXplQ29tcG9uZW50IiwiSGVhZGVyIiwiZGF0YSIsIm1ha2VIZWFkZXJHcm91cHMiLCJ0aGVhZEdyb3VwUHJvcHMiLCJ0aGVhZEdyb3VwVHJQcm9wcyIsIm1ha2VIZWFkZXIiLCJyZXNpemVkQ29sIiwic29ydCIsInNob3ciLCJ0aGVhZFRoUHJvcHMiLCJpc1Jlc2l6YWJsZSIsInJlc2l6ZXIiLCJlIiwiaXNTb3J0YWJsZSIsImRlc2MiLCJpbmNsdWRlcyIsInNoaWZ0S2V5IiwibWFrZUhlYWRlcnMiLCJ0aGVhZFByb3BzIiwidGhlYWRUclByb3BzIiwibWFrZUZpbHRlciIsInRoZWFkRmlsdGVyVGhQcm9wcyIsImZpbHRlciIsIlJlc29sdmVkRmlsdGVyQ29tcG9uZW50IiwiRmlsdGVyIiwiaXNGaWx0ZXJhYmxlIiwib25DaGFuZ2UiLCJtYWtlRmlsdGVycyIsInRoZWFkRmlsdGVyUHJvcHMiLCJ0aGVhZEZpbHRlclRyUHJvcHMiLCJtYWtlUGFnZVJvdyIsInJvd0luZm8iLCJvcmlnaW5hbCIsInZpZXdJbmRleCIsImxldmVsIiwibmVzdGluZ1BhdGgiLCJhZ2dyZWdhdGVkIiwiZ3JvdXBlZEJ5UGl2b3QiLCJzdWJSb3dzIiwiaXNFeHBhbmRlZCIsInRyR3JvdXBQcm9wcyIsInRyUHJvcHMiLCJqb2luIiwiaTIiLCJ0ZFByb3BzIiwiY29sdW1uUHJvcHMiLCJjZWxsSW5mbyIsInBpdm90ZWQiLCJleHBhbmRlciIsInVzZU9uRXhwYW5kZXJDbGljayIsImlzQnJhbmNoIiwiaXNQcmV2aWV3Iiwib25FeHBhbmRlckNsaWNrIiwibmV3RXhwYW5kZWQiLCJjbG9uZSIsInNldCIsInNldFN0YXRlV2l0aERhdGEiLCJyZXNvbHZlZENlbGwiLCJDZWxsIiwiUmVzb2x2ZWRBZ2dyZWdhdGVkQ29tcG9uZW50IiwiQWdncmVnYXRlZCIsImFnZ3JlZ2F0ZSIsIlJlc29sdmVkRXhwYW5kZXJDb21wb25lbnQiLCJFeHBhbmRlciIsIlJlc29sdmVkUGl2b3RWYWx1ZUNvbXBvbmVudCIsIlBpdm90VmFsdWUiLCJEZWZhdWx0UmVzb2x2ZWRQaXZvdENvbXBvbmVudCIsIlJlc29sdmVkUGl2b3RDb21wb25lbnQiLCJQaXZvdCIsImV4cGFuZGFibGUiLCJpbmRleE9mIiwicmVzb2x2ZWRPbkV4cGFuZGVyQ2xpY2siLCJpbnRlcmFjdGlvblByb3BzIiwib25DbGljayIsIm1ha2VQYWRDb2x1bW4iLCJtYWtlUGFkUm93IiwibWFrZUNvbHVtbkZvb3RlciIsInRGb290VGRQcm9wcyIsImNvbHVtbkZvb3RlclByb3BzIiwiZ2V0Rm9vdGVyUHJvcHMiLCJtYWtlQ29sdW1uRm9vdGVycyIsInRGb290UHJvcHMiLCJ0Rm9vdFRyUHJvcHMiLCJtYWtlUGFnaW5hdGlvbiIsInBhZ2luYXRpb25Qcm9wcyIsIm1ha2VUYWJsZSIsInBhZ2luYXRpb24iLCJwcm9wVHlwZXMiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFMQTs7O0FBT08sSUFBTUEsd0VBQU47O0lBRWNDLFU7OztBQUluQixzQkFBYUMsS0FBYixFQUFvQjtBQUFBOztBQUFBOztBQUdsQixVQUFLQyxnQkFBTCxHQUF3QixNQUFLQSxnQkFBTCxDQUFzQkMsSUFBdEIsT0FBeEI7QUFDQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JELElBQWxCLE9BQXBCO0FBQ0EsVUFBS0UsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CRixJQUFuQixPQUFyQjtBQUNBLFVBQUtHLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkgsSUFBbkIsT0FBckI7QUFDQSxVQUFLSSxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JKLElBQXBCLE9BQXRCO0FBQ0EsVUFBS0ssY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CTCxJQUFwQixPQUF0QjtBQUNBLFVBQUtNLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQk4sSUFBaEIsT0FBbEI7QUFDQSxVQUFLTyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY1AsSUFBZCxPQUFoQjtBQUNBLFVBQUtRLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQlIsSUFBaEIsT0FBbEI7QUFDQSxVQUFLUyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JULElBQWxCLE9BQXBCO0FBQ0EsVUFBS1UsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JWLElBQXRCLE9BQXhCO0FBQ0EsVUFBS1csVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCWCxJ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fSBmcm9tICdyZWFjdCdcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG4vL1xuaW1wb3J0IF8gZnJvbSAnLi91dGlscydcbmltcG9ydCBMaWZlY3ljbGUgZnJvbSAnLi9saWZlY3ljbGUnXG5pbXBvcnQgTWV0aG9kcyBmcm9tICcuL21ldGhvZHMnXG5pbXBvcnQgZGVmYXVsdFByb3BzIGZyb20gJy4vZGVmYXVsdFByb3BzJ1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICcuL3Byb3BUeXBlcydcblxuZXhwb3J0IGNvbnN0IFJlYWN0VGFibGVEZWZhdWx0cyA9IGRlZmF1bHRQcm9wc1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdFRhYmxlIGV4dGVuZHMgTWV0aG9kcyhMaWZlY3ljbGUoQ29tcG9uZW50KSkge1xuICBzdGF0aWMgcHJvcFR5cGVzID0gcHJvcFR5cGVzXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHNcblxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcigpXG5cbiAgICB0aGlzLmdldFJlc29sdmVkU3RhdGUgPSB0aGlzLmdldFJlc29sdmVkU3RhdGUuYmluZCh0aGlzKVxuICAgIHRoaXMuZ2V0RGF0YU1vZGVsID0gdGhpcy5nZXREYXRhTW9kZWwuYmluZCh0aGlzKVxuICAgIHRoaXMuZ2V0U29ydGVkRGF0YSA9IHRoaXMuZ2V0U29ydGVkRGF0YS5iaW5kKHRoaXMpXG4gICAgdGhpcy5maXJlRmV0Y2hEYXRhID0gdGhpcy5maXJlRmV0Y2hEYXRhLmJpbmQodGhpcylcbiAgICB0aGlzLmdldFByb3BPclN0YXRlID0gdGhpcy5nZXRQcm9wT3JTdGF0ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5nZXRTdGF0ZU9yUHJvcCA9IHRoaXMuZ2V0U3RhdGVPclByb3AuYmluZCh0aGlzKVxuICAgIHRoaXMuZmlsdGVyRGF0YSA9IHRoaXMuZmlsdGVyRGF0YS5iaW5kKHRoaXMpXG4gICAgdGhpcy5zb3J0RGF0YSA9IHRoaXMuc29ydERhdGEuYmluZCh0aGlzKVxuICAgIHRoaXMuZ2V0TWluUm93cyA9IHRoaXMuZ2V0TWluUm93cy5iaW5kKHRoaXMpXG4gICAgdGhpcy5vblBhZ2VDaGFuZ2UgPSB0aGlzLm9uUGFnZUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5vblBhZ2VTaXplQ2hhbmdlID0gdGhpcy5vblBhZ2VTaXplQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLnNvcnRDb2x1bW4gPSB0aGlzLnNvcnRDb2x1bW4uYmluZCh0aGlzKVxuICAgIHRoaXMuZmlsdGVyQ29sdW1uID0gdGhpcy5maWx0ZXJDb2x1bW4uYmluZCh0aGlzKVxuICAgIHRoaXMucmVzaXplQ29sdW1uU3RhcnQgPSB0aGlzLnJlc2l6ZUNvbHVtblN0YXJ0LmJpbmQodGhpcylcbiAgICB0aGlzLnJlc2l6ZUNvbHVtbkVuZCA9IHRoaXMucmVzaXplQ29sdW1uRW5kLmJpbmQodGhpcylcbiAgICB0aGlzLnJlc2l6ZUNvbHVtbk1vdmluZyA9IHRoaXMucmVzaXplQ29sdW1uTW92aW5nLmJpbmQodGhpcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwYWdlOiAwLFxuICAgICAgcGFnZVNpemU6IHByb3BzLmRlZmF1bHRQYWdlU2l6ZSxcbiAgICAgIHNvcnRlZDogcHJvcHMuZGVmYXVsdFNvcnRlZCxcbiAgICAgIGV4cGFuZGVkOiBwcm9wcy5kZWZhdWx0RXhwYW5kZWQsXG4gICAgICBmaWx0ZXJlZDogcHJvcHMuZGVmYXVsdEZpbHRlcmVkLFxuICAgICAgcmVzaXplZDogcHJvcHMuZGVmYXVsdFJlc2l6ZWQsXG4gICAgICBjdXJyZW50bHlSZXNpemluZzogZmFsc2UsXG4gICAgICBza2lwTmV4dFNvcnQ6IGZhbHNlLFxuICAgIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgcmVzb2x2ZWRTdGF0ZSA9IHRoaXMuZ2V0UmVzb2x2ZWRTdGF0ZSgpXG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBzdHlsZSxcbiAgICAgIGhhc01heFdpZHRoLFxuICAgICAgZ2V0UHJvcHMsXG4gICAgICBnZXRUYWJsZVByb3BzLFxuICAgICAgZ2V0VGhlYWRHcm91cFByb3BzLFxuICAgICAgZ2V0VGhlYWRHcm91cFRyUHJvcHMsXG4gICAgICBnZXRUaGVhZEdyb3VwVGhQcm9wcyxcbiAgICAgIGdldFRoZWFkUHJvcHMsXG4gICAgICBnZXRUaGVhZFRyUHJvcHMsXG4gICAgICBnZXRUaGVhZFRoUHJvcHMsXG4gICAgICBnZXRUaGVhZEZpbHRlclByb3BzLFxuICAgICAgZ2V0VGhlYWRGaWx0ZXJUclByb3BzLFxuICAgICAgZ2V0VGhlYWRGaWx0ZXJUaFByb3BzLFxuICAgICAgZ2V0VGJvZHlQcm9wcyxcbiAgICAgIGdldFRyR3JvdXBQcm9wcyxcbiAgICAgIGdldFRyUHJvcHMsXG4gICAgICBnZXRUZFByb3BzLFxuICAgICAgZ2V0VGZvb3RQcm9wcyxcbiAgICAgIGdldFRmb290VHJQcm9wcyxcbiAgICAgIGdldFRmb290VGRQcm9wcyxcbiAgICAgIGdldFBhZ2luYXRpb25Qcm9wcyxcbiAgICAgIGdldExvYWRpbmdQcm9wcyxcbiAgICAgIGdldE5vRGF0YVByb3BzLFxuICAgICAgZ2V0UmVzaXplclByb3BzLFxuICAgICAgc2hvd1BhZ2luYXRpb24sXG4gICAgICBzaG93UGFnaW5hdGlvblRvcCxcbiAgICAgIHNob3dQYWdpbmF0aW9uQm90dG9tLFxuICAgICAgbWFudWFsLFxuICAgICAgbG9hZGluZ1RleHQsXG4gICAgICBub0RhdGFUZXh0LFxuICAgICAgc29ydGFibGUsXG4gICAgICBtdWx0aVNvcnQsXG4gICAgICByZXNpemFibGUsXG4gICAgICBmaWx0ZXJhYmxlLFxuICAgICAgLy8gUGl2b3RpbmcgU3RhdGVcbiAgICAgIHBpdm90SURLZXksXG4gICAgICBwaXZvdFZhbEtleSxcbiAgICAgIHBpdm90QnksXG4gICAgICBzdWJSb3dzS2V5LFxuICAgICAgYWdncmVnYXRlZEtleSxcbiAgICAgIG9yaWdpbmFsS2V5LFxuICAgICAgaW5kZXhLZXksXG4gICAgICBncm91cGVkQnlQaXZvdEtleSxcbiAgICAgIC8vIFN0YXRlXG4gICAgICBsb2FkaW5nLFxuICAgICAgcGFnZVNpemUsXG4gICAgICBwYWdlLFxuICAgICAgc29ydGVkLFxuICAgICAgZmlsdGVyZWQsXG4gICAgICByZXNpemVkLFxuICAgICAgZXhwYW5kZWQsXG4gICAgICBwYWdlcyxcbiAgICAgIG9uRXhwYW5kZWRDaGFuZ2UsXG4gICAgICAvLyBDb21wb25lbnRzXG4gICAgICBUYWJsZUNvbXBvbmVudCxcbiAgICAgIFRoZWFkQ29tcG9uZW50LFxuICAgICAgVGJvZHlDb21wb25lbnQsXG4gICAgICBUckdyb3VwQ29tcG9uZW50LFxuICAgICAgVHJDb21wb25lbnQsXG4gICAgICBUaENvbXBvbmVudCxcbiAgICAgIFRkQ29tcG9uZW50LFxuICAgICAgVGZvb3RDb21wb25lbnQsXG4gICAgICBQYWdpbmF0aW9uQ29tcG9uZW50LFxuICAgICAgTG9hZGluZ0NvbXBvbmVudCxcbiAgICAgIFN1YkNvbXBvbmVudCxcbiAgICAgIE5vRGF0YUNvbXBvbmVudCxcbiAgICAgIFJlc2l6ZXJDb21wb25lbnQsXG4gICAgICBFeHBhbmRlckNvbXBvbmVudCxcbiAgICAgIFBpdm90VmFsdWVDb21wb25lbnQsXG4gICAgICBQaXZvdENvbXBvbmVudCxcbiAgICAgIEFnZ3JlZ2F0ZWRDb21wb25lbnQsXG4gICAgICBGaWx0ZXJDb21wb25lbnQsXG4gICAgICBQYWRSb3dDb21wb25lbnQsXG4gICAgICAvLyBEYXRhIG1vZGVsXG4gICAgICByZXNvbHZlZERhdGEsXG4gICAgICBhbGxWaXNpYmxlQ29sdW1ucyxcbiAgICAgIGhlYWRlckdyb3VwcyxcbiAgICAgIGhhc0hlYWRlckdyb3VwcyxcbiAgICAgIC8vIFNvcnRlZCBEYXRhXG4gICAgICBzb3J0ZWREYXRhLFxuICAgICAgY3VycmVudGx5UmVzaXppbmcsXG4gICAgfSA9IHJlc29sdmVkU3RhdGVcblxuICAgIC8vIFBhZ2luYXRpb25cbiAgICBjb25zdCBzdGFydFJvdyA9IHBhZ2VTaXplICogcGFnZVxuICAgIGNvbnN0IGVuZFJvdyA9IHN0YXJ0Um93ICsgcGFnZVNpemVcbiAgICBsZXQgcGFnZVJvd3MgPSBtYW51YWwgPyByZXNvbHZlZERhdGEgOiBzb3J0ZWREYXRhLnNsaWNlKHN0YXJ0Um93LCBlbmRSb3cpXG4gICAgY29uc3QgbWluUm93cyA9IHRoaXMuZ2V0TWluUm93cygpXG4gICAgY29uc3QgcGFkUm93cyA9IF8ucmFuZ2UoTWF0aC5tYXgobWluUm93cyAtIHBhZ2VSb3dzLmxlbmd0aCwgMCkpXG5cbiAgICBjb25zdCBoYXNDb2x1bW5Gb290ZXIgPSBhbGxWaXNpYmxlQ29sdW1ucy5zb21lKGQgPT4gZC5Gb290ZXIpXG4gICAgY29uc3QgaGFzRmlsdGVycyA9IGZpbHRlcmFibGUgfHwgYWxsVmlzaWJsZUNvbHVtbnMuc29tZShkID0+IGQuZmlsdGVyYWJsZSlcblxuICAgIGNvbnN0IHJlY3Vyc2VSb3dzVmlld0luZGV4ID0gKHJvd3MsIHBhdGggPSBbXSwgaW5kZXggPSAtMSkgPT4gKFtcbiAgICAgIHJvd3MubWFwKChyb3csIGkpID0+IHtcbiAgICAgICAgaW5kZXggKz0gMVxuICAgICAgICBjb25zdCByb3dXaXRoVmlld0luZGV4ID0ge1xuICAgICAgICAgIC4uLnJvdyxcbiAgICAgICAgICBfdmlld0luZGV4OiBpbmRleCxcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdQYXRoID0gcGF0aC5jb25jYXQoW2ldKVxuICAgICAgICBpZiAocm93V2l0aFZpZXdJbmRleFtzdWJSb3dzS2V5XSAmJiBfLmdldChleHBhbmRlZCwgbmV3UGF0aCkpIHtcbiAgICAgICAgICBbcm93V2l0aFZpZXdJbmRleFtzdWJSb3dzS2V5XSwgaW5kZXhdID0gcmVjdXJzZVJvd3NWaWV3SW5kZXgoXG4gICAgICAgICAgICByb3dXaXRoVmlld0luZGV4W3N1YlJvd3NLZXldLFxuICAgICAgICAgICAgbmV3UGF0aCxcbiAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm93V2l0aFZpZXdJbmRleFxuICAgICAgfSksXG4gICAgICBpbmRleCxcbiAgICBdKVxuICAgIDtbcGFnZVJvd3NdID0gcmVjdXJzZVJvd3NWaWV3SW5kZXgocGFnZVJvd3MpXG5cbiAgICBjb25zdCBjYW5QcmV2aW91cyA9IHBhZ2UgPiAwXG4gICAgY29uc3QgY2FuTmV4dCA9IHBhZ2UgKyAxIDwgcGFnZXNcblxuICAgIGNvbnN0IHJvd01pbldpZHRoID0gXy5zdW0oXG4gICAgICBhbGxWaXNpYmxlQ29sdW1ucy5tYXAoZCA9PiB7XG4gICAgICAgIGNvbnN0IHJlc2l6ZWRDb2x1bW4gPSByZXNpemVkLmZpbmQoeCA9PiB4LmlkID09PSBkLmlkKSB8fCB7fVxuICAgICAgICByZXR1cm4gXy5nZXRGaXJzdERlZmluZWQocmVzaXplZENvbHVtbi52YWx1ZSwgZC53aWR0aCwgZC5taW5XaWR0aClcbiAgICAgIH0pLFxuICAgIClcblxuICAgIGxldCByb3dJbmRleCA9IC0xXG5cbiAgICBjb25zdCBmaW5hbFN0YXRlID0ge1xuICAgICAgLi4ucmVzb2x2ZWRTdGF0ZSxcbiAgICAgIHN0YXJ0Um93LFxuICAgICAgZW5kUm93LFxuICAgICAgcGFnZVJvd3MsXG4gICAgICBtaW5Sb3dzLFxuICAgICAgcGFkUm93cyxcbiAgICAgIGhhc0NvbHVtbkZvb3RlcixcbiAgICAgIGNhblByZXZpb3VzLFxuICAgICAgY2FuTmV4dCxcbiAgICAgIHJvd01pbldpZHRoLFxuICAgIH1cblxuICAgIGNvbnN0IHJvb3RQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgIGdldFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKSxcbiAgICApXG4gICAgY29uc3QgdGFibGVQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgIGdldFRhYmxlUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpLFxuICAgIClcbiAgICBjb25zdCB0Qm9keVByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgZ2V0VGJvZHlQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcyksXG4gICAgKVxuICAgIGNvbnN0IGxvYWRpbmdQcm9wcyA9IGdldExvYWRpbmdQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICBjb25zdCBub0RhdGFQcm9wcyA9IGdldE5vRGF0YVByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgIGNvbnN0IHJlc2l6ZXJQcm9wcyA9IGdldFJlc2l6ZXJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcblxuICAgIC8vIFZpc3VhbCBDb21wb25lbnRzXG5cbiAgICBjb25zdCBtYWtlSGVhZGVyR3JvdXAgPSAoY29sdW1uLCBpKSA9PiB7XG4gICAgICBjb25zdCByZXNpemVkVmFsdWUgPSBjb2wgPT5cbiAgICAgICAgKHJlc2l6ZWQuZmluZCh4ID0+IHguaWQgPT09IGNvbC5pZCkgfHwge30pLnZhbHVlXG4gICAgICBjb25zdCBmbGV4ID0gXy5zdW0oXG4gICAgICAgIGNvbHVtbi5jb2x1bW5zLm1hcChcbiAgICAgICAgICBjb2wgPT4gKGNvbC53aWR0aCB8fCByZXNpemVkVmFsdWUoY29sKSA/IDAgOiBjb2wubWluV2lkdGgpLFxuICAgICAgICApLFxuICAgICAgKVxuICAgICAgY29uc3Qgd2lkdGggPSBfLnN1bShcbiAgICAgICAgY29sdW1uLmNvbHVtbnMubWFwKGNvbCA9PlxuICAgICAgICAgIF8uZ2V0Rmlyc3REZWZpbmVkKHJlc2l6ZWRWYWx1ZShjb2wpLCBjb2wud2lkdGgsIGNvbC5taW5XaWR0aCksXG4gICAgICAgICksXG4gICAgICApXG4gICAgICBjb25zdCBtYXhXaWR0aCA9IF8uc3VtKFxuICAgICAgICBjb2x1bW4uY29sdW1ucy5tYXAoY29sID0+XG4gICAgICAgICAgXy5nZXRGaXJzdERlZmluZWQocmVzaXplZFZhbHVlKGNvbCksIGNvbC53aWR0aCwgY29sLm1heFdpZHRoKSxcbiAgICAgICAgKSxcbiAgICAgIClcblxuICAgICAgY29uc3QgdGhlYWRHcm91cFRoUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkR3JvdXBUaFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKSxcbiAgICAgIClcbiAgICAgIGNvbnN0IGNvbHVtbkhlYWRlclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBjb2x1bW4uZ2V0SGVhZGVyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpLFxuICAgICAgKVxuXG4gICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICBjb2x1bW4uaGVhZGVyQ2xhc3NOYW1lLFxuICAgICAgICB0aGVhZEdyb3VwVGhQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtbkhlYWRlclByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF1cblxuICAgICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICAuLi5jb2x1bW4uaGVhZGVyU3R5bGUsXG4gICAgICAgIC4uLnRoZWFkR3JvdXBUaFByb3BzLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW5IZWFkZXJQcm9wcy5zdHlsZSxcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzdCA9IHtcbiAgICAgICAgLi4udGhlYWRHcm91cFRoUHJvcHMucmVzdCxcbiAgICAgICAgLi4uY29sdW1uSGVhZGVyUHJvcHMucmVzdCxcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmxleFN0eWxlcyA9IHtcbiAgICAgICAgZmxleDogaGFzTWF4V2lkdGggPyBgMSAxICR7Xy5hc1B4KGZsZXgpfWAgOiBgJHtmbGV4fSAwIGF1dG9gLFxuICAgICAgICB3aWR0aDogXy5hc1B4KHdpZHRoKSxcbiAgICAgICAgbWF4V2lkdGg6IF8uYXNQeChtYXhXaWR0aCksXG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUaENvbXBvbmVudFxuICAgICAgICAgIGtleT17YCR7aX0tJHtjb2x1bW4uaWR9YH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY2xhc3Nlcyl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIC4uLnN0eWxlcyxcbiAgICAgICAgICAgIC4uLmZsZXhTdHlsZXMsXG4gICAgICAgICAgfX1cbiAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIHtfLm5vcm1hbGl6ZUNvbXBvbmVudChjb2x1bW4uSGVhZGVyLCB7XG4gICAgICAgICAgICBkYXRhOiBzb3J0ZWREYXRhLFxuICAgICAgICAgICAgY29sdW1uLFxuICAgICAgICAgIH0pfVxuICAgICAgICA8L1RoQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VIZWFkZXJHcm91cHMgPSAoKSA9PiB7XG4gICAgICBjb25zdCB0aGVhZEdyb3VwUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkR3JvdXBQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcyksXG4gICAgICApXG4gICAgICBjb25zdCB0aGVhZEdyb3VwVHJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRHcm91cFRyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpLFxuICAgICAgKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRoZWFkQ29tcG9uZW50XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCctaGVhZGVyR3JvdXBzJywgdGhlYWRHcm91cFByb3BzLmNsYXNzTmFtZSl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIC4uLnRoZWFkR3JvdXBQcm9wcy5zdHlsZSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHsuLi50aGVhZEdyb3VwUHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIDxUckNvbXBvbmVudFxuICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGVhZEdyb3VwVHJQcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgICBzdHlsZT17dGhlYWRHcm91cFRyUHJvcHMuc3R5bGV9XG4gICAgICAgICAgICB7Li4udGhlYWRHcm91cFRyUHJvcHMucmVzdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aGVhZGVyR3JvdXBzLm1hcChtYWtlSGVhZGVyR3JvdXApfVxuICAgICAgICAgIDwvVHJDb21wb25lbnQ+XG4gICAgICAgIDwvVGhlYWRDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUhlYWRlciA9IChjb2x1bW4sIGkpID0+IHtcbiAgICAgIGNvbnN0IHJlc2l6ZWRDb2wgPSByZXNpemVkLmZpbmQoeCA9PiB4LmlkID09PSBjb2x1bW4uaWQpIHx8IHt9XG4gICAgICBjb25zdCBzb3J0ID0gc29ydGVkLmZpbmQoZCA9PiBkLmlkID09PSBjb2x1bW4uaWQpXG4gICAgICBjb25zdCBzaG93ID1cbiAgICAgICAgdHlwZW9mIGNvbHVtbi5zaG93ID09PSAnZnVuY3Rpb24nID8gY29sdW1uLnNob3coKSA6IGNvbHVtbi5zaG93XG4gICAgICBjb25zdCB3aWR0aCA9IF8uZ2V0Rmlyc3REZWZpbmVkKFxuICAgICAgICByZXNpemVkQ29sLnZhbHVlLFxuICAgICAgICBjb2x1bW4ud2lkdGgsXG4gICAgICAgIGNvbHVtbi5taW5XaWR0aCxcbiAgICAgIClcbiAgICAgIGNvbnN0IG1heFdpZHRoID0gXy5nZXRGaXJzdERlZmluZWQoXG4gICAgICAgIHJlc2l6ZWRDb2wudmFsdWUsXG4gICAgICAgIGNvbHVtbi53aWR0aCxcbiAgICAgICAgY29sdW1uLm1heFdpZHRoLFxuICAgICAgKVxuICAgICAgY29uc3QgdGhlYWRUaFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZFRoUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpLFxuICAgICAgKVxuICAgICAgY29uc3QgY29sdW1uSGVhZGVyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGNvbHVtbi5nZXRIZWFkZXJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcyksXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAgIGNvbHVtbi5oZWFkZXJDbGFzc05hbWUsXG4gICAgICAgIHRoZWFkVGhQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtbkhlYWRlclByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF1cblxuICAgICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICAuLi5jb2x1bW4uaGVhZGVyU3R5bGUsXG4gICAgICAgIC4uLnRoZWFkVGhQcm9wcy5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uSGVhZGVyUHJvcHMuc3R5bGUsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlc3QgPSB7XG4gICAgICAgIC4uLnRoZWFkVGhQcm9wcy5yZXN0LFxuICAgICAgICAuLi5jb2x1bW5IZWFkZXJQcm9wcy5yZXN0LFxuICAgICAgfVxuXG4gICAgICBjb25zdCBpc1Jlc2l6YWJsZSA9IF8uZ2V0Rmlyc3REZWZpbmVkKGNvbHVtbi5yZXNpemFibGUsIHJlc2l6YWJsZSwgZmFsc2UpXG4gICAgICBjb25zdCByZXNpemVyID0gaXNSZXNpemFibGVcbiAgICAgICAgPyAoPFJlc2l6ZXJDb21wb25lbnRcbiAgICAgICAgICBvbk1vdXNlRG93bj17ZSA9PiB0aGlzLnJlc2l6ZUNvbHVtblN0YXJ0KGUsIGNvbHVtbiwgZmFsc2UpfVxuICAgICAgICAgIG9uVG91Y2hTdGFydD17ZSA9PiB0aGlzLnJlc2l6ZUNvbHVtblN0YXJ0KGUsIGNvbHVtbiwgdHJ1ZSl9XG4gICAgICAgICAgey4uLnJlc2l6ZXJQcm9wc31cbiAgICAgICAgLz4pXG4gICAgICAgIDogbnVsbFxuXG4gICAgICBjb25zdCBpc1NvcnRhYmxlID0gXy5nZXRGaXJzdERlZmluZWQoY29sdW1uLnNvcnRhYmxlLCBzb3J0YWJsZSwgZmFsc2UpXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUaENvbXBvbmVudFxuICAgICAgICAgIGtleT17YCR7aX0tJHtjb2x1bW4uaWR9YH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICBjbGFzc2VzLFxuICAgICAgICAgICAgaXNSZXNpemFibGUgJiYgJ3J0LXJlc2l6YWJsZS1oZWFkZXInLFxuICAgICAgICAgICAgc29ydCA/IChzb3J0LmRlc2MgPyAnLXNvcnQtZGVzYycgOiAnLXNvcnQtYXNjJykgOiAnJyxcbiAgICAgICAgICAgIGlzU29ydGFibGUgJiYgJy1jdXJzb3ItcG9pbnRlcicsXG4gICAgICAgICAgICAhc2hvdyAmJiAnLWhpZGRlbicsXG4gICAgICAgICAgICBwaXZvdEJ5ICYmXG4gICAgICAgICAgICAgIHBpdm90Qnkuc2xpY2UoMCwgLTEpLmluY2x1ZGVzKGNvbHVtbi5pZCkgJiZcbiAgICAgICAgICAgICAgJ3J0LWhlYWRlci1waXZvdCcsXG4gICAgICAgICAgKX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLi4uc3R5bGVzLFxuICAgICAgICAgICAgZmxleDogaGFzTWF4V2lkdGggPyBgMSAxICR7Xy5hc1B4KHdpZHRoKX1gIDogYCR7d2lkdGh9IDAgYXV0b2AsXG4gICAgICAgICAgICB3aWR0aDogXy5hc1B4KHdpZHRoKSxcbiAgICAgICAgICAgIG1heFdpZHRoOiBfLmFzUHgobWF4V2lkdGgpLFxuICAgICAgICAgIH19XG4gICAgICAgICAgdG9nZ2xlU29ydD17ZSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNTb3J0YWJsZSkgdGhpcy5zb3J0Q29sdW1uKGNvbHVtbiwgbXVsdGlTb3J0ID8gZS5zaGlmdEtleSA6IGZhbHNlKVxuICAgICAgICAgIH19XG4gICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhpc1Jlc2l6YWJsZSAmJiAncnQtcmVzaXphYmxlLWhlYWRlci1jb250ZW50Jyl9PlxuICAgICAgICAgICAge18ubm9ybWFsaXplQ29tcG9uZW50KGNvbHVtbi5IZWFkZXIsIHtcbiAgICAgICAgICAgICAgZGF0YTogc29ydGVkRGF0YSxcbiAgICAgICAgICAgICAgY29sdW1uLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3Jlc2l6ZXJ9XG4gICAgICAgIDwvVGhDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUhlYWRlcnMgPSAoKSA9PiB7XG4gICAgICBjb25zdCB0aGVhZFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKSxcbiAgICAgIClcbiAgICAgIGNvbnN0IHRoZWFkVHJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRUclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKSxcbiAgICAgIClcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUaGVhZENvbXBvbmVudFxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnLWhlYWRlcicsIHRoZWFkUHJvcHMuY2xhc3NOYW1lKX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLi4udGhlYWRQcm9wcy5zdHlsZSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHsuLi50aGVhZFByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICA8VHJDb21wb25lbnRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17dGhlYWRUclByb3BzLmNsYXNzTmFtZX1cbiAgICAgICAgICAgIHN0eWxlPXt0aGVhZFRyUHJvcHMuc3R5bGV9XG4gICAgICAgICAgICB7Li4udGhlYWRUclByb3BzLnJlc3R9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2FsbFZpc2libGVDb2x1bW5zLm1hcChtYWtlSGVhZGVyKX1cbiAgICAgICAgICA8L1RyQ29tcG9uZW50PlxuICAgICAgICA8L1RoZWFkQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VGaWx0ZXIgPSAoY29sdW1uLCBpKSA9PiB7XG4gICAgICBjb25zdCByZXNpemVkQ29sID0gcmVzaXplZC5maW5kKHggPT4geC5pZCA9PT0gY29sdW1uLmlkKSB8fCB7fVxuICAgICAgY29uc3Qgd2lkdGggPSBfLmdldEZpcnN0RGVmaW5lZChcbiAgICAgICAgcmVzaXplZENvbC52YWx1ZSxcbiAgICAgICAgY29sdW1uLndpZHRoLFxuICAgICAgICBjb2x1bW4ubWluV2lkdGgsXG4gICAgICApXG4gICAgICBjb25zdCBtYXhXaWR0aCA9IF8uZ2V0Rmlyc3REZWZpbmVkKFxuICAgICAgICByZXNpemVkQ29sLnZhbHVlLFxuICAgICAgICBjb2x1bW4ud2lkdGgsXG4gICAgICAgIGNvbHVtbi5tYXhXaWR0aCxcbiAgICAgIClcbiAgICAgIGNvbnN0IHRoZWFkRmlsdGVyVGhQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRGaWx0ZXJUaFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKSxcbiAgICAgIClcbiAgICAgIGNvbnN0IGNvbHVtbkhlYWRlclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBjb2x1bW4uZ2V0SGVhZGVyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpLFxuICAgICAgKVxuXG4gICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICBjb2x1bW4uaGVhZGVyQ2xhc3NOYW1lLFxuICAgICAgICB0aGVhZEZpbHRlclRoUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW5IZWFkZXJQcm9wcy5jbGFzc05hbWUsXG4gICAgICBdXG5cbiAgICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgLi4uY29sdW1uLmhlYWRlclN0eWxlLFxuICAgICAgICAuLi50aGVhZEZpbHRlclRoUHJvcHMuc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtbkhlYWRlclByb3BzLnN0eWxlLFxuICAgICAgfVxuXG4gICAgICBjb25zdCByZXN0ID0ge1xuICAgICAgICAuLi50aGVhZEZpbHRlclRoUHJvcHMucmVzdCxcbiAgICAgICAgLi4uY29sdW1uSGVhZGVyUHJvcHMucmVzdCxcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmlsdGVyID0gZmlsdGVyZWQuZmluZChmaWx0ZXIgPT4gZmlsdGVyLmlkID09PSBjb2x1bW4uaWQpXG5cbiAgICAgIGNvbnN0IFJlc29sdmVkRmlsdGVyQ29tcG9uZW50ID0gY29sdW1uLkZpbHRlciB8fCBGaWx0ZXJDb21wb25lbnRcblxuICAgICAgY29uc3QgaXNGaWx0ZXJhYmxlID0gXy5nZXRGaXJzdERlZmluZWQoXG4gICAgICAgIGNvbHVtbi5maWx0ZXJhYmxlLFxuICAgICAgICBmaWx0ZXJhYmxlLFxuICAgICAgICBmYWxzZSxcbiAgICAgIClcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRoQ29tcG9uZW50XG4gICAgICAgICAga2V5PXtgJHtpfS0ke2NvbHVtbi5pZH1gfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjbGFzc2VzKX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLi4uc3R5bGVzLFxuICAgICAgICAgICAgZmxleDogaGFzTWF4V2lkdGggPyBgMSAxICR7Xy5hc1B4KHdpZHRoKX1gIDogYCR7d2lkdGh9IDAgYXV0b2AsXG4gICAgICAgICAgICB3aWR0aDogXy5hc1B4KHdpZHRoKSxcbiAgICAgICAgICAgIG1heFdpZHRoOiBfLmFzUHgobWF4V2lkdGgpLFxuICAgICAgICAgIH19XG4gICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICB7aXNGaWx0ZXJhYmxlXG4gICAgICAgICAgICA/IF8ubm9ybWFsaXplQ29tcG9uZW50KFxuICAgICAgICAgICAgICBSZXNvbHZlZEZpbHRlckNvbXBvbmVudCxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbHVtbixcbiAgICAgICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6IHZhbHVlID0+IHRoaXMuZmlsdGVyQ29sdW1uKGNvbHVtbiwgdmFsdWUpLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBkZWZhdWx0UHJvcHMuY29sdW1uLkZpbHRlcixcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgPC9UaENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlRmlsdGVycyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHRoZWFkRmlsdGVyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkRmlsdGVyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpLFxuICAgICAgKVxuICAgICAgY29uc3QgdGhlYWRGaWx0ZXJUclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZEZpbHRlclRyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpLFxuICAgICAgKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRoZWFkQ29tcG9uZW50XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCctZmlsdGVycycsIHRoZWFkRmlsdGVyUHJvcHMuY2xhc3NOYW1lKX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLi4udGhlYWRGaWx0ZXJQcm9wcy5zdHlsZSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHsuLi50aGVhZEZpbHRlclByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICA8VHJDb21wb25lbnRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17dGhlYWRGaWx0ZXJUclByb3BzLmNsYXNzTmFtZX1cbiAgICAgICAgICAgIHN0eWxlPXt0aGVhZEZpbHRlclRyUHJvcHMuc3R5bGV9XG4gICAgICAgICAgICB7Li4udGhlYWRGaWx0ZXJUclByb3BzLnJlc3R9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2FsbFZpc2libGVDb2x1bW5zLm1hcChtYWtlRmlsdGVyKX1cbiAgICAgICAgICA8L1RyQ29tcG9uZW50PlxuICAgICAgICA8L1RoZWFkQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VQYWdlUm93ID0gKHJvdywgaSwgcGF0aCA9IFtdKSA9PiB7XG4gICAgICBjb25zdCByb3dJbmZvID0ge1xuICAgICAgICBvcmlnaW5hbDogcm93W29yaWdpbmFsS2V5XSxcbiAgICAgICAgcm93LFxuICAgICAgICBpbmRleDogcm93W2luZGV4S2V5XSxcbiAgICAgICAgdmlld0luZGV4OiByb3dJbmRleCArPSAxLFxuICAgICAgICBwYWdlU2l6ZSxcbiAgICAgICAgcGFnZSxcbiAgICAgICAgbGV2ZWw6IHBhdGgubGVuZ3RoLFxuICAgICAgICBuZXN0aW5nUGF0aDogcGF0aC5jb25jYXQoW2ldKSxcbiAgICAgICAgYWdncmVnYXRlZDogcm93W2FnZ3JlZ2F0ZWRLZXldLFxuICAgICAgICBncm91cGVkQnlQaXZvdDogcm93W2dyb3VwZWRCeVBpdm90S2V5XSxcbiAgICAgICAgc3ViUm93czogcm93W3N1YlJvd3NLZXldLFxuICAgICAgfVxuICAgICAgY29uc3QgaXNFeHBhbmRlZCA9IF8uZ2V0KGV4cGFuZGVkLCByb3dJbmZvLm5lc3RpbmdQYXRoKVxuICAgICAgY29uc3QgdHJHcm91cFByb3BzID0gZ2V0VHJHcm91cFByb3BzKGZpbmFsU3RhdGUsIHJvd0luZm8sIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIGNvbnN0IHRyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRyUHJvcHMoZmluYWxTdGF0ZSwgcm93SW5mbywgdW5kZWZpbmVkLCB0aGlzKSxcbiAgICAgIClcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUckdyb3VwQ29tcG9uZW50IGtleT17cm93SW5mby5uZXN0aW5nUGF0aC5qb2luKCdfJyl9IHsuLi50ckdyb3VwUHJvcHN9PlxuICAgICAgICAgIDxUckNvbXBvbmVudFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgICAgICB0clByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgcm93Ll92aWV3SW5kZXggJSAyID8gJy1ldmVuJyA6ICctb2RkJyxcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICBzdHlsZT17dHJQcm9wcy5zdHlsZX1cbiAgICAgICAgICAgIHsuLi50clByb3BzLnJlc3R9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2FsbFZpc2libGVDb2x1bW5zLm1hcCgoY29sdW1uLCBpMikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCByZXNpemVkQ29sID0gcmVzaXplZC5maW5kKHggPT4geC5pZCA9PT0gY29sdW1uLmlkKSB8fCB7fVxuICAgICAgICAgICAgICBjb25zdCBzaG93ID1cbiAgICAgICAgICAgICAgICB0eXBlb2YgY29sdW1uLnNob3cgPT09ICdmdW5jdGlvbicgPyBjb2x1bW4uc2hvdygpIDogY29sdW1uLnNob3dcbiAgICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBfLmdldEZpcnN0RGVmaW5lZChcbiAgICAgICAgICAgICAgICByZXNpemVkQ29sLnZhbHVlLFxuICAgICAgICAgICAgICAgIGNvbHVtbi53aWR0aCxcbiAgICAgICAgICAgICAgICBjb2x1bW4ubWluV2lkdGgsXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgY29uc3QgbWF4V2lkdGggPSBfLmdldEZpcnN0RGVmaW5lZChcbiAgICAgICAgICAgICAgICByZXNpemVkQ29sLnZhbHVlLFxuICAgICAgICAgICAgICAgIGNvbHVtbi53aWR0aCxcbiAgICAgICAgICAgICAgICBjb2x1bW4ubWF4V2lkdGgsXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgY29uc3QgdGRQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgICAgICAgICBnZXRUZFByb3BzKGZpbmFsU3RhdGUsIHJvd0luZm8sIGNvbHVtbiwgdGhpcyksXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgY29uc3QgY29sdW1uUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgICAgICAgICAgY29sdW1uLmdldFByb3BzKGZpbmFsU3RhdGUsIHJvd0luZm8sIGNvbHVtbiwgdGhpcyksXG4gICAgICAgICAgICAgIClcblxuICAgICAgICAgICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICAgICAgICAgIHRkUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIGNvbHVtbi5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgY29sdW1uUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICBdXG5cbiAgICAgICAgICAgICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICAgICAgICAgIC4uLnRkUHJvcHMuc3R5bGUsXG4gICAgICAgICAgICAgICAgLi4uY29sdW1uLnN0eWxlLFxuICAgICAgICAgICAgICAgIC4uLmNvbHVtblByb3BzLnN0eWxlLFxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgY29uc3QgY2VsbEluZm8gPSB7XG4gICAgICAgICAgICAgICAgLi4ucm93SW5mbyxcbiAgICAgICAgICAgICAgICBpc0V4cGFuZGVkLFxuICAgICAgICAgICAgICAgIGNvbHVtbjogeyAuLi5jb2x1bW4gfSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogcm93SW5mby5yb3dbY29sdW1uLmlkXSxcbiAgICAgICAgICAgICAgICBwaXZvdGVkOiBjb2x1bW4ucGl2b3RlZCxcbiAgICAgICAgICAgICAgICBleHBhbmRlcjogY29sdW1uLmV4cGFuZGVyLFxuICAgICAgICAgICAgICAgIHJlc2l6ZWQsXG4gICAgICAgICAgICAgICAgc2hvdyxcbiAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICBtYXhXaWR0aCxcbiAgICAgICAgICAgICAgICB0ZFByb3BzLFxuICAgICAgICAgICAgICAgIGNvbHVtblByb3BzLFxuICAgICAgICAgICAgICAgIGNsYXNzZXMsXG4gICAgICAgICAgICAgICAgc3R5bGVzLFxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBjZWxsSW5mby52YWx1ZVxuXG4gICAgICAgICAgICAgIGxldCB1c2VPbkV4cGFuZGVyQ2xpY2tcbiAgICAgICAgICAgICAgbGV0IGlzQnJhbmNoXG4gICAgICAgICAgICAgIGxldCBpc1ByZXZpZXdcblxuICAgICAgICAgICAgICBjb25zdCBvbkV4cGFuZGVyQ2xpY2sgPSBlID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3RXhwYW5kZWQgPSBfLmNsb25lKGV4cGFuZGVkKVxuICAgICAgICAgICAgICAgIGlmIChpc0V4cGFuZGVkKSB7XG4gICAgICAgICAgICAgICAgICBuZXdFeHBhbmRlZCA9IF8uc2V0KG5ld0V4cGFuZGVkLCBjZWxsSW5mby5uZXN0aW5nUGF0aCwgZmFsc2UpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIG5ld0V4cGFuZGVkID0gXy5zZXQobmV3RXhwYW5kZWQsIGNlbGxJbmZvLm5lc3RpbmdQYXRoLCB7fSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZVdpdGhEYXRhKFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBleHBhbmRlZDogbmV3RXhwYW5kZWQsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgKCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICBvbkV4cGFuZGVkQ2hhbmdlICYmXG4gICAgICAgICAgICAgICAgICAgICAgb25FeHBhbmRlZENoYW5nZShuZXdFeHBhbmRlZCwgY2VsbEluZm8ubmVzdGluZ1BhdGgsIGUpXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8vIERlZmF1bHQgdG8gYSBzdGFuZGFyZCBjZWxsXG4gICAgICAgICAgICAgIGxldCByZXNvbHZlZENlbGwgPSBfLm5vcm1hbGl6ZUNvbXBvbmVudChcbiAgICAgICAgICAgICAgICBjb2x1bW4uQ2VsbCxcbiAgICAgICAgICAgICAgICBjZWxsSW5mbyxcbiAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgIC8vIFJlc29sdmUgUmVuZGVyZXJzXG4gICAgICAgICAgICAgIGNvbnN0IFJlc29sdmVkQWdncmVnYXRlZENvbXBvbmVudCA9XG4gICAgICAgICAgICAgICAgY29sdW1uLkFnZ3JlZ2F0ZWQgfHxcbiAgICAgICAgICAgICAgICAoIWNvbHVtbi5hZ2dyZWdhdGUgPyBBZ2dyZWdhdGVkQ29tcG9uZW50IDogY29sdW1uLkNlbGwpXG4gICAgICAgICAgICAgIGNvbnN0IFJlc29sdmVkRXhwYW5kZXJDb21wb25lbnQgPVxuICAgICAgICAgICAgICAgIGNvbHVtbi5FeHBhbmRlciB8fCBFeHBhbmRlckNvbXBvbmVudFxuICAgICAgICAgICAgICBjb25zdCBSZXNvbHZlZFBpdm90VmFsdWVDb21wb25lbnQgPVxuICAgICAgICAgICAgICAgIGNvbHVtbi5QaXZvdFZhbHVlIHx8IFBpdm90VmFsdWVDb21wb25lbnRcbiAgICAgICAgICAgICAgY29uc3QgRGVmYXVsdFJlc29sdmVkUGl2b3RDb21wb25lbnQgPVxuICAgICAgICAgICAgICAgIFBpdm90Q29tcG9uZW50IHx8XG4gICAgICAgICAgICAgICAgKHByb3BzID0+IChcbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxSZXNvbHZlZEV4cGFuZGVyQ29tcG9uZW50IHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgPFJlc29sdmVkUGl2b3RWYWx1ZUNvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICBjb25zdCBSZXNvbHZlZFBpdm90Q29tcG9uZW50ID1cbiAgICAgICAgICAgICAgICBjb2x1bW4uUGl2b3QgfHwgRGVmYXVsdFJlc29sdmVkUGl2b3RDb21wb25lbnRcblxuICAgICAgICAgICAgICAvLyBJcyB0aGlzIGNlbGwgZXhwYW5kYWJsZT9cbiAgICAgICAgICAgICAgaWYgKGNlbGxJbmZvLnBpdm90ZWQgfHwgY2VsbEluZm8uZXhwYW5kZXIpIHtcbiAgICAgICAgICAgICAgICAvLyBNYWtlIGl0IGV4cGFuZGFibGUgYnkgZGVmdWFsdFxuICAgICAgICAgICAgICAgIGNlbGxJbmZvLmV4cGFuZGFibGUgPSB0cnVlXG4gICAgICAgICAgICAgICAgdXNlT25FeHBhbmRlckNsaWNrID0gdHJ1ZVxuICAgICAgICAgICAgICAgIC8vIElmIHBpdm90ZWQsIGhhcyBubyBzdWJSb3dzLCBhbmQgZG9lcyBub3QgaGF2ZSBhIHN1YkNvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAvLyBkbyBub3QgbWFrZSBleHBhbmRhYmxlXG4gICAgICAgICAgICAgICAgaWYgKGNlbGxJbmZvLnBpdm90ZWQgJiYgIWNlbGxJbmZvLnN1YlJvd3MgJiYgIVN1YkNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgY2VsbEluZm8uZXhwYW5kYWJsZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKGNlbGxJbmZvLnBpdm90ZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBJcyB0aGlzIGNvbHVtbiBhIGJyYW5jaD9cbiAgICAgICAgICAgICAgICBpc0JyYW5jaCA9XG4gICAgICAgICAgICAgICAgICByb3dJbmZvLnJvd1twaXZvdElES2V5XSA9PT0gY29sdW1uLmlkICYmIGNlbGxJbmZvLnN1YlJvd3NcbiAgICAgICAgICAgICAgICAvLyBTaG91bGQgdGhpcyBjb2x1bW4gYmUgYmxhbms/XG4gICAgICAgICAgICAgICAgaXNQcmV2aWV3ID1cbiAgICAgICAgICAgICAgICAgIHBpdm90QnkuaW5kZXhPZihjb2x1bW4uaWQpID5cbiAgICAgICAgICAgICAgICAgICAgcGl2b3RCeS5pbmRleE9mKHJvd0luZm8ucm93W3Bpdm90SURLZXldKSAmJiBjZWxsSW5mby5zdWJSb3dzXG4gICAgICAgICAgICAgICAgLy8gUGl2b3QgQ2VsbCBSZW5kZXIgT3ZlcnJpZGVcbiAgICAgICAgICAgICAgICBpZiAoaXNCcmFuY2gpIHtcbiAgICAgICAgICAgICAgICAgIC8vIGlzUGl2b3RcbiAgICAgICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IF8ubm9ybWFsaXplQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgICAgICBSZXNvbHZlZFBpdm90Q29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgLi4uY2VsbEluZm8sXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJvd1twaXZvdFZhbEtleV0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHJvd1twaXZvdFZhbEtleV0sXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc1ByZXZpZXcpIHtcbiAgICAgICAgICAgICAgICAgIC8vIFNob3cgdGhlIHBpdm90IHByZXZpZXdcbiAgICAgICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IF8ubm9ybWFsaXplQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgICAgICBSZXNvbHZlZEFnZ3JlZ2F0ZWRDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICAgIGNlbGxJbmZvLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChjZWxsSW5mby5hZ2dyZWdhdGVkKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gXy5ub3JtYWxpemVDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICBSZXNvbHZlZEFnZ3JlZ2F0ZWRDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICBjZWxsSW5mbyxcbiAgICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChjZWxsSW5mby5leHBhbmRlcikge1xuICAgICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IF8ubm9ybWFsaXplQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgICAgUmVzb2x2ZWRFeHBhbmRlckNvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgIGNlbGxJbmZvLFxuICAgICAgICAgICAgICAgICAgcm93W3Bpdm90VmFsS2V5XSxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgaWYgKHBpdm90QnkpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChjZWxsSW5mby5ncm91cGVkQnlQaXZvdCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlZENlbGwgPSBudWxsXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoIWNlbGxJbmZvLnN1YlJvd3MgJiYgIVN1YkNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlZENlbGwgPSBudWxsXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgY29uc3QgcmVzb2x2ZWRPbkV4cGFuZGVyQ2xpY2sgPSB1c2VPbkV4cGFuZGVyQ2xpY2tcbiAgICAgICAgICAgICAgICA/IG9uRXhwYW5kZXJDbGlja1xuICAgICAgICAgICAgICAgIDogKCkgPT4ge31cblxuICAgICAgICAgICAgICAvLyBJZiB0aGVyZSBhcmUgbXVsdGlwbGUgb25DbGljayBldmVudHMsIG1ha2Ugc3VyZSB0aGV5IGRvbid0XG4gICAgICAgICAgICAgIC8vIG92ZXJyaWRlIGVhY2hvdGhlci4gVGhpcyBzaG91bGQgbWF5YmUgYmUgZXhwYW5kZWQgdG8gaGFuZGxlIGFsbFxuICAgICAgICAgICAgICAvLyBmdW5jdGlvbiBhdHRyaWJ1dGVzXG4gICAgICAgICAgICAgIGNvbnN0IGludGVyYWN0aW9uUHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgb25DbGljazogcmVzb2x2ZWRPbkV4cGFuZGVyQ2xpY2ssXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAodGRQcm9wcy5yZXN0Lm9uQ2xpY2spIHtcbiAgICAgICAgICAgICAgICBpbnRlcmFjdGlvblByb3BzLm9uQ2xpY2sgPSBlID0+IHtcbiAgICAgICAgICAgICAgICAgIHRkUHJvcHMucmVzdC5vbkNsaWNrKGUsICgpID0+IHJlc29sdmVkT25FeHBhbmRlckNsaWNrKGUpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChjb2x1bW5Qcm9wcy5yZXN0Lm9uQ2xpY2spIHtcbiAgICAgICAgICAgICAgICBpbnRlcmFjdGlvblByb3BzLm9uQ2xpY2sgPSBlID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbHVtblByb3BzLnJlc3Qub25DbGljayhlLCAoKSA9PiByZXNvbHZlZE9uRXhwYW5kZXJDbGljayhlKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvLyBSZXR1cm4gdGhlIGNlbGxcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8VGRDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1hcnJheS1pbmRleC1rZXlcbiAgICAgICAgICAgICAgICAgIGtleT17YCR7aTJ9LSR7Y29sdW1uLmlkfWB9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXMsXG4gICAgICAgICAgICAgICAgICAgICFzaG93ICYmICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICBjZWxsSW5mby5leHBhbmRhYmxlICYmICdydC1leHBhbmRhYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgKGlzQnJhbmNoIHx8IGlzUHJldmlldykgJiYgJ3J0LXBpdm90JyxcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAuLi5zdHlsZXMsXG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IGhhc01heFdpZHRoID8gYDEgMSAke18uYXNQeCh3aWR0aCl9YCA6IGAke3dpZHRofSAwIGF1dG9gLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXy5hc1B4KHdpZHRoKSxcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IF8uYXNQeChtYXhXaWR0aCksXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgey4uLnRkUHJvcHMucmVzdH1cbiAgICAgICAgICAgICAgICAgIHsuLi5jb2x1bW5Qcm9wcy5yZXN0fVxuICAgICAgICAgICAgICAgICAgey4uLmludGVyYWN0aW9uUHJvcHN9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3Jlc29sdmVkQ2VsbH1cbiAgICAgICAgICAgICAgICA8L1RkQ29tcG9uZW50PlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L1RyQ29tcG9uZW50PlxuICAgICAgICAgIHtyb3dJbmZvLnN1YlJvd3MgJiZcbiAgICAgICAgICAgIGlzRXhwYW5kZWQgJiZcbiAgICAgICAgICAgIHJvd0luZm8uc3ViUm93cy5tYXAoKGQsIGkpID0+XG4gICAgICAgICAgICAgIG1ha2VQYWdlUm93KGQsIGksIHJvd0luZm8ubmVzdGluZ1BhdGgpLFxuICAgICAgICAgICAgKX1cbiAgICAgICAgICB7U3ViQ29tcG9uZW50ICYmXG4gICAgICAgICAgICAhcm93SW5mby5zdWJSb3dzICYmXG4gICAgICAgICAgICBpc0V4cGFuZGVkICYmXG4gICAgICAgICAgICBTdWJDb21wb25lbnQocm93SW5mbyl9XG4gICAgICAgIDwvVHJHcm91cENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlUGFkQ29sdW1uID0gKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgY29uc3QgcmVzaXplZENvbCA9IHJlc2l6ZWQuZmluZCh4ID0+IHguaWQgPT09IGNvbHVtbi5pZCkgfHwge31cbiAgICAgIGNvbnN0IHNob3cgPVxuICAgICAgICB0eXBlb2YgY29sdW1uLnNob3cgPT09ICdmdW5jdGlvbicgPyBjb2x1bW4uc2hvdygpIDogY29sdW1uLnNob3dcbiAgICAgIGNvbnN0IHdpZHRoID0gXy5nZXRGaXJzdERlZmluZWQoXG4gICAgICAgIHJlc2l6ZWRDb2wudmFsdWUsXG4gICAgICAgIGNvbHVtbi53aWR0aCxcbiAgICAgICAgY29sdW1uLm1pbldpZHRoLFxuICAgICAgKVxuICAgICAgY29uc3QgZmxleCA9IHdpZHRoXG4gICAgICBjb25zdCBtYXhXaWR0aCA9IF8uZ2V0Rmlyc3REZWZpbmVkKFxuICAgICAgICByZXNpemVkQ29sLnZhbHVlLFxuICAgICAgICBjb2x1bW4ud2lkdGgsXG4gICAgICAgIGNvbHVtbi5tYXhXaWR0aCxcbiAgICAgIClcbiAgICAgIGNvbnN0IHRkUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRkUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpLFxuICAgICAgKVxuICAgICAgY29uc3QgY29sdW1uUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGNvbHVtbi5nZXRQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcyksXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAgIHRkUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW4uY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW5Qcm9wcy5jbGFzc05hbWUsXG4gICAgICBdXG5cbiAgICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgLi4udGRQcm9wcy5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW5Qcm9wcy5zdHlsZSxcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRkQ29tcG9uZW50XG4gICAgICAgICAga2V5PXtgJHtpfS0ke2NvbHVtbi5pZH1gfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjbGFzc2VzLCAhc2hvdyAmJiAnaGlkZGVuJyl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIC4uLnN0eWxlcyxcbiAgICAgICAgICAgIGZsZXg6IGhhc01heFdpZHRoID8gYDEgMSAke18uYXNQeChmbGV4KX1gIDogYCR7ZmxleH0gMCBhdXRvYCxcbiAgICAgICAgICAgIHdpZHRoOiBfLmFzUHgod2lkdGgpLFxuICAgICAgICAgICAgbWF4V2lkdGg6IF8uYXNQeChtYXhXaWR0aCksXG4gICAgICAgICAgfX1cbiAgICAgICAgICB7Li4udGRQcm9wcy5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAge18ubm9ybWFsaXplQ29tcG9uZW50KFBhZFJvd0NvbXBvbmVudCl9XG4gICAgICAgIDwvVGRDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZVBhZFJvdyA9IChyb3csIGkpID0+IHtcbiAgICAgIGNvbnN0IHRyR3JvdXBQcm9wcyA9IGdldFRyR3JvdXBQcm9wcyhcbiAgICAgICAgZmluYWxTdGF0ZSxcbiAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIHRoaXMsXG4gICAgICApXG4gICAgICBjb25zdCB0clByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKSxcbiAgICAgIClcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUckdyb3VwQ29tcG9uZW50IGtleT17aX0gey4uLnRyR3JvdXBQcm9wc30+XG4gICAgICAgICAgPFRyQ29tcG9uZW50XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICAgICctcGFkUm93JyxcbiAgICAgICAgICAgICAgKHBhZ2VSb3dzLmxlbmd0aCArIGkpICUgMiA/ICctZXZlbicgOiAnLW9kZCcsXG4gICAgICAgICAgICAgIHRyUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHN0eWxlPXt0clByb3BzLnN0eWxlIHx8IHt9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHthbGxWaXNpYmxlQ29sdW1ucy5tYXAobWFrZVBhZENvbHVtbil9XG4gICAgICAgICAgPC9UckNvbXBvbmVudD5cbiAgICAgICAgPC9Uckdyb3VwQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VDb2x1bW5Gb290ZXIgPSAoY29sdW1uLCBpKSA9PiB7XG4gICAgICBjb25zdCByZXNpemVkQ29sID0gcmVzaXplZC5maW5kKHggPT4geC5pZCA9PT0gY29sdW1uLmlkKSB8fCB7fVxuICAgICAgY29uc3Qgc2hvdyA9XG4gICAgICAgIHR5cGVvZiBjb2x1bW4uc2hvdyA9PT0gJ2Z1bmN0aW9uJyA/IGNvbHVtbi5zaG93KCkgOiBjb2x1bW4uc2hvd1xuICAgICAgY29uc3Qgd2lkdGggPSBfLmdldEZpcnN0RGVmaW5lZChcbiAgICAgICAgcmVzaXplZENvbC52YWx1ZSxcbiAgICAgICAgY29sdW1uLndpZHRoLFxuICAgICAgICBjb2x1bW4ubWluV2lkdGgsXG4gICAgICApXG4gICAgICBjb25zdCBtYXhXaWR0aCA9IF8uZ2V0Rmlyc3REZWZpbmVkKFxuICAgICAgICByZXNpemVkQ29sLnZhbHVlLFxuICAgICAgICBjb2x1bW4ud2lkdGgsXG4gICAgICAgIGNvbHVtbi5tYXhXaWR0aCxcbiAgICAgIClcbiAgICAgIGNvbnN0IHRGb290VGRQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGZvb3RUZFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKSxcbiAgICAgIClcbiAgICAgIGNvbnN0IGNvbHVtblByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBjb2x1bW4uZ2V0UHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpLFxuICAgICAgKVxuICAgICAgY29uc3QgY29sdW1uRm9vdGVyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGNvbHVtbi5nZXRGb290ZXJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcyksXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAgIHRGb290VGRQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtbi5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtblByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uRm9vdGVyUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgXVxuXG4gICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgIC4uLnRGb290VGRQcm9wcy5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW5Qcm9wcy5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uRm9vdGVyUHJvcHMuc3R5bGUsXG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUZENvbXBvbmVudFxuICAgICAgICAgIGtleT17YCR7aX0tJHtjb2x1bW4uaWR9YH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY2xhc3NlcywgIXNob3cgJiYgJ2hpZGRlbicpfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi5zdHlsZXMsXG4gICAgICAgICAgICBmbGV4OiBoYXNNYXhXaWR0aCA/IGAxIDEgJHtfLmFzUHgod2lkdGgpfWA6IGAke3dpZHRofSAwIGF1dG9gLFxuICAgICAgICAgICAgd2lkdGg6IF8uYXNQeCh3aWR0aCksXG4gICAgICAgICAgICBtYXhXaWR0aDogXy5hc1B4KG1heFdpZHRoKSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHsuLi5jb2x1bW5Qcm9wcy5yZXN0fVxuICAgICAgICAgIHsuLi50Rm9vdFRkUHJvcHMucmVzdH1cbiAgICAgICAgICB7Li4uY29sdW1uRm9vdGVyUHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIHtfLm5vcm1hbGl6ZUNvbXBvbmVudChjb2x1bW4uRm9vdGVyLCB7XG4gICAgICAgICAgICBkYXRhOiBzb3J0ZWREYXRhLFxuICAgICAgICAgICAgY29sdW1uLFxuICAgICAgICAgIH0pfVxuICAgICAgICA8L1RkQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VDb2x1bW5Gb290ZXJzID0gKCkgPT4ge1xuICAgICAgY29uc3QgdEZvb3RQcm9wcyA9IGdldFRmb290UHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICBjb25zdCB0Rm9vdFRyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRmb290VHJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcyksXG4gICAgICApXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGZvb3RDb21wb25lbnRcbiAgICAgICAgICBjbGFzc05hbWU9e3RGb290UHJvcHMuY2xhc3NOYW1lfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi50Rm9vdFByb3BzLnN0eWxlLFxuICAgICAgICAgIH19XG4gICAgICAgICAgey4uLnRGb290UHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIDxUckNvbXBvbmVudFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHRGb290VHJQcm9wcy5jbGFzc05hbWUpfVxuICAgICAgICAgICAgc3R5bGU9e3RGb290VHJQcm9wcy5zdHlsZX1cbiAgICAgICAgICAgIHsuLi50Rm9vdFRyUHJvcHMucmVzdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YWxsVmlzaWJsZUNvbHVtbnMubWFwKG1ha2VDb2x1bW5Gb290ZXIpfVxuICAgICAgICAgIDwvVHJDb21wb25lbnQ+XG4gICAgICAgIDwvVGZvb3RDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZVBhZ2luYXRpb24gPSAoKSA9PiB7XG4gICAgICBjb25zdCBwYWdpbmF0aW9uUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFBhZ2luYXRpb25Qcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcyksXG4gICAgICApXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UGFnaW5hdGlvbkNvbXBvbmVudFxuICAgICAgICAgIHsuLi5yZXNvbHZlZFN0YXRlfVxuICAgICAgICAgIHBhZ2VzPXtwYWdlc31cbiAgICAgICAgICBjYW5QcmV2aW91cz17Y2FuUHJldmlvdXN9XG4gICAgICAgICAgY2FuTmV4dD17Y2FuTmV4dH1cbiAgICAgICAgICBvblBhZ2VDaGFuZ2U9e3RoaXMub25QYWdlQ2hhbmdlfVxuICAgICAgICAgIG9uUGFnZVNpemVDaGFuZ2U9e3RoaXMub25QYWdlU2l6ZUNoYW5nZX1cbiAgICAgICAgICBjbGFzc05hbWU9e3BhZ2luYXRpb25Qcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgc3R5bGU9e3BhZ2luYXRpb25Qcm9wcy5zdHlsZX1cbiAgICAgICAgICB7Li4ucGFnaW5hdGlvblByb3BzLnJlc3R9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZVRhYmxlID0gKCkgPT4ge1xuICAgICAgY29uc3QgcGFnaW5hdGlvbiA9IG1ha2VQYWdpbmF0aW9uKClcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ1JlYWN0VGFibGUnLCBjbGFzc05hbWUsIHJvb3RQcm9wcy5jbGFzc05hbWUpfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi5zdHlsZSxcbiAgICAgICAgICAgIC4uLnJvb3RQcm9wcy5zdHlsZSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHsuLi5yb290UHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIHtzaG93UGFnaW5hdGlvbiAmJiBzaG93UGFnaW5hdGlvblRvcFxuICAgICAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRpb24tdG9wXCI+XG4gICAgICAgICAgICAgIHtwYWdpbmF0aW9ufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgPFRhYmxlQ29tcG9uZW50XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICAgIHRhYmxlUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICBjdXJyZW50bHlSZXNpemluZyA/ICdydC1yZXNpemluZycgOiAnJyxcbiAgICAgICAgICAgICAgaGFzTWF4V2lkdGggPyAncnQtbWF4d2lkdGgnIDogJycsXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgc3R5bGU9e3RhYmxlUHJvcHMuc3R5bGV9XG4gICAgICAgICAgICB7Li4udGFibGVQcm9wcy5yZXN0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtoYXNIZWFkZXJHcm91cHMgPyBtYWtlSGVhZGVyR3JvdXBzKCkgOiBudWxsfVxuICAgICAgICAgICAge21ha2VIZWFkZXJzKCl9XG4gICAgICAgICAgICB7aGFzRmlsdGVycyA/IG1ha2VGaWx0ZXJzKCkgOiBudWxsfVxuICAgICAgICAgICAgPFRib2R5Q29tcG9uZW50XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh0Qm9keVByb3BzLmNsYXNzTmFtZSl9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgLi4udEJvZHlQcm9wcy5zdHlsZSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgey4uLnRCb2R5UHJvcHMucmVzdH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3BhZ2VSb3dzLm1hcCgoZCwgaSkgPT4gbWFrZVBhZ2VSb3coZCwgaSkpfVxuICAgICAgICAgICAgICB7cGFkUm93cy5tYXAobWFrZVBhZFJvdyl9XG4gICAgICAgICAgICA8L1Rib2R5Q29tcG9uZW50PlxuICAgICAgICAgICAge2hhc0NvbHVtbkZvb3RlciA/IG1ha2VDb2x1bW5Gb290ZXJzKCkgOiBudWxsfVxuICAgICAgICAgIDwvVGFibGVDb21wb25lbnQ+XG4gICAgICAgICAge3Nob3dQYWdpbmF0aW9uICYmIHNob3dQYWdpbmF0aW9uQm90dG9tXG4gICAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvbi1ib3R0b21cIj5cbiAgICAgICAgICAgICAge3BhZ2luYXRpb259XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICB7IXBhZ2VSb3dzLmxlbmd0aCAmJlxuICAgICAgICAgICAgPE5vRGF0YUNvbXBvbmVudCB7Li4ubm9EYXRhUHJvcHN9PlxuICAgICAgICAgICAgICB7Xy5ub3JtYWxpemVDb21wb25lbnQobm9EYXRhVGV4dCl9XG4gICAgICAgICAgICA8L05vRGF0YUNvbXBvbmVudD59XG4gICAgICAgICAgPExvYWRpbmdDb21wb25lbnRcbiAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XG4gICAgICAgICAgICBsb2FkaW5nVGV4dD17bG9hZGluZ1RleHR9XG4gICAgICAgICAgICB7Li4ubG9hZGluZ1Byb3BzfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIGNoaWxkUHJvcHMgYXJlIG9wdGlvbmFsbHkgcGFzc2VkIHRvIGEgZnVuY3Rpb24tYXMtYS1jaGlsZFxuICAgIHJldHVybiBjaGlsZHJlbiA/IGNoaWxkcmVuKGZpbmFsU3RhdGUsIG1ha2VUYWJsZSwgdGhpcykgOiBtYWtlVGFibGUoKVxuICB9XG59XG4iXX0=