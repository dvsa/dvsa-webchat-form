let defaulturl = "https://www.timeforstorm.com/IM/endpoint/webchat2/5709/Webchat_test/0a1f18d5816353d746caf95e07366af4d496abff155f760cbb977210a3bc1d9d?";
const defaultParams = "im_name=anon&im_email=anon%40dvsa.gov.uk&im_emailTemplate=3988&im_subject=DVSA";
export function init() {
    
    const url = new URL(window.location.href);
    const chatParams = url.searchParams;
    const paramList = ['im_name', 'im_email', 'im_emailTemplate', 'im_subject'];
    if (chatParams) {
        url.searchParams.forEach((value,key) => {
            if (paramList.includes(key)) {
                defaulturl += key + "=" + value + "&";
            }
        });
       
    }
    else {
        defaulturl += defaultParams;
    }
    // update iframe src
    document.getElementById('dvsa_chatframe').src = defaulturl;
    // update iframe height
    document.getElementById('dvsa_chatframe').style.height = (parseInt(window.innerHeight) - 15)  + 'px';
}