// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "李梦云",
        "这个名字我很喜欢",
        "叫起来就想起你",
        "我想对你说",
        "农历九月二十九",
        "这一天我记着",
        "今天是你的日子",
        "我想把喜欢说清楚",
        "我喜欢你",
        "不是随口说说",
        "见到你会高兴",
        "这话我想了很久",
        "不是突然才喜欢",
        "我想过，也确认过",
        "你不用现在回答我",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    albumImages: [
        "./imgs/mengyun-flowers.jpg",
        "./imgs/mengyun-scarf.jpg",
        "./imgs/mengyun-balloon.jpg",
        "./imgs/mengyun-sun.jpg",
    ],
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始",
        play: "音乐",
        bannar_coming: "颜色",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐",
        story: "有句话想说",
    }
};
