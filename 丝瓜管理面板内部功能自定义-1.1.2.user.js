// ==UserScript==
// @name         丝瓜管理面板内部功能自定义
// @namespace    http://tampermonkey.net/
// @version      1.1.2
// @description  try to take over the world!
// @author       limm
// @match        http://111.180.189.184:65000/Main/Index
// @match        http://111.180.189.184:65000/PlayerOnline/CurrentPlayer
// @icon         https://www.google.com/s2/favicons?sz=64&domain=189.213
// @grant        none
// ==/UserScript==
window.onload =function() {
    'use strict';
    var opa= window.location.pathname;
    if(opa=="/Main/Index"){
        var b = document.getElementById("flexible");
        var a =document.createElement("button");
        var c = document.getElementsByClassName ("layui-tab")[0];
        c.style.marginLeft="80px";
        a.style.width="40px";
        a.style.height="100%";
        a.style.position="absolute";
        a.style.top="0";
        a.style.boxSizing="border-box";
        a.style.left="80px";
        a.textContent ="急急国王脚本支持";
        a.style.fontSize="10px";
        b.after(a);
    }else if(opa == "/PlayerOnline/CurrentPlayer"){
        var wq = document.getElementById("tankseed");
        var button =document.createElement("button");
        var button_q = document.createElement("button");
        var button_w = document.createElement("button");
        var button_u = document.createElement("button");
        var input =document.createElement("input");
        var input_1 =document.createElement("input");
        var input_0 = document.getElementById("AdminBroadcast");
        var button_1 =document.createElement("button");
        var senda=document.getElementById("send");
        input.type="text";
        input_1.type="text";
        input.placeholder="发送次数";
        input_1.placeholder="发送间隔(秒)至少3秒";
        button_1.className="layui-btn layui-btn-primary layui-border-blue";
        button_1.innerText="重复发送";
        input_1.style.width="45%";
        input_1.style.height="2rem";
        input.style.width="45%";
        input.style.height="2rem";
        input_0.after(input);
        input_0.after(input_1);
        input_0.after(button_1);
        button_1.onclick = function(){
            var inputp = input.value;
            var inputpa = input_1.value;
            var inputpams =inputpa*1000;
            var namea = input_0.value;
            var liio = 0;
            if(inputpams<3){
                inputpams = 3;
            }
            var timep=setInterval(atime, inputpams);
            function atime(){
                input_0.value = "";
                input_0.value = namea;
                senda.click();
                liio++;
                if(liio==inputp){
                    input_0.value = "";
                    clearInterval(timep);
                }
            }
        }
        button_w.className = "layui-btn layuiadmin-btn-list layui-btn-sm";
        button_q.className = "layui-btn layuiadmin-btn-list layui-btn-sm";
        button.className ="layui-btn layuiadmin-btn-list layui-btn-sm";
        button_u.className = "layui-btn layuiadmin-btn-list layui-btn-sm";
        wq.after(button);
        button.after(button_q);
        button_q.after(button_w);
        button_w.after(button_u);
        button_u.innerText = "结束当前对局";
        button_q.innerText = "关闭部署物限制";
        button.innerText ="一键输入暖服指令";
        button_w.innerText="设置服务器时间流速为1.4";
        var kol = document.getElementById("SetCMD");
        var ska;
        var loaq;
        var zl;
        var lpaa;
        button.onclick = function(){
            var bool = confirm("确定开启暖服？");
            if(bool === true){
                kol.click();
                ska = document.getElementsByClassName ("layui-layer-input")[0];
                loaq = document.getElementsByClassName("layui-layer-btn0")[0];
                var ii=0
                //var loaq_1=document.getElementsByClassName("layui-layer-btn1")[0];
                zl = ['AdminDisableVehicleClaiming 1','AdminForceAllRoleAvailability 1','AdminNoRespawnTimer 1','AdminDisableVehicleKitRequirement 1'];
                var myTime=setInterval(time, 2000);
                function time(){
                    ska.value = zl[ii];
                    loaq.click();
                    //loaq_1.click();
                    ii++;
                    if(ii===4){
                        clearInterval(myTime);
                        ii=0;
                    }
                }
            }
        }
        button_u.onclick = function(){
            lpaa = "确定结束当局?";
            zl ="AdminEndMatch";
            lk(lpaa);
        }
        button_q.onclick = function(){
            lpaa = "确定取消部署物限制?"
            zl = "AdminForceAllDeployableAvailability 1";
            lk(lpaa);
        }
        function lk(lo){
            var bool = confirm(lo);
            if(bool === true){
                kol.click();
                ska = document.getElementsByClassName ("layui-layer-input")[0];
                loaq = document.getElementsByClassName("layui-layer-btn0")[0];
                ska.value = zl;
                loaq.click();
            }
        }
        function asdtime(){
            var dataArray = ['急急国王','','',''];
            var data=['jijiguowang','','',''];
            var blockquote = document.querySelector('blockquote[class="layui-elem-quote"]');
            var spans = blockquote.getElementsByTagName('span');
            for (var i = 0; i < spans.length; i++) {
                var spanText =spans[i].innerText;
                if (data.includes(spanText)) {
                    var index = data.indexOf(spanText);
                    spans[i].innerText = dataArray[index];
                }
            }
        }
        window.setInterval(asdtime, 600);
    }
}();

