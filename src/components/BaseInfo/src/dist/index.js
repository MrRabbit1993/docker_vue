"use strict";
exports.__esModule = true;
var composition_api_1 = require("@vue/composition-api");
var index_module_scss_1 = require("./index.module.scss");
var MapSvgInfo = {
    user: 'M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z',
    company: 'M1.5 14.25c0 .138.112.25.25.25H4v-1.25a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v1.25h2.25a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25h-8.5a.25.25 0 00-.25.25v12.5zM1.75 16A1.75 1.75 0 010 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 00.25-.25V8.285a.25.25 0 00-.111-.208l-1.055-.703a.75.75 0 11.832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0114.25 16h-3.5a.75.75 0 01-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 01-.75-.75V14h-1v1.25a.75.75 0 01-.75.75h-3zM3 3.75A.75.75 0 013.75 3h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 3.75zM3.75 6a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM3 9.75A.75.75 0 013.75 9h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 9.75zM7.75 9a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM7 6.75A.75.75 0 017.75 6h.5a.75.75 0 010 1.5h-.5A.75.75 0 017 6.75zM7.75 3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z',
    address: 'M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z',
    email: 'M1.75 2A1.75 1.75 0 000 3.75v.736a.75.75 0 000 .027v7.737C0 13.216.784 14 1.75 14h12.5A1.75 1.75 0 0016 12.25v-8.5A1.75 1.75 0 0014.25 2H1.75zM14.5 4.07v-.32a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25v.32L8 7.88l6.5-3.81zm-13 1.74v6.441c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V5.809L8.38 9.397a.75.75 0 01-.76 0L1.5 5.809z'
};
exports["default"] = composition_api_1.defineComponent({
    name: 'BaseInfoCmp',
    props: {
        dataSource: {
            type: Object,
            "default": function () { return ({}); }
        }
    },
    render: function () {
        var _a = this.dataSource, name = _a.name, followers = _a.followers, following = _a.following, email = _a.email, location = _a.location, company = _a.company, avatar_url = _a.avatar_url;
        var info = [
            { icon: 'company', txt: company },
            { icon: 'address', txt: location },
            { icon: 'email', txt: email }
        ];
        return (React.createElement("div", { "class": index_module_scss_1["default"]['base-info-container'] },
            React.createElement("img", { "class": index_module_scss_1["default"].avatar, src: avatar_url }),
            React.createElement("div", { "class": index_module_scss_1["default"]['user-name'] }, name),
            React.createElement("div", { "class": index_module_scss_1["default"].followers },
                React.createElement("svg", { "aria-hidden": "true", height: "16", viewBox: "0 0 16 16", version: "1.1", width: "16", "class": index_module_scss_1["default"]['svg-icon'], "data-view-component": "true" },
                    React.createElement("path", { "fill-rule": "evenodd", d: MapSvgInfo.user })),
                React.createElement("div", { "class": index_module_scss_1["default"]['follower-info'] },
                    React.createElement("span", { "class": index_module_scss_1["default"].txt },
                        " ",
                        followers),
                    " followers \u00B7",
                    React.createElement("span", { "class": index_module_scss_1["default"].txt },
                        " ",
                        following),
                    ' ',
                    "following")),
            React.createElement("div", { "class": index_module_scss_1["default"].info }, info.map(function (item) {
                return (React.createElement("div", { "class": index_module_scss_1["default"]['info-row'] },
                    React.createElement("svg", { text: "muted", "aria-hidden": "true", height: "16", viewBox: "0 0 16 16", version: "1.1", width: "16", "class": index_module_scss_1["default"]['svg-icon'], "data-view-component": "true" },
                        React.createElement("path", { "fill-rule": "evenodd", d: MapSvgInfo[item.icon] })),
                    React.createElement("div", { "class": index_module_scss_1["default"]['info-txt'] }, item.txt || '暂无数据')));
            }))));
    }
});
