# 搜索引擎净化器 (Search-Engine-Filter)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Greasy Fork](https://img.shields.io/greasyfork/v/YOUR_SCRIPT_ID.svg)](https://greasyfork.org/scripts/YOUR_SCRIPT_ID) <!-- 如果你发布到 Greasy Fork，请替换 YOUR_SCRIPT_ID -->

一个强大的油猴脚本，用于过滤和屏蔽谷歌(Google)、百度(Baidu)、必应(Bing)的搜索结果，帮你摆脱低质量、广告和不相关的搜索条目，还你一个清净高效的搜索体验。

---

## 😫 我们解决了什么问题？

你是否在搜索技术问题时，总是被某些内容农场（如 CSDN）的低质量、过时或需要登录才能查看全文的结果所困扰？这个脚本的诞生就是为了解决这个问题。通过维护一个统一的屏蔽列表，你可以一次性地在所有主流搜索引擎中将这些网站彻底“拉黑”，极大地提升搜索效率和结果质量。

## ✨ 主要功能

*   **多引擎支持**: 同时支持 **谷歌**、**百度** 和 **必应**，一次配置，三处生效。
*   **统一屏蔽列表**: 在一个地方管理所有要屏蔽的关键字和域名。
*   **动态内容感知**: 能够自动处理通过“无限滚动”或“下一页”动态加载的新搜索结果。
*   **高度可定制**: 你可以非常轻松地添加或删除自己不喜欢的网站或关键字。
*   **轻量高效**: 无任何外部依赖，代码简洁，运行速度快。

## 🚀 安装与使用

**第 1 步：安装脚本管理器**

你需要在浏览器中安装一个用户脚本管理器。推荐使用 [**Tampermonkey**](https://www.tampermonkey.net/) (油猴) 或 [Violentmonkey](https://violentmonkey.github.io/) (暴力猴)。

**第 2 步：安装本脚本**

点击下方的链接即可安装：

[**➡️ 点击此处，直接从 GitHub 安装**](https://github.com/YOUR_USERNAME/Search-Engine-Filter/raw/main/search-engine-filter.user.js)

> **重要提示**: 请将上方链接中的 `YOUR_USERNAME` 替换为你的 GitHub 用户名。

**第 3 步：开始使用！**

安装完成后，打开谷歌、百度或必应进行搜索，脚本会自动生效，屏蔽列表中的结果将不再出现。

## ⚙️ 如何自定义屏蔽列表

如果你想添加或修改需要屏蔽的网站/关键字：

1.  打开 Tampermonkey (油猴) 的**管理面板**。
2.  找到名为 `搜索引擎结果筛选器 - 统一版` 的脚本，点击**编辑**按钮 ( पेंसिल图标 )。
3.  在代码的开头部分，找到 `blockedKeywords` 数组，按需修改：

    ```javascript
    // --- 在这里统一管理您想要屏蔽的关键字 ---
    const blockedKeywords = [
        'csdn.net',
        'CSDN',
        'csdn',
        'iteye.com',
        'jb51.net',
        // 在这里添加更多你想屏蔽的域名或关键字，例如：
        // 'w3schools.com',
        // '百家号'
    ];
    ```

4.  修改完成后，按 `Ctrl` + `S` 或点击编辑器上方的**文件 -> 保存**。刷新搜索页面即可看到效果。

## 🤝 贡献与反馈

欢迎任何形式的贡献！

*   如果你发现了 Bug 或有任何功能建议，请随时提交 [**Issues**](https://github.com/YOUR_USERNAME/Search-Engine-Filter/issues)。
*   如果你想改进代码，欢迎提交 [**Pull Requests**](https://github.com/YOUR_USERNAME/Search-Engine-Filter/pulls)。

> **重要提示**: 请将上方链接中的 `YOUR_USERNAME` 替换为你的 GitHub 用户名。

## 📄 许可 (License)

本项目采用 LGPL-2.1 开源。
