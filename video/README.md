## 您当前处于[根目录](../)下 **video** 路径

你可以在 [GitHub](https://github.com/SimonLiu296/simonliu296.github.io) 上来预览网站全部内容.

## 光遇视频



<link rel="stylesheet" href="https://cdn.bootcss.com/dplayer/1.25.0/DPlayer.min.css" />

<div id="dplayer"></div>
<script src="./DPlayer.min.js"></script>
<script>const dp = new DPlayer({
    container: document.getElementById('dplayer'),
    autoplay: true, // 不自动播放
    theme: '#FADFA3', // 主题
    loop: true, // 循环播放
    lang: 'zh-cn', // 语言
    hotkey: true, // 热键
    preload: 'auto', // 预加载
    volume: 0.5, // 音量
    mutex: true, // 多个视频互斥
    video: {
        url: './data/2021112721343.mp4',
    },
    // 视频右键菜单
    contextmenu: [
        {
            text: '关于作者simonliu296',
            link: 'https://github.com/simonliu296',
        },
        {
            text: 'dplayer',
            click: (player) => {
                console.log(player);
            },
        },
    ],
});
</script>


