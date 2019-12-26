auto.waitFor();
app.launchApp('抖音极速版')
sleep(5000);
youngWin();
i = 1;
while (true) {
    toast("滑动" + i + '次')
    i++;
    index1 = random(300, 800);
    index2 = random(1600, 1800);
    index3 = random(300, 800);
    index4 = random(500, 700);
    timeGo = random(250, 600);
    timeNext = random(4000, 7000);
    heartClick();
    swipe(index1, index2, index3, index4, timeGo);
    sleep(timeNext)
}

/**如果弹出青少年窗口，点击 */
function youngWin() {
    if (youngWin = text("我知道了").exists()) {
        youngWin.click();
    };
}

/**随机点赞并休息一秒 */
function heartClick(){
    index=random(1,5);
    if(index==3){
        id('a4m').findOnce().click();
    }
    sleep(1000);
}
