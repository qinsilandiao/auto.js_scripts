auto.waitFor();
app.launchApp('抖音极速版')
sleep(5000);
i=1;
while(true){
    toast("滑动"+i+'次')
    i++;
    index1=random(300,800);
    index2=random(1600,1800);
    index3=random(300,800);
    index4=random(500,700);
    timeGo=random(250,600);
    timeNext=random(4000,7000);
    /**heartRandom=random(1,5);
    if(heartRandom==3){
        heart =id('a4n').findOne().bounds();
        click(heart.centerX(), heart.centerY());
        sleep(2000)
    }**/
    swipe(index1,index2 ,index3 ,index4 ,timeGo );
    sleep(timeNext)
}
