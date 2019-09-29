
    let text="";
    let started=null;
    var logkey=function(e)
    {
        console.log(e);
        text+=e.key;
        if(!started)
        {
            started=setTimeout(function()
            {                   
                var event = new CustomEvent('qrscan', {detail:text});
                document.dispatchEvent(event);          
                text="";
                started=null;
            },200);
        }
    }

    document.addEventListener('keypress', logkey);    

