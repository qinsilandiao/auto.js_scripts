auto.waitFor();
app.launchApp('刷宝短视频');
toastLog('进入应用中,请等待。。。');
sleep(8000);
if (text('取消').exists()) {
    text('取消').findOnce().click();
    toastLog('取消成功')
}
toastLog('开始运行。。。');

setScreenMetrics(device.width, device.height);
click(device.width / 2, device.height / 2);
sleep(2000)
num = 1;
while (true) {
    index1 = random(-100, 100);
    index2 = random(-80, 80);
    index3 = random(-100, 100);
    index4 = random(-10, 10);
    zan();
    swipe(device.width / 2 + index1, device.height / 1.2 + index3,
        device.width / 2 + index2, device.height / 6 + index4, 900);
    sleepTime = random(7000, 10000);
    var c = num++;
    toastLog('已经滑动' + c + '次');
    sleep(sleepTime);
}

//random zan
function zan() {
    var ran = random(1, 3);
    if (id('image_view').exists() && ran == 2) {
        var rect = id('image_view').findOnce().bounds();
        click(rect.centerX(), rect.centerY());
        toastLog('random zan ok!');
        sleep(2000);
    } else {
        return;
    }
}
