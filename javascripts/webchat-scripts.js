let defaulturl = "https://www.timeforstorm.com/IM/endpoint/webchat2/5709/DVSA%20Webchat/bd6de6a33eccfdccb3b722a450b5d735c1fd357ff323ff63c95b8f2a715dd27a?";
const defaultParams = "im_name=anon&im_email=anon%40dvsa.gov.uk&im_emailTemplate=3988";
export function init() {
    
    const url = new URL(window.location.href);
    const chatParams = url.searchParams;
    const paramList = ['im_name', 'im_email', 'im_emailTemplate'];
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