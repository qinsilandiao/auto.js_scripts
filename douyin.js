auto.waitFor();
app.launchApp('抖音极速版')
sleep(4000);
youngWin();
newVersion()
i = 1;
while (true) {
    toast("滑动" + i + '次')
    WidthOne = random(300, 800);
    HeightOne = random(1600, 1800);
    WidthTwo = random(300, 800);
    HeightTwo = random(500, 700);
    timeGo = random(250, 600);
    timeNext = random(4000, 7000);
    heartClick();
    swipe(WidthOne, HeightOne, WidthTwo, HeightTwo, timeGo);
    sleep(timeNext);
    i++;
}

/**如果弹出青少年窗口，点击 */
function youngWin() {
    if (youngWin = text("我知道了").exists()) {
        youngWin.click();
    };
}

/**随机点赞并休息一秒 */
function heartClick() {
    index = random(1, 5);
    if (index == 3) {
        id('a4o').findOnce().click();
    }
    sleep(1000);
}

//检测到新版本跳过
function newVersion() {
    if (newVersion = text("以后再说").exists()) {
        newVersion.click();
    };
}
