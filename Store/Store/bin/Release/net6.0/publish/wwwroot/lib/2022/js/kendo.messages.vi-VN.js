(function ($, undefined) {
    /* FlatColorPicker messages */

    if (kendo.ui.FlatColorPicker) {
        kendo.ui.FlatColorPicker.prototype.options.messages =
        $.extend(true, kendo.ui.FlatColorPicker.prototype.options.messages, {
            "apply": "Áp dụng",
            "cancel": "Hủy bỏ",
            "noColor": "không chọn",
            "clearColor": "Xóa bỏ"
        });
    }

    /* ColorPicker messages */

    if (kendo.ui.ColorPicker) {
        kendo.ui.ColorPicker.prototype.options.messages =
        $.extend(true, kendo.ui.ColorPicker.prototype.options.messages, {
            "apply": "Áp dụng",
            "cancel": "Hủy bỏ",
            "noColor": "không chọn",
            "clearColor": "Xóa bỏ"
        });
    }

    /* ColumnMenu messages */

    if (kendo.ui.ColumnMenu) {
        kendo.ui.ColumnMenu.prototype.options.messages =
        $.extend(true, kendo.ui.ColumnMenu.prototype.options.messages, {
            "sortAscending": "Tăng dần",
            "sortDescending": "Giảm dần",
            "filter": "Lọc",
            "column": "Cột",
            "columns": "Columns",
            "columnVisibility": "Cột hiển thị",//Column Visibility
            "clear": "Xóa",
            "cancel": "Hủy bỏ",
            "done": "Xong",
            "settings": "Cài đặt",//Edit Column Settings
            "lock": "Khóa",
            "unlock": "Mở khóa"
        });
    }

    /* DateRangePicker messages */

    if (kendo.ui.DateRangePicker) {
        kendo.ui.DateRangePicker.prototype.options.messages =
        $.extend(true, kendo.ui.DateRangePicker.prototype.options.messages, {
            "startLabel": "Từ ngày",
            "endLabel": "Đến ngày"
        });
    }

    /* Editor messages */

    if (kendo.ui.Editor) {
        kendo.ui.Editor.prototype.options.messages =
        $.extend(true, kendo.ui.Editor.prototype.options.messages, {
            "bold": "In đậm",
            "italic": "In nghiêng",
            "underline": "Gạch chân",
            "strikethrough": "Gạch ngang",
            "superscript": "Superscript",
            "subscript": "Bản thảo",
            "justifyCenter": "Canh giữa",
            "justifyLeft": "Canh lề trái",
            "justifyRight": "Canh lề phải",
            "justifyFull": "Justify",
            "insertUnorderedList": "Chèn danh sách không có thứ tự",
            "insertOrderedList": "Chèn danh sách theo thứ tự",
            "indent": "Thụt lề",
            "outdent": "Outdent",
            "createLink": "Chèn liên kết",
            "unlink": "Xóa liên kết",
            "insertImage": "Chèn hình ảnh",
            "insertFile": "Chèn tệp",
            "insertHtml": "Chèn HTML",
            "viewHtml": "Xem HTML",
            "fontName": "Chọn phông chữ",
            "fontNameInherit": "(phông chữ kế thừa)",
            "fontSize": "Chọn kích thước chữ",
            "fontSizeInherit": "(kích thước kế thừa)",
            "formatBlock": "Định dạng",
            "formatting": "Định dạng",
            "foreColor": "Màu chữ",
            "backColor": "Màu nền",
            "style": "Kiểu dáng",
            "emptyFolder": "Thư mục trống",
            "uploadFile": "Tải tệp lên",
            "overflowAnchor": "Nhiều hơn",
            "orderBy": "Sắp xếp theo:",
            "orderBySize": "Kích thước",
            "orderByName": "Tên",
            "invalidFileType": "Tệp đã chọn \"{0}\" không hợp lệ. Các loại file hỗ trợ: {1}.",
            "deleteFile": 'Bạn có chắc chắn muốn xóa "{0}"?',
            "overwriteFile": 'Tệp "{0}" đã tồn tại trong thư mục. Bạn có muốn ghi đè lên?',
            "directoryNotFound": "Không tìm thấy thư mục có tên này.",
            "imageWebAddress": "Địa chỉ web",
            "imageAltText": "Văn bản thay thế",
            "imageWidth": "Chiều dài (px)",
            "imageHeight": "Chiều rộng (px)",
            "fileWebAddress": "Địa chỉ web",
            "fileTitle": "Tiêu đề",
            "linkWebAddress": "Địa chỉ web",
            "linkText": "Văn bản",
            "linkToolTip": "ToolTip",
            "linkOpenInNewWindow": "Mở liên kết trong cửa sổ mới",
            "dialogUpdate": "Cập nhật",
            "dialogInsert": "Thêm mới",
            "dialogButtonSeparator": "hoặc",
            "dialogCancel": "Hủy bỏ",
            "cleanFormatting": "Xóa định dạng",
            "createTable": "Tạo bảng mới",
            "addColumnLeft": "Thêm cột bên trái",
            "addColumnRight": "Thêm cột bên phải",
            "addRowAbove": "Thêm hàng ở trên",
            "addRowBelow": "Thêm hàng ở dưới",
            "deleteRow": "Xóa hàng",
            "deleteColumn": "Xóa cột",
            "dialogOk": "Ok",
            "tableWizard": "Bảng hướng dẫn",
            "tableTab": "Bảng",
            "cellTab": "Cột",
            "accessibilityTab": "Khả năng tiếp cận",
            "caption": "Chú thích",
            "summary": "Rút gọn",
            "width": "Chiều dài",
            "height": "Chiều cao",
            "units": "Đơn vị",
            "cellSpacing": "Khoảng cách đơn vị",
            "cellPadding": "Khoảng cách trong",
            "cellMargin": "Khoảng cách ngoài",
            "alignment": "Sắp xếp",
            "background": "Nền",
            "cssClass": "CSS Class",
            "id": "ID",
            "border": "Border",
            "borderStyle": "Border Style",
            "collapseBorders": "Collapse borders",
            "wrapText": "Wrap text",
            "associateCellsWithHeaders": "Associate cells with headers",
            "alignLeft": "Align Left",
            "alignCenter": "Align Center",
            "alignRight": "Align Right",
            "alignLeftTop": "Align Left Top",
            "alignCenterTop": "Align Center Top",
            "alignRightTop": "Align Right Top",
            "alignLeftMiddle": "Align Left Middle",
            "alignCenterMiddle": "Align Center Middle",
            "alignRightMiddle": "Align Right Middle",
            "alignLeftBottom": "Align Left Bottom",
            "alignCenterBottom": "Align Center Bottom",
            "alignRightBottom": "Align Right Bottom",
            "alignRemove": "Remove Alignment",
            "columns": "Columns",
            "rows": "Rows",
            "selectAllCells": "Select All Cells"
        });
    }

    /* FileBrowser messages */

    if (kendo.ui.FileBrowser) {
        kendo.ui.FileBrowser.prototype.options.messages =
        $.extend(true, kendo.ui.FileBrowser.prototype.options.messages, {
            "uploadFile": "Tải lên",
            "orderBy": "Sắp xếp theo",
            "orderByName": "Tên tệp",
            "orderBySize": "kích thước",
            "directoryNotFound": "Không tìm thấy thư mục có tên này.",
            "emptyFolder": "Thư mục trống",
            "deleteFile": 'Bạn có chắc chắn muốn xóa "{0}"?',
            "invalidFileType": "Tệp đã chọn \"{0}\" không hợp lệ. Các định dạng tệp hỗ trợ: {1}.",
            "overwriteFile": "Tệp \"{0}\" đã tồn tại trong thư mục. Bạn có muốn ghi đè lên?",
            "dropFilesHere": "Kéo tệp vào đây để tải lên",
            "search": "Tìm kiếm"
        });
    }

    /* FilterCell messages */

    if (kendo.ui.FilterCell) {
        kendo.ui.FilterCell.prototype.options.messages =
        $.extend(true, kendo.ui.FilterCell.prototype.options.messages, {
            "isTrue": "Đúng",
            "isFalse": "Sai",
            "filter": "Lọc",
            "clear": "Xóa",
            "operator": "Lựa chọn"
        });
    }

    /* FilterCell operators */

    if (kendo.ui.FilterCell) {
        kendo.ui.FilterCell.prototype.options.operators =
        $.extend(true, kendo.ui.FilterCell.prototype.options.operators, {
            "string": {
                "eq": "Bằng",
                "neq": "Khác",
                "startswith": "Bắt đầu từ",
                "contains": "Chứa",
                "doesnotcontain": "Không chứa",
                "endswith": "Kết thúc bằng",
                "isnull": "Null",
                "isnotnull": "Không Null",
                "isempty": "Rỗng",
                "isnotempty": "Không Rỗng",
                "isnullorempty": "Không có giá trị",
                "isnotnullorempty": "Có giá trị"
            },
            "number": {
                "eq": "=",
                "neq": "!=",
                "gte": ">=",
                "gt": ">",
                "lte": "<=",
                "lt": "<",
                "isnull": "Null",
                "isnotnull": "Không Null"
            },
            "date": {
                "eq": "=",
                "neq": "!=",
                "gte": ">=",
                "gt": ">",
                "lte": "<=",
                "lt": "<",
                "isnull": "Null",
                "isnotnull": "Không Null"
            },
            "enums": {
                "eq": "=",
                "neq": "!=",
                "isnull": "Null",
                "isnotnull": "Không Null"
            }
        });
    }

    /* FilterMenu messages */

    if (kendo.ui.FilterMenu) {
        kendo.ui.FilterMenu.prototype.options.messages =
        $.extend(true, kendo.ui.FilterMenu.prototype.options.messages, {
            "info": "Hiển thị các mục có giá trị đó:",
            "title": "Hiển thị các mục có giá trị đó",
            "isTrue": "Đúng",
            "isFalse": "Sai",
            "filter": "Lọc",
            "clear": "Xóa",
            "and": "Và",
            "or": "Hoặc",
            "selectValue": "-Chọn giá trị-",
            "operator": "Toản tử",
            "value": "Giá trị",
            "cancel": "Hủy bỏ",
            "done": "Xong",
            "into": "trong"
        });
    }

    /* FilterMenu operator messages */

    if (kendo.ui.FilterMenu) {
        kendo.ui.FilterMenu.prototype.options.operators =
        $.extend(true, kendo.ui.FilterMenu.prototype.options.operators, {
            "string": {
                "eq": "Bằng",
                "neq": "Khác",
                "startswith": "Bắt đầu từ",
                "contains": "Chứa",
                "doesnotcontain": "Không chứa",
                "endswith": "Kết thúc bằng",
                "isnull": "Null",
                "isnotnull": "Not Null",
                "isempty": "Rỗng",
                "isnotempty": "Không Rỗng",
                "isnullorempty": "Không có giá trị",
                "isnotnullorempty": "Có giá trị"
            },
            "number": {
                "eq": "=",
                "neq": "!=",
                "gte": ">=",
                "gt": ">",
                "lte": "<=",
                "lt": "<",
                "isnull": "Null",
                "isnotnull": "Không Null"
            },
            "date": {
                "eq": "=",
                "neq": "!=",
                "gte": ">=",
                "gt": ">",
                "lte": "<=",
                "lt": "<",
                "isnull": "Null",
                "isnotnull": "Không Null"
            },
            "enums": {
                "eq": "=",
                "neq": "!=",
                "isnull": "Null",
                "isnotnull": "Không Null"
            }
        });
    }

    /* FilterMultiCheck messages */

    if (kendo.ui.FilterMultiCheck) {
        kendo.ui.FilterMultiCheck.prototype.options.messages =
        $.extend(true, kendo.ui.FilterMultiCheck.prototype.options.messages, {
            "checkAll": "Chọn tất cả",
            "clearAll": "Xóa tất cả",
            "clear": "Xóa",
            "filter": "Lọc",
            "search": "Tìm kiếm",
            "cancel": "Hủy bỏ",
            "selectedItemsFormat": "{0} phân tử được chọn",
            "done": "Xong",
            "into": "trong"
        });
    }

    /* Gantt messages */

    if (kendo.ui.Gantt) {
        kendo.ui.Gantt.prototype.options.messages =
        $.extend(true, kendo.ui.Gantt.prototype.options.messages, {
            "actions": {
                "addChild": "Add Child",
                "append": "Add Task",
                "insertAfter": "Add Below",
                "insertBefore": "Add Above",
                "pdf": "Export to PDF"
            },
            "cancel": "Cancel",
            "deleteDependencyWindowTitle": "Delete dependency",
            "deleteTaskWindowTitle": "Delete task",
            "destroy": "Delete",
            "editor": {
                "assingButton": "Assign",
                "editorTitle": "Task",
                "end": "End",
                "percentComplete": "Complete",
                "resources": "Resources",
                "resourcesEditorTitle": "Resources",
                "resourcesHeader": "Resources",
                "start": "Start",
                "title": "Title",
                "unitsHeader": "Units"
            },
            "save": "Save",
            "views": {
                "day": "Day",
                "end": "End",
                "month": "Month",
                "start": "Start",
                "week": "Week",
                "year": "Year"
            }
        });
    }

    /* Grid messages */

    if (kendo.ui.Grid) {
        kendo.ui.Grid.prototype.options.messages =
        $.extend(true, kendo.ui.Grid.prototype.options.messages, {
            "commands": {
                "cancel": "Hủy bỏ thay đổi",
                "canceledit": "Hủy bỏ",
                "create": "Thêm dòng mới",
                "destroy": "Xóa",
                "edit": "Sửa",
                "excel": "Xuất Excel",
                "pdf": "Xuất PDF",
                "save": "Lưu thay đổi",
                "select": "Chọn",
                "update": "Cập nhật"
            },
            "editable": {
                "cancelDelete": "Hủy bỏ",
                "confirmation": "Bạn có chắc chắn muốn xóa bỏ?",
                "confirmDelete": "Xóa"
            },
            "noRecords": "Không có dữ liệu.",
            "expandCollapseColumnHeader": "",
            "groupHeader": "Nhấn ctrl + dấu cách để gom nhóm",
            "ungroupHeader": "Nhấn ctrl + dấu cách để bỏ gom nhóm"
        });
    }

    /* TreeList messages */

    if (kendo.ui.TreeList) {
        kendo.ui.TreeList.prototype.options.messages =
        $.extend(true, kendo.ui.TreeList.prototype.options.messages, {
            "noRows": "Không có dữ liệu hiển thị",
            "loading": "Đang tải...",
            "requestFailed": "Yêu cầu thất bại.",
            "retry": "Thử lại",
            "commands": {
                "edit": "Sửa",
                "update": "Cập nhật",
                "canceledit": "Hủy bỏ",
                "create": "Thêm dòng mới",
                "createchild": "Thêm dòng con mới",
                "destroy": "Xóa",
                "excel": "Xuất Excel",
                "pdf": "Xuất PDF"
            }
        });
    }

    /* Groupable messages */

    if (kendo.ui.Groupable) {
        kendo.ui.Groupable.prototype.options.messages =
        $.extend(true, kendo.ui.Groupable.prototype.options.messages, {
            "empty": "Kéo một tiêu đề cột và thả nó ở đây để nhóm theo cột đó"
        });
    }

    /* NumericTextBox messages */

    if (kendo.ui.NumericTextBox) {
        kendo.ui.NumericTextBox.prototype.options =
        $.extend(true, kendo.ui.NumericTextBox.prototype.options, {
            "upArrowText": "Tăng giá trị",
            "downArrowText": "Giảm giá trị"
        });
    }

    /* MediaPlayer messages */

    if (kendo.ui.MediaPlayer) {
        kendo.ui.MediaPlayer.prototype.options.messages =
        $.extend(true, kendo.ui.MediaPlayer.prototype.options.messages, {
            "pause": "Dừng",
            "play": "Tiếp tục",
            "mute": "Tắt tiếng",
            "unmute": "Mở tiếng",
            "quality": "Tốc độ",
            "fullscreen": "Toàn màn hình"
        });
    }

    /* Pager messages */

    if (kendo.ui.Pager) {
        kendo.ui.Pager.prototype.options.messages =
        $.extend(true, kendo.ui.Pager.prototype.options.messages, {
            "allPages": "All",
            "display": "{0} - {1} của {2} dòng",
            "empty": "Không có dữ liệu hiển thị",
            "page": "Trang",
            "of": "của {0}",
            "itemsPerPage": "mục trên trang",
            "first": "Trang đầu tiên",
            "previous": "Trang trước",
            "next": "Trang tiếp theo",
            "last": "Trang cuối cùng",
            "refresh": "Làm mới",
            "morePages": "Nhiều hơn"
        });
    }

    /* TreeListPager messages */

    if (kendo.ui.TreeListPager) {
        kendo.ui.TreeListPager.prototype.options.messages =
        $.extend(true, kendo.ui.TreeListPager.prototype.options.messages, {
            "allPages": "All",
            "display": "{0} - {1} of {2} items",
            "empty": "No items to display",
            "page": "Page",
            "of": "of {0}",
            "itemsPerPage": "items per page",
            "first": "Go to the first page",
            "previous": "Go to the previous page",
            "next": "Go to the next page",
            "last": "Go to the last page",
            "refresh": "Refresh",
            "morePages": "More pages"
        });
    }

    /* PivotGrid messages */

    if (kendo.ui.PivotGrid) {
        kendo.ui.PivotGrid.prototype.options.messages =
        $.extend(true, kendo.ui.PivotGrid.prototype.options.messages, {
            "measureFields": "Thả trường dữ liệu ở đây",
            "columnFields": "Thả cột ở đây",
            "rowFields": "Thả hàng ở đây"
        });
    }

    /* PivotFieldMenu messages */

    if (kendo.ui.PivotFieldMenu) {
        kendo.ui.PivotFieldMenu.prototype.options.messages =
        $.extend(true, kendo.ui.PivotFieldMenu.prototype.options.messages, {
            "info": "Show items with value that:",
            "filterFields": "Lọc theo trường",
            "filter": "Lọc",
            "include": "Chọn trường...",
            "title": "Các trường bao gồm",
            "clear": "Xóa",
            "ok": "Ok",
            "cancel": "Hủy bỏ",
            "operators": {
                "contains": "Chứa",
                "doesnotcontain": "Không chứa",
                "startswith": "Bắt đầu bằng",
                "endswith": "Kết thúc bằng",
                "eq": "Bằng",
                "neq": "Khác"
            }
        });
    }

    /* RecurrenceEditor messages */

    if (kendo.ui.RecurrenceEditor) {
        kendo.ui.RecurrenceEditor.prototype.options.messages =
        $.extend(true, kendo.ui.RecurrenceEditor.prototype.options.messages, {
            "frequencies": {
                "never": "Không bao giờ",
                "hourly": "Hàng giờ",
                "daily": "Hằng ngày",
                "weekly": "Hằng tuần",
                "monthly": "Hằng tháng",
                "yearly": "Hằng năm"
            },
            "hourly": {
                "repeatEvery": "Lặp lại mỗi: ",
                "interval": " giờ"
            },
            "daily": {
                "repeatEvery": "Lặp lại mỗi: ",
                "interval": " ngày"
            },
            "weekly": {
                "interval": " tuần",
                "repeatEvery": "Lặp lại mỗi: ",
                "repeatOn": "Lặp lại trong: "
            },
            "monthly": {
                "repeatEvery": "Lặp lại mỗi: ",
                "repeatOn": "Lặp lại trong: ",
                "interval": " tháng",
                "day": "Ngày "
            },
            "yearly": {
                "repeatEvery": "Lặp lại mỗi: ",
                "repeatOn": "Lặp lại trong: ",
                "interval": " năm",
                "of": " của "
            },
            "end": {
                "label": "Kết thúc:",
                "mobileLabel": "Kết thúc",
                "never": "Không bao giờ",
                "after": "Sau ",
                "occurrence": " xảy ra",
                "on": "Trong "
            },
            "offsetPositions": {
                "first": "thứ nhất",
                "second": "thứ hai",
                "third": "thứ ba",
                "fourth": "thứ tư",
                "last": "cuối cùng"
            },
            "weekdays": {
                "day": "ngày",
                "weekday": "ngày trong tuần",
                "weekend": "ngày cuối tuần"
            }
        });
    }

    /* Scheduler messages */

    if (kendo.ui.Scheduler) {
        kendo.ui.Scheduler.prototype.options.messages =
        $.extend(true, kendo.ui.Scheduler.prototype.options.messages, {
            "allDay": "all day",
            "date": "Date",
            "event": "Event",
            "time": "Time",
            "showFullDay": "Show full day",
            "showWorkDay": "Show business hours",
            "today": "Today",
            "save": "Save",
            "cancel": "Cancel",
            "destroy": "Delete",
            "resetSeries": "Reset Series",
            "deleteWindowTitle": "Delete event",
            "ariaSlotLabel": "Selected from {0:t} to {1:t}",
            "ariaEventLabel": "{0} on {1:D} at {2:t}",
            "editable": {
                "confirmation": "Are you sure you want to delete this event?"
            },
            "views": {
                "day": "Day",
                "week": "Week",
                "workWeek": "Work Week",
                "agenda": "Agenda",
                "month": "Month"
            },
            "recurrenceMessages": {
                "deleteWindowTitle": "Delete Recurring Item",
                "resetSeriesWindowTitle": "Reset Series",
                "deleteWindowOccurrence": "Delete current occurrence",
                "deleteWindowSeries": "Delete the series",
                "deleteRecurringConfirmation": "Are you sure you want to delete this event occurrence?",
                "deleteSeriesConfirmation": "Are you sure you want to delete the whole series?",
                "editWindowTitle": "Edit Recurring Item",
                "editWindowOccurrence": "Edit current occurrence",
                "editWindowSeries": "Edit the series",
                "deleteRecurring": "Do you want to delete only this event occurrence or the whole series?",
                "editRecurring": "Do you want to edit only this event occurrence or the whole series?"
            },
            "editor": {
                "title": "Title",
                "start": "Start",
                "end": "End",
                "allDayEvent": "All day event",
                "description": "Description",
                "repeat": "Repeat",
                "timezone": " ",
                "startTimezone": "Start timezone",
                "endTimezone": "End timezone",
                "separateTimezones": "Use separate start and end time zones",
                "timezoneEditorTitle": "Timezones",
                "timezoneEditorButton": "Time zone",
                "timezoneTitle": "Time zones",
                "noTimezone": "No timezone",
                "editorTitle": "Event"
            }
        });
    }

    /* Spreadsheet messages */

    if (kendo.spreadsheet && kendo.spreadsheet.messages.borderPalette) {
        kendo.spreadsheet.messages.borderPalette =
        $.extend(true, kendo.spreadsheet.messages.borderPalette, {
            "allBorders": "All borders",
            "insideBorders": "Inside borders",
            "insideHorizontalBorders": "Inside horizontal borders",
            "insideVerticalBorders": "Inside vertical borders",
            "outsideBorders": "Outside borders",
            "leftBorder": "Left border",
            "topBorder": "Top border",
            "rightBorder": "Right border",
            "bottomBorder": "Bottom border",
            "noBorders": "No border",
            "reset": "Reset color",
            "customColor": "Custom color...",
            "apply": "Apply",
            "cancel": "Cancel"
        });
    }

    if (kendo.spreadsheet && kendo.spreadsheet.messages.dialogs) {
        kendo.spreadsheet.messages.dialogs =
        $.extend(true, kendo.spreadsheet.messages.dialogs, {
            "apply": "Áp dụng",
            "save": "Lưu",
            "cancel": "Hủy bỏ",
            "remove": "Xóa",
            "retry": "Thử lại",
            "revert": "Hoàn tác",
            "okText": "OK",
            "formatCellsDialog": {
                "title": "Định dạng",
                "categories": {
                    "number": "Số",
                    "currency": "Tiền tệ",
                    "date": "Ngày tháng"
                }
            },
            "fontFamilyDialog": {
                "title": "Phông chữ"
            },
            "fontSizeDialog": {
                "title": "Kích thước phông chữ"
            },
            "bordersDialog": {
                "title": "Đường viền"
            },
            "alignmentDialog": {
                "title": "Canh lề",
                "buttons": {
                    "justtifyLeft": "Trái",
                    "justifyCenter": "Giữa",
                    "justifyRight": "Phải",
                    "justifyFull": "Justify",
                    "alignTop": "Trên",
                    "alignMiddle": "Giữa",
                    "alignBottom": "Dưới"
                }
            },
            "mergeDialog": {
                "title": "Merge cells",
                "buttons": {
                    "mergeCells": "Merge all",
                    "mergeHorizontally": "Merge horizontally",
                    "mergeVertically": "Merge vertically",
                    "unmerge": "Unmerge"
                }
            },
            "freezeDialog": {
                "title": "Freeze panes",
                "buttons": {
                    "freezePanes": "Freeze panes",
                    "freezeRows": "Freeze rows",
                    "freezeColumns": "Freeze columns",
                    "unfreeze": "Unfreeze panes"
                }
            },
            "confirmationDialog": {
                "text": "Are you sure you want to remove this sheet?",
                "title": "Sheet remove"
            },
            "validationDialog": {
                "title": "Data Validation",
                "hintMessage": "Please enter a valid {0} value {1}.",
                "hintTitle": "Validation {0}",
                "criteria": {
                    "any": "Any value",
                    "number": "Number",
                    "text": "Text",
                    "date": "Date",
                    "custom": "Custom Formula",
                    "list": "List"
                },
                "comparers": {
                    "greaterThan": "greater than",
                    "lessThan": "less than",
                    "between": "between",
                    "notBetween": "not between",
                    "equalTo": "equal to",
                    "notEqualTo": "not equal to",
                    "greaterThanOrEqualTo": "greater than or equal to",
                    "lessThanOrEqualTo": "less than or equal to"
                },
                "comparerMessages": {
                    "greaterThan": "greater than {0}",
                    "lessThan": "less than {0}",
                    "between": "between {0} and {1}",
                    "notBetween": "not between {0} and {1}",
                    "equalTo": "equal to {0}",
                    "notEqualTo": "not equal to {0}",
                    "greaterThanOrEqualTo": "greater than or equal to {0}",
                    "lessThanOrEqualTo": "less than or equal to {0}",
                    "custom": "that satisfies the formula: {0}"
                },
                "labels": {
                    "criteria": "Criteria",
                    "comparer": "Comparer",
                    "min": "Min",
                    "max": "Max",
                    "value": "Value",
                    "start": "Start",
                    "end": "End",
                    "onInvalidData": "On invalid data",
                    "rejectInput": "Reject input",
                    "showWarning": "Show warning",
                    "showHint": "Show hint",
                    "hintTitle": "Hint title",
                    "hintMessage": "Hint message",
                    "ignoreBlank": "Ignore blank"
                },
                "placeholders": {
                    "typeTitle": "Type title",
                    "typeMessage": "Type message"
                }
            },
            "exportAsDialog": {
                "title": "Export...",
                "labels": {
                    "fileName": "File name",
                    "saveAsType": "Save as type",
                    "exportArea": "Export",
                    "paperSize": "Paper size",
                    "margins": "Margins",
                    "orientation": "Orientation",
                    "print": "Print",
                    "guidelines": "Guidelines",
                    "center": "Center",
                    "horizontally": "Horizontally",
                    "vertically": "Vertically"
                }
            },
            "modifyMergedDialog": {
                "errorMessage": "Cannot change part of a merged cell."
            },
            "useKeyboardDialog": {
                "title": "Copying and pasting",
                "errorMessage": "These actions cannot be invoked through the menu. Please use the keyboard shortcuts instead:",
                "labels": {
                    "forCopy": "for copy",
                    "forCut": "for cut",
                    "forPaste": "for paste"
                }
            },
            "unsupportedSelectionDialog": {
                "errorMessage": "That action cannot be performed on multiple selection."
            },
            "insertCommentDialog": {
                "title": "Insert comment",
                "labels": {
                    "comment": "Comment",
                    "removeComment": "Remove comment"
                }
            }
        });
    }

    if (kendo.spreadsheet && kendo.spreadsheet.messages.filterMenu) {
        kendo.spreadsheet.messages.filterMenu =
        $.extend(true, kendo.spreadsheet.messages.filterMenu, {
            "sortAscending": "Sort range A to Z",
            "sortDescending": "Sort range Z to A",
            "filterByValue": "Filter by value",
            "filterByCondition": "Filter by condition",
            "apply": "Apply",
            "search": "Search",
            "addToCurrent": "Add to current selection",
            "clear": "Clear",
            "blanks": "(Blanks)",
            "operatorNone": "None",
            "and": "AND",
            "or": "OR",
            "operators": {
                "string": {
                    "contains": "Text contains",
                    "doesnotcontain": "Text does not contain",
                    "startswith": "Text starts with",
                    "endswith": "Text ends with"
                },
                "date": {
                    "eq": "Date is",
                    "neq": "Date is not",
                    "lt": "Date is before",
                    "gt": "Date is after"
                },
                "number": {
                    "eq": "Is equal to",
                    "neq": "Is not equal to",
                    "gte": "Is greater than or equal to",
                    "gt": "Is greater than",
                    "lte": "Is less than or equal to",
                    "lt": "Is less than"
                }
            }
        });
    }

    if (kendo.spreadsheet && kendo.spreadsheet.messages.colorPicker) {
        kendo.spreadsheet.messages.colorPicker =
        $.extend(true, kendo.spreadsheet.messages.colorPicker, {
            "reset": "Reset color",
            "customColor": "Custom color...",
            "apply": "Apply",
            "cancel": "Cancel"
        });
    }

    if (kendo.spreadsheet && kendo.spreadsheet.messages.toolbar) {
        kendo.spreadsheet.messages.toolbar =
        $.extend(true, kendo.spreadsheet.messages.toolbar, {
            "addColumnLeft": "Add column left",
            "addColumnRight": "Add column right",
            "addRowAbove": "Add row above",
            "addRowBelow": "Add row below",
            "alignment": "Alignment",
            "alignmentButtons": {
                "justtifyLeft": "Align left",
                "justifyCenter": "Center",
                "justifyRight": "Align right",
                "justifyFull": "Justify",
                "alignTop": "Align top",
                "alignMiddle": "Align middle",
                "alignBottom": "Align bottom"
            },
            "backgroundColor": "Background",
            "bold": "Bold",
            "borders": "Borders",
            "colorPicker": {
                "reset": "Reset color",
                "customColor": "Custom color..."
            },
            "copy": "Copy",
            "cut": "Cut",
            "deleteColumn": "Delete column",
            "deleteRow": "Delete row",
            "excelImport": "Import from Excel...",
            "filter": "Filter",
            "fontFamily": "Font",
            "fontSize": "Font size",
            "format": "Custom format...",
            "formatTypes": {
                "automatic": "Automatic",
                "number": "Number",
                "percent": "Percent",
                "financial": "Financial",
                "currency": "Currency",
                "date": "Date",
                "time": "Time",
                "dateTime": "Date time",
                "duration": "Duration",
                "moreFormats": "More formats..."
            },
            "formatDecreaseDecimal": "Decrease decimal",
            "formatIncreaseDecimal": "Increase decimal",
            "freeze": "Freeze panes",
            "freezeButtons": {
                "freezePanes": "Freeze panes",
                "freezeRows": "Freeze rows",
                "freezeColumns": "Freeze columns",
                "unfreeze": "Unfreeze panes"
            },
            "insertComment": "Insert comment",
            "italic": "Italic",
            "merge": "Merge cells",
            "mergeButtons": {
                "mergeCells": "Merge all",
                "mergeHorizontally": "Merge horizontally",
                "mergeVertically": "Merge vertically",
                "unmerge": "Unmerge"
            },
            "open": "Open...",
            "paste": "Paste",
            "quickAccess": {
                "redo": "Redo",
                "undo": "Undo"
            },
            "saveAs": "Save As...",
            "sortAsc": "Sort ascending",
            "sortDesc": "Sort descending",
            "sortButtons": {
                "sortSheetAsc": "Sort sheet A to Z",
                "sortSheetDesc": "Sort sheet Z to A",
                "sortRangeAsc": "Sort range A to Z",
                "sortRangeDesc": "Sort range Z to A"
            },
            "textColor": "Text Color",
            "textWrap": "Wrap text",
            "underline": "Underline",
            "validation": "Data validation..."
        });
    }

    if (kendo.spreadsheet && kendo.spreadsheet.messages.view) {
        kendo.spreadsheet.messages.view =
        $.extend(true, kendo.spreadsheet.messages.view, {
            "errors": {
                "shiftingNonblankCells": "Cannot insert cells due to data loss possibility. Select another insert location or delete the data from the end of your worksheet.",
                "filterRangeContainingMerges": "Cannot create a filter within a range containing merges",
                "validationError": "The value that you entered violates the validation rules set on the cell."
            },
            "tabs": {
                "home": "Home",
                "insert": "Insert",
                "data": "Data"
            }
        });
    }

    /* Slider messages */

    if (kendo.ui.Slider) {
        kendo.ui.Slider.prototype.options =
        $.extend(true, kendo.ui.Slider.prototype.options, {
            "increaseButtonTitle": "Tăng",
            "decreaseButtonTitle": "Giảm"
        });
    }

    /* ListBox messaages */

    if (kendo.ui.ListBox) {
        kendo.ui.ListBox.prototype.options.messages =
        $.extend(true, kendo.ui.ListBox.prototype.options.messages, {
            "tools": {
                "remove": "Xóa",
                "moveUp": "Đi lên",
                "moveDown": "Đi xuống",
                "transferTo": "Chuyển tới",
                "transferFrom": "Chuyển từ",
                "transferAllTo": "Chuyển tất cả đến",
                "transferAllFrom": "Chuyển tất cả từ"
            }
        });
    }

    /* TreeList messages */

    if (kendo.ui.TreeList) {
        kendo.ui.TreeList.prototype.options.messages =
        $.extend(true, kendo.ui.TreeList.prototype.options.messages, {
            "noRows": "Không có dữ liệu hiển thị",
            "loading": "Đang tải...",
            "requestFailed": "Yêu cầu thất bại.",
            "retry": "Thử lại",
            "commands": {
                "edit": "Sửa",
                "update": "Cập nhật",
                "canceledit": "Hủy bỏ",
                "create": "Thêm dòng mới",
                "createchild": "Thêm dòng con mới",
                "destroy": "Xóa",
                "excel": "Xuất Excel",
                "pdf": "Xuất PDF"
            }
        });
    }

    /* TreeView messages */

    if (kendo.ui.TreeView) {
        kendo.ui.TreeView.prototype.options.messages =
        $.extend(true, kendo.ui.TreeView.prototype.options.messages, {
            "loading": "Đang tải...",
            "requestFailed": "Yêu cầu thất bại.",
            "retry": "Thử lại"
        });
    }

    /* Upload messages */

    if (kendo.ui.Upload) {
        kendo.ui.Upload.prototype.options.localization =
        $.extend(true, kendo.ui.Upload.prototype.options.localization, {
            "select": "Chọn tệp...",
            "cancel": "Hủy bỏ",
            "retry": "Thử lại",
            "remove": "Xóa bỏ",
            "clearSelectedFiles": "Xóa tệp",
            "uploadSelectedFiles": "Tải lên tập tin",
            "dropFilesHere": "Thả tệp vào để tải lên",
            "statusUploading": "Đang tải lên",
            "statusUploaded": "Tải lên hoàn tất",
            "statusWarning": "cảnh bảo",
            "statusFailed": "thất bại",
            "headerStatusUploading": "Đang tải lên...",
            "headerStatusUploaded": "Hoàn tất",
            "invalidMaxFileSize": "Kích thước tệp quá lớn.",
            "invalidMinFileSize": "Kích thước tệp quá nhỏ.",
            "invalidFileExtension": "Loại tệp không được hỗ trợ."
        });
    }

    /* Validator messages */

    if (kendo.ui.Validator) {
        kendo.ui.Validator.prototype.options.messages =
        $.extend(true, kendo.ui.Validator.prototype.options.messages, {
            "required": "{0} bắt buộc không được trống",
            "pattern": "{0} không hợp lệ",
            "min": "{0} nên lớn hơn hoặc bằng {1}",
            "max": "{0} nên nhỏ hơn hoặc bằng {1}",
            "step": "{0} không hợp lệ",
            "email": "{0} email không hợp lệ",
            "url": "{0} URL không hợp lệ",
            "date": "{0} ngày không hợp lệ",
            "dateCompare": "Ngày kết thúc phải lớn hơn hoặc bằng ngày bắt đầu"
        });
    }

    /* kendo.ui.progress method */
    if (kendo.ui.progress) {
        kendo.ui.progress.messages =
        $.extend(true, kendo.ui.progress.messages, {
            loading: "Đang tải..."
        });
    }

    /* Dialog */

    if (kendo.ui.Dialog) {
        kendo.ui.Dialog.prototype.options.messages =
        $.extend(true, kendo.ui.Dialog.prototype.options.localization, {
            "close": "Đóng"
        });
    }

    /* Calendar */
    if (kendo.ui.Calendar) {
        kendo.ui.Calendar.prototype.options.messages =
        $.extend(true, kendo.ui.Calendar.prototype.options.messages, {
            "weekColumnHeader": ""
        });
    }

    /* Alert */

    if (kendo.ui.Alert) {
        kendo.ui.Alert.prototype.options.messages =
        $.extend(true, kendo.ui.Alert.prototype.options.localization, {
            "okText": "OK"
        });
    }

    /* Confirm */

    if (kendo.ui.Confirm) {
        kendo.ui.Confirm.prototype.options.messages =
        $.extend(true, kendo.ui.Confirm.prototype.options.localization, {
            "okText": "OK",
            "cancel": "Hủy bỏ"
        });
    }

    /* Prompt */
    if (kendo.ui.Prompt) {
        kendo.ui.Prompt.prototype.options.messages =
        $.extend(true, kendo.ui.Prompt.prototype.options.localization, {
            "okText": "OK",
            "cancel": "Hủy bỏ"
        });
    }

    /* DateInput */
    if (kendo.ui.DateInput) {
        kendo.ui.DateInput.prototype.options.messages =
          $.extend(true, kendo.ui.DateInput.prototype.options.messages, {
              "year": "năm",
              "month": "tháng",
              "day": "ngày",
              "weekday": "ngày trong tuần",
              "hour": "giờ",
              "minute": "phút",
              "second": "giây",
              "dayperiod": "AM/PM"
          });
    }

})(window.kendo.jQuery);