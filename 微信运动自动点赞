if (text('排行榜').exists()) {
    while (true) {
        let objs = id('bpz').find();
        let objsLength = objs.size();
        for (let index = 0; index < objsLength; index++) {
            let obj = objs[index];
            if (obj.parent().parent().click()) {
                sleep(1000)
            }
            if (text('赞我的朋友').exists()) {
                back()
                sleep(2000)
            }
            if (textEndsWith('的主页').exists()) {
                log(222);
                back()
                sleep(2000)
            }

        }
        if (text('邀请朋友').exists()) {
            break;
        }
        swipe(device.width / 2, device.height / 1.1,
            device.width / 2, device.height / 6, 800);
        sleep(2000);
    }
    toastLog('点赞完成');

} else {
    log('不在排行版页面');
    exit();
}
exit();
