export const formatHtml = (html) => {
  const el = document.implementation.createHTMLDocument("html");
      const article = el.createElement("article");
      article.innerHTML = html;
      el.body.appendChild(article).setAttribute("id", "body");
      const anchors = el.getElementsByTagName("a");
      let i;
      for (i = 0; i < anchors.length; i++) {
        const element = anchors.item(i);
        const parent = element.parentNode;
        parent.innerHTML = "";
        const a = document.createElement("blockquote");
        a.setAttribute("class", "embedly-card");
        a.appendChild(element);
        a.appendChild(document.createElement("p"));
        parent.appendChild(a);
      }
      if(anchors.length > 0){
        const formattedHtml = el.getElementById("body").innerHTML;
        return formattedHtml;
      }else{
        return html;
      }
}