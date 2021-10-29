define("moduleImport/Components", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Footer = exports.Header = void 0;
    var Header = (function () {
        function Header() {
            var ele = document.createElement('div');
            ele.innerText = '使用AMD规范引入module，Header';
            document.body.appendChild(ele);
        }
        return Header;
    }());
    exports.Header = Header;
    var Footer = (function () {
        function Footer() {
            var ele = document.createElement('div');
            ele.innerText = '===底部区域===';
            document.body.appendChild(ele);
        }
        return Footer;
    }());
    exports.Footer = Footer;
});
define("moduleImport/page", ["require", "exports", "moduleImport/Components"], function (require, exports, Components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Page = (function () {
        function Page() {
            new Components_1.Header();
            new Components_1.Footer();
        }
        return Page;
    }());
    exports.default = Page;
});
//# sourceMappingURL=page.js.map