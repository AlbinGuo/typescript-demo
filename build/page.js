"use strict";
var Home;
(function (Home) {
    var Header = (function () {
        function Header() {
            var ele = document.createElement('div');
            ele.innerText = 'this is a header text';
            document.body.appendChild(ele);
        }
        return Header;
    }());
    var Content = (function () {
        function Content() {
            var ele = document.createElement('div');
            ele.innerText = 'this is a content text';
            document.body.appendChild(ele);
        }
        return Content;
    }());
    var Footer = (function () {
        function Footer() {
            var ele = document.createElement('div');
            ele.innerText = 'this is a footer text';
            document.body.appendChild(ele);
        }
        return Footer;
    }());
    var Pager = (function () {
        function Pager() {
            new Header();
            new Content();
            new Footer();
        }
        return Pager;
    }());
    Home.Pager = Pager;
})(Home || (Home = {}));
//# sourceMappingURL=page.js.map