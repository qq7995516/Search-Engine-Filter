// ==UserScript==
// @name         搜索引擎结果筛选器 - 统一版
// @namespace    http://tampermonkey.net/
// @version      2025-08-06
// @description  在 Google, 百度, Bing 的搜索结果中，根据统一的关键字列表自动隐藏条目，并支持动态加载。
// @author       羽高 & Gemini
// @match        https://www.google.com/search*
// @match        https://www.baidu.com/s*
// @match        https://www.bing.com/search*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // --- 在这里统一管理您想要屏蔽的关键字 ---
    // 这个列表将应用于所有支持的搜索引擎 (Google, 百度, Bing)。
    const blockedKeywords = [
        'csdn.net',
        'CSDN',
        'csdn',
        //'iteye.com',
        //'jb51.net'
        // 'example.com', // 示例：添加其他需要屏蔽的网站
    ];

    /**
     * 根据不同的搜索引擎，选择并隐藏不希望看到的结果。
     */
    const filterResults = () => {
        const hostname = window.location.hostname;

        if (hostname.includes('google.')) {
            filterGoogleResults();
        } else if (hostname.includes('baidu.com')) {
            filterBaiduResults();
        } else if (hostname.includes('bing.com')) {
            filterBingResults();
        }
    };

    /**
     * 过滤谷歌搜索结果。
     */
    const filterGoogleResults = () => {
        const results = document.querySelectorAll('div.MjjYud'); // Google 的结果容器
        results.forEach(result => {
            const linkElement = result.querySelector('a');
            if (linkElement && linkElement.href) {
                if (blockedKeywords.some(keyword => linkElement.href.includes(keyword))) {
                    if (result.style.display !== 'none') {
                        result.style.display = 'none';
                        console.log(`[Google] 已根据关键字过滤: ${linkElement.href}`);
                    }
                }
            }
        });
    };

    /**
     * 过滤百度搜索结果。
     */
    const filterBaiduResults = () => {
        // 移除百度热搜
        const hotSearch = document.querySelector('div[id="con-ceiling-wrapper"]');
        if (hotSearch) {
            hotSearch.remove();
        }

        const results = document.querySelectorAll('div.result.c-container'); // 百度普通结果容器
        results.forEach(result => {
            // 检查标题和链接中是否包含关键字
            const linkText = result.querySelector('a')?.textContent || '';
            const linkHref = result.querySelector('a')?.href || '';

            if (blockedKeywords.some(keyword => linkText.includes(keyword) || linkHref.includes(keyword))) {
                if (result.style.display !== 'none') {
                    result.style.display = 'none';
                    console.log(`[Baidu] 已根据关键字过滤: ${linkText}`);
                }
            }
        });
    };

    /**
     * 过滤 Bing 搜索结果。
     */
    const filterBingResults = () => {
        // Bing 的结果通常在 <ol id="b_results"> 下的 <li> 中
        const results = document.querySelectorAll('li.b_algo');
        results.forEach(result => {
            const linkElement = result.querySelector('a');
            // 检查标题和链接文本/URL
            const linkText = linkElement?.textContent || '';
            const linkHref = linkElement?.href || '';

            if (blockedKeywords.some(keyword => linkText.includes(keyword) || linkHref.includes(keyword))) {
                 if (result.style.display !== 'none') {
                    result.style.display = 'none';
                    console.log(`[Bing] 已根据关键字过滤: ${linkText}`);
                }
            }
        });
    };

    // --- 初始化和动态内容监控 ---

    // 页面首次加载时，立即执行一次过滤。
    filterResults();

    // 使用 MutationObserver 来监听页面的变化，以便在新内容出现时也能应用过滤规则。
    const observer = new MutationObserver(filterResults);

    // 配置观察者：我们关心子元素的添加或删除，并且需要观察整个文档的子树。
    const config = {
        childList: true, // 观察目标子节点的变化。
        subtree: true    // 观察后代节点。
    };

    // 启动观察者，让它开始监视整个 <body> 的变化。
    observer.observe(document.body, config);

})();
