import React from "react";

function Widget() {
    return (
        <div
            dangerouslySetInnerHTML={{
                __html: `
          
           <script>
        (function(d, w, c) {
          w.ChatraID = 'KY2wDpQrMSdn4XQcD';
        var s = d.createElement('script');
        w[c] = w[c] || function() {
          (w[c].q = w[c].q || []).push(arguments);
        };
        s.async = true;
        s.src = 'https://call.chatra.io/chatra.js';
        if (d.head) d.head.appendChild(s);
    })(document, window, 'Chatra');
      </script>
        `,
            }}
        />
    );
}

export default Widget;