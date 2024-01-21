function run(){
    let html=document.getElementById("HtmL-code").value;
    let css=document.getElementById("css-code").value;
    let js=document.getElementById("js-code").value;
    let output=document.getElementById("Output");
    output.contentDocument.body.innerHTML=html+"<style>" + css + "</style>"//+"<script>"+js+"</script>";
    output.contentWindow.eval(js);
}