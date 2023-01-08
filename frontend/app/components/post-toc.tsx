import { useEffect } from 'react'

const PostToc = () => {

    useEffect(() => {
        // スクロール位置を取得する関数を定義
        function getScrollPosition() {
            return (
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                0
            );
        }

        // スクロール位置が変化したときに呼ばれるハンドラ関数を定義
        function handleScroll() {

            // div[class*="markdown"]内のすべてのhタグを取得
            const headings = Array.prototype.slice.call(document.querySelectorAll('div[class*="markdown"] h1, h2, h3, h4, h5, h6'));

            // スクロール位置から最も近いhタグを探す
            let nearestHeading = null;
            let minDistance = Infinity;
            headings.forEach(heading => {
                const distance = Math.abs(heading.offsetTop - getScrollPosition());
                if (distance < minDistance) {
                    nearestHeading = heading;
                    minDistance = distance;
                }
            })

            const links = document.querySelectorAll('div[class*="toc"] a');
            links.forEach(link => {
                if (link.getAttribute('href') === '#' + encodeURIComponent(nearestHeading.id)) {
                    link.classList.add('active');
                    if (link.parentElement.parentElement.tagName === 'UL') {
                        link.parentElement.parentElement.classList.add('active');
                    }
                    if (link.parentElement.previousElementSibling !== null && link.parentElement.previousElementSibling.hasChildNodes()) {
                        let uls = link.parentElement.previousElementSibling.children
                        for (let i = 0; i < uls.length; i++) {
                            if (uls[i].tagName === 'UL') {
                                uls[i].classList.remove('active');
                            }
                        }
                    }
                    if (link.parentElement.nextElementSibling !== null && link.parentElement.nextElementSibling.hasChildNodes()) {
                        let uls = link.parentElement.nextElementSibling.children
                        for (let i = 0; i < uls.length; i++) {
                            if (uls[i].tagName === 'UL') {
                                uls[i].classList.remove('active');
                            }
                        }
                    }
                } else {
                    link.classList.remove('active');
                }
            })
        }

        // スクロールイベントを監視する
        window.addEventListener('scroll', handleScroll);

        // 終了処理 (イベントリスナーを削除)
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (null)

}

export default PostToc