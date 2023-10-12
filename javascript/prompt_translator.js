"use strict";

onUiLoaded(() => {


    function get_gradio_version(){
        let foot = gradioApp().getElementById("footer");
        if (!foot){return null;}
    
        let versions = foot.querySelector(".versions");
        if (!versions){return null;}
    
        if (versions.innerHTML.indexOf("gradio: 3.16.2")>0) {
            return "3.16.2";
        } else {
            return "3.23.0";
        }
        
    }



    function getActivePrompt() {
        const currentTab = get_uiCurrentTabContent();
        switch (currentTab.id) {
            case "tab_txt2img":
                return currentTab.querySelector("#txt2img_prompt textarea");
            case "tab_img2img":
                return currentTab.querySelector("#img2img_prompt textarea");
        }
        return null;
    }

    function getActiveNegativePrompt() {
        const currentTab = get_uiCurrentTabContent();
        switch (currentTab.id) {
            case "tab_txt2img":
                return currentTab.querySelector("#txt2img_neg_prompt textarea");
            case "tab_img2img":
                return currentTab.querySelector("#img2img_neg_prompt textarea");
        }
        return null;
    }

    let gradio_ver = get_gradio_version();

    // get extension's tab's component
    let pt_prompt = gradioApp().querySelector("#pt_prompt textarea");
    let pt_translated_prompt = gradioApp().querySelector(
        "#pt_translated_prompt textarea"
    );
    let pt_trans_prompt_btn = gradioApp().getElementById("pt_trans_prompt_btn");
    let pt_trans_prompt_js_btn = gradioApp().getElementById(
        "pt_trans_prompt_js_btn"
    );
    let pt_send_prompt_btn = gradioApp().getElementById("pt_send_prompt_btn");

    let pt_neg_prompt = gradioApp().querySelector("#pt_neg_prompt textarea");
    let pt_translated_neg_prompt = gradioApp().querySelector(
        "#pt_translated_neg_prompt textarea"
    );
    let pt_trans_neg_prompt_btn = gradioApp().getElementById(
        "pt_trans_neg_prompt_btn"
    );
    let pt_trans_neg_prompt_js_btn = gradioApp().getElementById(
        "pt_trans_neg_prompt_js_btn"
    );
    let pt_send_neg_prompt_btn = gradioApp().getElementById(
        "pt_send_neg_prompt_btn"
    );

    if (!pt_prompt) {
        console.log("can not find extension's pt_prompt");
        return;
    }
    if (!pt_translated_prompt) {
        console.log("can not find extension's pt_translated_prompt");
        return;
    }
    if (!pt_trans_prompt_btn) {
        console.log("can not find extension's pt_trans_prompt_btn");
        return;
    }
    if (!pt_trans_prompt_js_btn) {
        console.log("can not find extension's pt_trans_prompt_js_btn");
        return;
    }
    if (!pt_send_prompt_btn) {
        console.log("can not find extension's pt_send_prompt_btn");
        return;
    }

    if (!pt_neg_prompt) {
        console.log("can not find extension's pt_neg_prompt");
        return;
    }
    if (!pt_translated_neg_prompt) {
        console.log("can not find extension's pt_translated_neg_prompt");
        return;
    }
    if (!pt_trans_neg_prompt_btn) {
        console.log("can not find extension's pt_trans_neg_prompt_btn");
        return;
    }
    if (!pt_trans_neg_prompt_js_btn) {
        console.log("can not find extension's pt_trans_neg_prompt_js_btn");
        return;
    }
    if (!pt_send_neg_prompt_btn) {
        console.log("can not find extension's pt_send_neg_prompt_btn");
        return;
    }

    //get target language list from pt_translated_neg_prompt
    let tar_lang_list = [""];
    let tar_lang_list_str = pt_translated_neg_prompt.value;
    if (tar_lang_list_str) {
        tar_lang_list = JSON.parse(tar_lang_list_str);
        // clear msg
        pt_translated_neg_prompt.value = "";

    } else {
        console.log("can not get tar_lang_list_str");
    }

});

